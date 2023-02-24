"use strict"
import * as fs from 'fs';
import sanitize from 'sanitize-filename';

const tokens = JSON.parse(fs.readFileSync('./output/TI-84_Plus_CE_catalog-tokens.json', 'utf8'));

for (const [bytes, token] of Object.entries(tokens)) {
    let categories = '';
    for (const category of token.categories) {
        categories += `<li>${category}</li>`;
    }

    let localizations = '';
    for (const [lang, name] of Object.entries(token.localizations)) {
        localizations += `<li><b>${lang}</b>: \`${name}\`</li>`;
    }

    let page = `
| Property      | Value |
|---------------|-------|
| Hex Value     | \`\$${bytes.substring(2)}\`|
| Categories    | <ul>${categories}</ul> |
| Localizations | <ul>${localizations}</ul> |

# \`${token.name}\`
`;

    for (const info of token.syntaxes) {
        page += `
## Description
${info.description}

${info.comment ? ('<b>Comment</b>:' + token.comment + '\n') : ''}
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

    fs.writeFileSync(`output/wikipages/${sanitize(token.name)}.md`, page.trimStart());
}
