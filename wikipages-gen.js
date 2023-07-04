"use strict"
import * as fs from 'fs';
import sanitize from 'sanitize-filename';

const capitalizeFirstLetter = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const emptyDir = function(dir) {
    for (const file of fs.readdirSync(dir)) {
        fs.unlinkSync(`${dir}/${file}`);
    }
}

const cleanTokNameForFile = function(tokName, bytes, extraSuffix, isAlias) {
    tokName = tokName.replace(/\/Y$/, '_Y').replace(/^\|$/, '(pipe_symbol)');
    return (isAlias || /^\[?\|(.*?)\]?$/.test(tokName))
        ? (sanitize(`${tokName.replace(/^\[?\|(.*?)\]?$/, '$1')}_${extraSuffix}`) || bytes)
        : (sanitize(tokName) || bytes);
}

const tokens = JSON.parse(fs.readFileSync('./output/TI-84_Plus_CE_catalog-tokens.json', 'utf8'));

emptyDir('./output/wikipages/categories');
emptyDir('./output/wikipages/tokens');

const pagesByCat = {};
const bytes2filename = {};
const filenamesUsedSoFar = {};

for (const [bytes, token] of Object.entries(tokens)) {
    token.name = token.name.replaceAll('\n', '⏎ (newline)'); // special case...
    let categoriesLinks = '';
    for (const categoryStr of token.categories) {
        const [cat, subCat] = categoryStr.split(' > ');
        if (cat && !token._mainCatForFilename) { token._mainCatForFilename = '(' + cat.split(' ')[0].toLowerCase() + ')'; }
        if (!pagesByCat[cat]) { pagesByCat[cat] = {}; }
        if (subCat) {
            if (!pagesByCat[cat][subCat]) { pagesByCat[cat][subCat] = {}; }
            pagesByCat[cat][subCat][bytes] = token.name;
        } else {
            pagesByCat[cat][bytes] = token.name;
        }
        categoriesLinks += `<li>[${cat}](<../categories/${cat}.md>)` + (subCat ? ` > [${subCat}](<../categories/${cat}.md#${subCat}>)` : '') + '</li>';
    }

    let localizations = '';
    if (bytes !== '0x3F') { // newline...
        for (const [lang, name] of Object.entries(token.localizations)) {
            localizations += `<li><b>${lang}</b>: \`${name.replace(/`/g, '\\`')}\`</li>`;
        }
    }

    let page = `
| Property      | Value |
|---------------|-------|
| Hex Value     | \`\$${bytes.substring(2)}\`|
| Categories    | <ul>${categoriesLinks}</ul> |
| Localizations | <ul>${localizations}</ul> |

# \`${token.name.replace(/`/g, '\\`')}\`
`;

    for (const info of token.syntaxes) {

        if (info.specificName && info.specificName.length) {
            page += `
# \`${info.specificName.replace(/`/g, '\\`')}\`
`;
        }

        page += `
## Overview
${info.description}

${info.comment ? ('<b>Comment</b>:' + info.comment + '\n') : ''}\n`;

        if (info.inEditorOnly !== undefined) {
            page += `<b>Availability</b>: ${info.inEditorOnly ? 'Token only available from within the Basic editor.' : 'Token available everywhere.'}\n`;
        }

        page += `
## Syntax
\`${info.syntax.replace(/`/g, '\\`')}\`
`;

        if (info.arguments && info.arguments.length) {
            page += `
## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>
`;
            for (const arg of info.arguments) {
                const isOptional = !!arg[2];
                page += `
<tr><td>${(isOptional ? '' : '<b>') + arg[0] + (isOptional ? '' : '</b>')}</td><td>${arg[1]}</td><td>${isOptional ? 'Yes' : ''}</td></tr>
`;
            }

            page += `
</table>
`
        }

        if (info.location && info.location.length) {
            page += `
## Location
`;
            for (const [i, el] of info.location.entries()) {
                if (el.startsWith('【')) {
                    page += `<tt><kbd><b>${el.substring(1, el.length-1)}</b></kbd></tt>`;
                } else if (el.startsWith('[')) {
                    page += `<kbd>${el.substring(1, el.length-1)}</kbd>`;
                } else {
                    page += '`' + el + '`';
                }
                if (+i < info.location.length-1) {
                    page += ', ';
                }
            }
        }

        if (info.specialCategory && info.specialCategory.length) {
            page += `
## Special Category
${info.specialCategory}
`;
        }

        page += `
<hr>
`;
    }

    // for the output file name...
    let cleanName = cleanTokNameForFile(token.name, bytes, (token?._mainCatForFilename ?? bytes), token.isAlias);
    if (token.name !== cleanName && `${cleanName} ` !== token.name) {
        // console.log(`[Warning] name difference for bytes ${bytes} : [${token.name ?? '???'}] vs [${cleanName}]`);
    }
    if (filenamesUsedSoFar[cleanName]) {
        cleanName += `_(${bytes.substring(2)})`;
    }

    // tibd stuff
    const tibdPath = `./input/tibd_gen/${cleanName}.md`;
    let hasTIBDinfo = fs.existsSync(tibdPath);
    if (hasTIBDinfo) {
        const tibdFile = fs.readFileSync(tibdPath, 'utf8');
        page += `\n## Description\n\n${tibdFile}\n`;
    } else {
        page += `
## Description


## Examples

Explanation 1
\`\`\`ti-basic
code 1
\`\`\`
---
Explanation 2
\`\`\`ti-basic
code 2
\`\`\`

## Error Conditions


## Advanced Notes

`;
    }


    page += `
## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
`;

    const sinceUntilLines = [];
    const multipleSinceUntil = Object.keys(token.since ?? {}).length > 1 || Object.keys(token.until ?? {}).length > 1;
    // handle potential renamings...
    for (let [model, sinceVer] of Object.entries(token.since ?? [])) {
        let untilVer = token.until && token.until[model];
        if (untilVer) {
            let sinceNameInVer, untilNameInVer;
            [sinceVer, sinceNameInVer = token.name] = sinceVer.split('|');
            [untilVer, untilNameInVer = token.name] = untilVer.split('|');
            if (sinceVer === untilVer && sinceNameInVer !== untilNameInVer) {
                // console.log(`renaming detected in ${model}, at version ${sinceVer}: [${untilNameInVer}] => [${sinceNameInVer}]`);
                sinceUntilLines.push(`| <b>${model}</b> | ${sinceVer} | Renamed \`${untilNameInVer.replace(/`/g, '\\`')}\` to \`${sinceNameInVer.replace(/`/g, '\\`')}\``);
                delete token.since[model];
                delete token.until[model];
            }
        }
    }
    // process each remaining item
    for (const [which, action] of Object.entries({ since: 'added', until: 'removed' })) {
        for (const [model, ver] of Object.entries(token[which] ?? [])) {
            const [actualVer, nameInVer = token.name] = ver.split('|');
            sinceUntilLines.push(`| <b>${model}</b> | ${actualVer} | ` + (multipleSinceUntil ? `\`${nameInVer.replace(/`/g, '\\`')}\` ` : '') + (multipleSinceUntil ? action : capitalizeFirstLetter(action)) + ' |');
        }
    }

    sinceUntilLines.sort((a, b) => a.localeCompare(b)).forEach((line) => { page += line + '\n'; });

    if (!hasTIBDinfo) {
        page += `\n## Related Commands\n\n`;
    } else {
        page += `\n\n`;
    }

    bytes2filename[bytes] = cleanName;
    filenamesUsedSoFar[cleanName.toLocaleLowerCase()] = true;
    fs.writeFileSync(`output/wikipages/tokens/${cleanName}.md`, page.trimStart());
}

