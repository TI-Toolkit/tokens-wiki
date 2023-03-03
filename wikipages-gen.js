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

const name2bytes = {};
const pagesByCat = {};
const bytes2filename = {};

for (const [bytes, token] of Object.entries(tokens)) {
    token.name = token.name.replaceAll('\n', '⏎ (newline)'); // special case...
    name2bytes[token.name] = bytes;
    let categoriesLinks = '';
    for (const categoryStr of token.categories) {
        const [cat, subCat] = categoryStr.split(' > ');
        if (cat && !token._mainCatForFilename) { token._mainCatForFilename = '(' + cat.split(' ')[0].toLowerCase() + ')'; }
        if (!pagesByCat[cat]) { pagesByCat[cat] = {}; }
        if (subCat) {
            if (!pagesByCat[cat][subCat]) { pagesByCat[cat][subCat] = {}; }
            pagesByCat[cat][subCat][token.name] = true;
        } else {
            pagesByCat[cat][token.name] = true;
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
## Description
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
                page += `
<tr><td>${arg[0]}</td><td>${arg[1]}</td><td>${arg[2]}</td></tr>
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

    page += `
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
            sinceUntilLines.push(`| <b>${model}</b> | ${actualVer} | ` + (multipleSinceUntil ? `\`${nameInVer.replace(/`/g, '\\`')}\` ` : '') + (multipleSinceUntil ? action : capitalizeFirstLetter(action)));
        }
    }

    sinceUntilLines.sort((a, b) => a.localeCompare(b)).forEach((line) => { page += line + '\n'; });

    page += `
## Related Commands

    `;

    const cleanName = cleanTokNameForFile(token.name, bytes, (token?._mainCatForFilename ?? bytes), token.isAlias);
    if (token.name !== cleanName && `${cleanName} ` !== token.name) {
        // console.log(`[Warning] name difference for bytes ${bytes} : [${token.name ?? '???'}] vs [${cleanName}]`);
    }
    bytes2filename[bytes] = cleanName;
    fs.writeFileSync(`output/wikipages/tokens/${cleanName}.md`, page.trimStart());
}

let catIndexPage = '# Categories\n\n';
for (const [ cat, entries ] of Object.entries(pagesByCat).sort((a, b) => a[0].localeCompare(b[0]))) {
    const cleanCatName = sanitize(cat);
    if (!cleanCatName) { continue; }

    catIndexPage += `### <a href="./categories/${cleanCatName}.md">${cat}</a>\n\n`;
    let catPage = `# ${cat}\n\n`;
    for (const [ subCatOrPage, val ] of Object.entries(entries).sort((a, b) => a[0].localeCompare(b[0]))) {
        if (val === true) {
            const bytes = name2bytes[subCatOrPage];
            const cleanTokFileName = bytes2filename[bytes];
            if (fs.existsSync(`./output/wikipages/tokens/${cleanTokFileName}.md`)) {
                catPage += ` * <a href="../tokens/${cleanTokFileName}.md" title="${bytes}">${subCatOrPage.replaceAll('\n', '⏎ (new line)')}</a>\n`;
            } else {
                // console.warn(`[val] page doesn't exist for bytes = ${bytes} subCatOrPage = ${subCatOrPage}. extraSuffixFromCat = ${extraSuffixFromCat}`);
                catPage += ` * <span title="${bytes}">${subCatOrPage}</span>\n`;
            }
        } else if (typeof(val) === 'object') {
            catPage += `\n## ${subCatOrPage}\n\n`
            for (const [ tokName ] of Object.entries(val).sort((a, b) => a[0].localeCompare(b[0]))) {
                const bytes = name2bytes[tokName];
                const cleanTokFileName = bytes2filename[bytes];
                if (fs.existsSync(`./output/wikipages/tokens/${cleanTokFileName}.md`)) {
                    catPage += ` * <a href="../tokens/${cleanTokFileName}.md" title="${bytes}">${tokName}</a>\n`;
                } else {
                    // console.warn(`[val object] page doesn't exist for bytes = ${bytes} tokName = ${tokName}. extraSuffixFromCat = ${extraSuffixFromCat}`);
                    catPage += ` * <span title="${bytes}">${tokName}</span>\n`;
                }
            }
            if (cat !== 'Catalog') {
                catIndexPage += ` * <a href="./categories/${cleanCatName}.md#${subCatOrPage}">${subCatOrPage}</a>\n\n`;
            }
        } else {
            throw "wut";
        }
    }
    catPage += '\n';
    fs.writeFileSync(`output/wikipages/categories/${cleanCatName}.md`, catPage.trimStart());
}

fs.writeFileSync(`output/wikipages/categories.md`, catIndexPage.trimStart());
