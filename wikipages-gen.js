"use strict"
import * as fs from 'fs';
import sanitize from 'sanitize-filename';

const emptyDir = function(dir) {
    for (const file of fs.readdirSync(dir)) {
        fs.unlinkSync(`${dir}/${file}`);
    }
}

const tokens = JSON.parse(fs.readFileSync('./output/TI-84_Plus_CE_catalog-tokens.json', 'utf8'));

emptyDir('./output/wikipages/categories');
emptyDir('./output/wikipages/tokens');

const pagesByCat = {};

for (const [bytes, token] of Object.entries(tokens)) {
    let categoriesLinks = '';
    for (const categoryStr of token.categories) {
        const [cat, subCat] = categoryStr.split(' > ');
        if (!pagesByCat[cat]) { pagesByCat[cat] = {}; }
        if (subCat) {
            if (!pagesByCat[cat][subCat]) { pagesByCat[cat][subCat] = {}; }
            pagesByCat[cat][subCat][token.name] = true;
        } else {
            pagesByCat[cat][token.name] = true;
        }
        categoriesLinks += `<li>[${cat}](../categories/${cat}.md)` + (subCat ? ` > [${subCat}](../categories/${cat}.md#${subCat})` : '') + '</li>';
    }

    let localizations = '';
    for (const [lang, name] of Object.entries(token.localizations)) {
        localizations += `<li><b>${lang}</b>: \`${name}\`</li>`;
    }

    let page = `
| Property      | Value |
|---------------|-------|
| Hex Value     | \`\$${bytes.substring(2)}\`|
| Categories    | <ul>${categoriesLinks}</ul> |
| Localizations | <ul>${localizations}</ul> |

# \`${token.name}\`
`;

    for (const info of token.syntaxes) {

        if (info.specificName && info.specificName.length) {
            page += `
# \`${info.specificName}\`
`;
        }

        page += `
## Description
${info.description}

${info.comment ? ('<b>Comment</b>:' + info.comment + '\n') : ''}
<b>Availability</b>: ${info.inEditorOnly ? 'Token only available from within the Basic editor.' : 'Token available everywhere.'}

## Syntax
\`${info.syntax}\`
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
                if (el.startsWith('[')) {
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
    const sinceHTML = token.since ? `| <b>${Object.keys(token.since)[0]}</b> | ${Object.values(token.since)[0]} | Added` : '';
    const untilHTML = token.until ? `| <b>${Object.keys(token.until)[0]}</b> | ${Object.values(token.until)[0]} | Removed` : '';
    page += sinceHTML + untilHTML + '\n';

    page += `
## Related Commands

    `;

    fs.writeFileSync(`output/wikipages/tokens/${sanitize(token.name)}.md`, page.trimStart());
}

let catIndexPage = '# Categories\n\n';
for (const [ cat, entries ] of Object.entries(pagesByCat).sort((a, b) => a[0].localeCompare(b[0]))) {
    catIndexPage += `### <a href="./categories/${sanitize(cat)}.md">${cat}</a>\n\n`;
    let catPage = `# ${cat}\n\n`;
    for (const [ subCatOrPage, val ] of Object.entries(entries).sort((a, b) => a[0].localeCompare(b[0]))) {
        if (val === true) {
            catPage += ` * <a href="../tokens/${sanitize(subCatOrPage)}.md">${subCatOrPage}</a>\n`;
        } else if (typeof(val) === 'object') {
            catPage += `\n## ${subCatOrPage}\n\n`
            for (const [ tokName ] of Object.entries(val).sort((a, b) => a[0].localeCompare(b[0]))) {
                catPage += ` * <a href="../tokens/${sanitize(tokName)}.md">${tokName}</a>\n`;
            }
            if (cat !== 'Catalog') {
                catIndexPage += ` * <a href="./categories/${sanitize(cat)}.md#${subCatOrPage}">${subCatOrPage}</a>\n\n`;
            }
        } else {
            throw "wut";
        }
    }
    catPage += '\n';
    fs.writeFileSync(`output/wikipages/categories/${sanitize(cat)}.md`, catPage.trimStart());
}

fs.writeFileSync(`output/wikipages/categories.md`, catIndexPage.trimStart());