let catIndexPage = '# Categories\n\n';
for (const [ cat, entries ] of Object.entries(pagesByCat).sort((a, b) => a[0].localeCompare(b[0]))) {
    const cleanCatName = sanitize(cat);
    if (!cleanCatName) { throw "wut empty cat"; }

    catIndexPage += `### <a href="./categories/${cleanCatName}.md">${cat}</a>\n\n`;
    let catPage = `# ${cat}\n\n`;
    for (const [ subCatOrBytes, val ] of Object.entries(entries).sort( (a, b) => typeof(a[1]) === 'string' ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0]) )) {
        if (typeof(val) === "string") {
            const bytes = subCatOrBytes;
            const cleanTokFileName = bytes2filename[bytes];
            if (fs.existsSync(`./output/wikipages/tokens/${cleanTokFileName}.md`)) {
                catPage += ` * <a href="../tokens/${cleanTokFileName}.md" title="${bytes}">${val.replaceAll('\n', '⏎ (new line)') || ('<i>( '+bytes+' )</i>')}</a>\n`;
            } else {
                console.warn(`[val] page doesn't exist for bytes = ${bytes} val = ${val}`);
                catPage += ` * <span title="${bytes}">${val}</span>\n`;
            }
        } else if (typeof(val) === 'object') {
            const subCat = subCatOrBytes;
            catPage += `\n## ${subCat}\n\n`;
            for (const [ bytes, tokName ] of Object.entries(val).sort((a, b) => a[cat === 'Catalog' ? 1 : 0].localeCompare(b[cat === 'Catalog' ? 1 : 0]))) {
                const cleanTokFileName = bytes2filename[bytes];
                if (fs.existsSync(`./output/wikipages/tokens/${cleanTokFileName}.md`)) {
                    catPage += ` * <a href="../tokens/${cleanTokFileName}.md" title="${bytes}">${tokName || ('<i>( '+bytes+' )</i>')}</a>\n`;
                } else {
                    console.warn(`[val object] page doesn't exist for bytes = ${bytes} tokName = ${tokName}`);
                    catPage += ` * <span title="${bytes}">${tokName}</span>\n`;
                }
            }
            if (cat !== 'Catalog') {
                catIndexPage += ` * <a href="./categories/${cleanCatName}.md#${subCat}">${subCat}</a>\n\n`;
            }
        } else {
            throw "wut";
        }
    }
    catPage += '\n';
    fs.writeFileSync(`output/wikipages/categories/${cleanCatName}.md`, catPage.trimStart());
}

fs.writeFileSync(`output/wikipages/categories.md`, catIndexPage.trimStart());
