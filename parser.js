"use strict"
import * as fs from 'fs';
import { JSDOM } from 'jsdom';
import { XMLParser } from 'fast-xml-parser';
import { parse as CSVParse } from 'csv-parse/sync';

// eGuide xml input is done later, in a loop
const tkXML= {}; // input
const csv  = {}; // input
const dict = {}; // input
const json = {}; // output

const dict_fromBytes = {};

// tmp map used for manual matching of extra catalog entries
const name2bytes = {}

/***
Processing notes:
 - `adriweb_tokens.csv` is parsed as a map<name,props> ('csv'): EN+FR names, bytes, type, comment
 - `ti_pe_83PlusDictionary.xml` is parsed as a map<name,props> ('dict'): EN name, bytes, categories, etc.
 - `eGuide pages` are parsed: EN name, description, comment, syntax (+arguments), menu location, inEdtorOnly, special category
 - `ti-toolkit_tokens_8X.xml` is parsed as a map<bytes,props> ('tkXML'): EN name, since+until info
 - all this gets merged together in a json object <bytes,props>
***/

const goodStrLen = function(str) {
    return Array.from(new Intl.Segmenter().segment(str)).length;
}

const escapeRegExp = function(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

try {
    const fileContents = fs.readFileSync('./input/adriweb_tokens.csv', 'utf8');
    const records = CSVParse(fileContents, { columns: true, skip_empty_lines: true });
    for (const tok of records) {
        csv[tok['Readable Name']] = {
            bytes: `0x${tok['Byte 1'].padStart(2, '0')}${tok['Byte 2'].length ? tok['Byte 2'].padStart(2, '0') : ''}`,
            enName: tok['Readable Name'],
            frName: tok['Readable Name (FR)'],
            type: tok.Type?.toLowerCase() ?? '',
            comment: tok.Comments,
        };
    }
} catch (e) {
    console.error(e);
}

try {
    const fileContents = fs.readFileSync('./input/ti_pe_83PlusDictionary.xml', 'utf16le');
    const {dictionary} = new XMLParser({ignoreAttributes: false, trimValues: false, attributeNamePrefix: "__"}).parse(fileContents);
    for (const tok of dictionary["function"]) {
        if (!tok.categories) {
            continue;
        }
        if (typeof(tok.categories.category) === 'string' && tok.categories.category.startsWith('International')) {
            continue;
        }
        tok.__name = tok.__name.replace('ñ', '⁻¹').replace('å', '►').replace('â', '𝗡').replace('ã', '𝐅').replace('Æ', 'Σ')
                               .replace('ë', 'e').replace('ä', 'χ').replace('Ü', '²').replace('ü', '→').replace('Á', 'θ')
                               .replace('û', 'ᴇ').replace('ë', 'e').replace('à', '𝑖');
        if (tok.__name === 'sinh⁻¹') { tok.__name = 'sinh⁻¹('; } // sigh
        dict[tok.__name] = tok;
        dict_fromBytes[tok.__tag] = tok;
    }
} catch (e) {
    console.error(e);
}

const mergeInfoFromCSV = function(entry, csvMatch) {
    if (entry.name !== csvMatch.enName) {
        console.warn(`   *****  adjusting name from [${entry.name}] to csv-provided [${csvMatch.enName}]`);
        entry.name = csvMatch.enName;
    }
    entry.localizations.FR = csvMatch.frName;

    if ((!entry.type || entry.type === '?') && csvMatch.type) {
        entry.type = csvMatch.type;
    }

    // provide matched bytes and comment
    const comment = csvMatch.comment.length ? csvMatch.comment : undefined;
    return [ csvMatch.bytes, comment ];
}

const mergeInfoFromDict = function(entry, dictMatch, overwriteType) {
    if ((overwriteType || !entry.type) && (!dictMatch.__token || dictMatch.__token.toLowerCase() !== entry.name.toLowerCase())) {
        entry.type = dictMatch.__token ?? 'function';
    }

    const cats = dictMatch.categories?.category;
    if (typeof(cats) === 'string') {
        entry.categories.push(cats)
    } else {
        entry.categories = cats;
    }
    entry.categories = entry.categories.sort().map(cat => cat.replace('\\', ' > '));

    // provide matched name and bytes
    return [ entry.name, dictMatch.__tag ];
}

try {
    const fileContents = fs.readFileSync('./input/ti-toolkit_tokens_8X.xml', 'utf8');

    const fillTkXML = function(bytes, data) {
        tkXML[bytes] = {
            enName: String(data.lang[0].name[0]),
            since: data.since ? { [data.since.model]: data.since.version } : undefined,
            until: data.until ? { [data.until.model]: data.until.version } : undefined,
        };
    }

    const isArray = (name, jpath, isLeafNode, isAttribute) => {

        const alwaysArray = [ "tokens.byte.token", "tokens.byte.byte.token",
                              "tokens.byte.token.lang", "tokens.byte.byte.token.lang",
                              "tokens.byte.token.lang.name", "tokens.byte.byte.token.lang.name" ];
        if (alwaysArray.indexOf(jpath) !== -1) return true;
    }
    const {tokens} = new XMLParser({ignoreAttributes: false, trimValues: false, attributeNamePrefix: "__", isArray: isArray,
                                    tagValueProcessor: (tagName, tagValue, jPath) => jPath.endsWith('.version') ? null : tagValue}
                                  ).parse(fileContents);
    if(tokens.byte) {
        for (let tok of tokens.byte) {
            if (tok.byte) {
                for (const {token, __value} of tok.byte) {
                    for (const tokAlt of token) {
                        const bytes = `0x${tok.__value.substring(1)}${__value.substring(1)}`;
                        fillTkXML(bytes, tokAlt);
                    }
                }
            } else {
                for (const tokAlt of tok.token) {
                    const bytes = `0x${tok.__value.substring(1)}`;
                    fillTkXML(bytes, tokAlt);
                }
            }
        }
    } else {
        throw "ti-toolkit_tokens_8X.xml not in the expected format?";
    }
} catch (e) {
    console.error(e);
}

for(let i = 0; i < 26; i++)
{
    const letter = (i+10).toString(36);
    const folderPath = './input/ti_eGuide/';

    let fileContents;
    try {
        fileContents = fs.readFileSync(`${folderPath}/aa_appxa_${letter}.HTML`, 'utf8');
    } catch (e) {
        continue;
    }

    const tokens = (new JSDOM(fileContents)).window.document.body.querySelectorAll('table.TableStyle-RGFunction');
    for (const token of tokens)
    {
        // some global replacements...
        // ...ICOMsymbols
        for (const [s, r] of Object.entries({ "3":"◄", "4":"►", "3 4":"◄►", "G":"Σ", "q":"θ", "c":"χ", "L":"-", "@":"Δ" })) {
            token.innerHTML = token.innerHTML.replace(new RegExp(`<span class="Keys_ICOMSymbols"[^>]*>\\s*${s}\\s*</span>`, 'gi'), r);
        }
        // ...KeySymbols
        for (const [s, r] of Object.entries({ "â":"ᴇ", "Ü":"𝐅", "Ù":"⌊", "ä":"*", "æ":"I%", "Ú":"𝗡", "!":"→" })) {
            token.innerHTML = token.innerHTML.replace(new RegExp(`<span style="font-family: 'TI84KeySymbols'"[^>]*>${s}</span>`, 'gi'), r);
        }
        // ...superscripts etc.
        token.innerHTML = token.innerHTML.replace(/<span class="Superscript" style="font-family: 'ICOM Symbols'[^>]*>L<\/span>\s*<span class="Superscript" [^>]*>1<\/span>\s*<span class="Function">\(<\/span>/g, '⁻¹(');
        token.innerHTML = token.innerHTML.replace(/<span class="Superscript" style="font-family: 'ICOM Symbols'[^>]*>L<\/span>\s*<span class="Superscript" [^>]*>1<\/span>/g, '⁻¹');
        token.innerHTML = token.innerHTML.replace(/<span class="Superscript" [^>]*>2<\/span>/g, '²');
        // ...misc
        token.innerHTML = token.innerHTML.replaceAll('‑', '-'); // really...?
        token.innerHTML = token.innerHTML.replaceAll('► <span class="Function">F </span> ◄► <span class="Function">D</span>', '►F◄►D');
        token.innerHTML = token.innerHTML.replaceAll('<span class="Function">r</span> <span class="Variable">e</span> <span class="Function">^</span> θ <span class="Variable">i</span>', 're^θ𝑖');
        token.innerHTML = token.innerHTML.replaceAll('<span class="Function">6:R</span> ► <span class="Function">P</span> θ <span class="Function">(</span>', '6:R►Pθ(');

        let name = null;
        try {
            const cmdNamePar = token.querySelector('thead > tr > th > p.CmdName');
            const tmpFunc = cmdNamePar.querySelector('span.Function');
            if (!tmpFunc) {
                name = cmdNamePar.textContent.trim();
            } else {
                const cmdNameFromPar = cmdNamePar.textContent.trim().replace(/\)$/, '').replace(/\s+/g,' ').trim();
                if (tmpFunc.textContent.trim().length < cmdNameFromPar.length) {
                    name = cmdNameFromPar;
                } else {
                    name = tmpFunc.textContent.trim();
                }
            }

            // Some special cases... :-|
            name = name.replace(/(^:|\)$)/, '').replaceAll('/','⁄');
            if      (name === '1-VarStats') { name = '1-Var Stats'; }
            else if (name === '2-VarStats') { name = '2-Var Stats'; }
            else if (name === 'Store →')    { name = '→'; }
            else if (name === 'piecewise')  { name = 'piecewise('; }
            else if (name === 'χ²GOF')      { name = 'χ²GOF-Test('; }
            else if (name === 'summation Σ('){name = 'Σ('; }
            else if (name === 'sinh⁻¹ (')   { name = 'sinh⁻¹('; }
            else if (name === 'a+bi')       { name = 'a+b𝑖'; }
            else if (name === 're^θi')      { name = 're^θ𝑖'; }
            else if (name === '►F ◄►D')     { name = '►F◄►D'; }
            else if (name === '►n⁄d ◄►Un⁄d'){ name = '►n⁄d◄►Un⁄d'; }
            else if (name === 'i')          { name = '𝑖'; }
            else if (name === 'SEQ(n')      { name = 'SEQ(𝒏)'; }
            else if (name === 'SEQ(n+1')    { name = 'SEQ(𝒏+1)'; }
            else if (name === 'SEQ(n+2')    { name = 'SEQ(𝒏+2)'; }
            else if (name === 'DEC Answers'){ name = 'DEC'; }
            else if (name === 'AUTO Answer'){ name = 'AUTO'; }
            else if (name === 'Plot1( Plot2( Plot3(') { name = 'Plot1('; }
        } catch (e) {
            console.log(e)
            continue;
        }
        console.log(`processing ${name}...`);

        const tokenEntry = {
            name: name,
            type: undefined,
            categories: [],
            syntaxes: [],
            localizations: {},
            since: undefined,
            until: undefined,
        };

        let bytes = undefined;
        let comment = undefined;

        let commentRaw = token.querySelector('tbody p.SyntaxLine').innerHTML?.split('<br>');
        if (commentRaw && commentRaw.length > 1) {
            if (commentRaw[0].includes('<span')) {
                commentRaw.shift();
                comment = (new JSDOM(commentRaw)).window.document.body.textContent?.trim() ?? undefined;
            } else {
                // todo... comment and main thing locations can be swapped :/
            }
        }

        const csvMatch = csv[name] ?? csv[`${name} `] ?? csv[` ${name} `] ?? csv[`${name})`] ?? csv[`${name}) `] ?? csv[name.replace(/\($/,'')];
        const dictMatch = dict[name] ?? dict[`${name} `] ?? dict[`${name})`] ?? dict[`${name}) `] ?? dict[name.replace(/\($/,'')];

        if (typeof(csvMatch) === 'object') {
            const [ newBytes, newComment ] = mergeInfoFromCSV(tokenEntry, csvMatch);
            bytes ??= newBytes;
            comment ??= newComment;
        } else {
            console.warn("   *****  no match found in CSV")
        }

        const inDictBlackList = /(Σ\()/.test(name);
        if (!inDictBlackList && typeof(dictMatch) === 'object') {
            const [ newName, newBytes ] = mergeInfoFromDict(tokenEntry, dictMatch, true);
            name = newName;
            bytes ??= newBytes;
        } else {
            console.warn("   *****  no match found in dictionary")
        }

        const specialCategory = token.querySelector('thead > tr.Head-Header1 > th.HeadD-Column2-Header1 > p.MenuName')?.textContent.trim() ?? '';

        const syntaxLine = token.querySelector('tbody p.SyntaxLine');

        let wholeSyntaxLine = (syntaxLine?.textContent ?? '').replace(',[,','[,').replace(/ +/g,' ').replace(/ +/g,' ').trim();
        if (comment) {
            if (/^\(.*\)$/.test(comment)) {
                wholeSyntaxLine = wholeSyntaxLine.replace(new RegExp(escapeRegExp(comment) + '$'), ''); // remove potential comment at the end
                comment = comment.substring(1, comment.length-1);
            } else if (wholeSyntaxLine.endsWith(comment)) {
                comment = undefined;
            }
        }

        let optionalSinceIdx = (wholeSyntaxLine.startsWith(`${name}[`) || wholeSyntaxLine.startsWith(`${name.trim()}[`)) ? 0 : null;
        let _argIdx = 0;
        let args = [...syntaxLine.childNodes]
                    .filter(el => el.nodeType !== 8 /*COMMENT_NODE*/ && (!el.classList?.contains('Function') || el.textContent === ',' || el.getAttribute("style")?.includes('font-weight: normal')) && el.textContent.trim().length)
                    .filter((el, idx) => {
                        const str = el.textContent.trim();
                        if (str === '►') { return false; }
                        const strOrFirstPart = str.split(' ')[0];
                        return (idx > 0) || (strOrFirstPart !== name.trim() && (strOrFirstPart + '(') !== name.trim());
                    })
                    .map((el,idx,arr) => {
                        const argStr = el.textContent.trim().replace(',[,','[,');
                        if (optionalSinceIdx === null && /^\[,?$/.test(argStr)) {
                            optionalSinceIdx = _argIdx
                            if (optionalSinceIdx === 0 && name.endsWith('(')) {
                                optionalSinceIdx = 1;
                            }
                            // console.log(`    optional args start now => ${optionalSinceIdx} ; ${wholeSyntaxLine}`)
                        }
                        if (el.textContent === ',' || el.classList?.contains('Variable')) {
                            _argIdx += 1 + (argStr.replace(/(^,|,$)/g, '').match(/,/g) || []).length
                        }
                        return argStr;
                    })
                    .filter(el => el && el.textContent !== ',')
                    .map((el) => [ el.replace(/(^,*|[\[\]\(\)]|,*$)/g, ''), '', false ])
                    .map((el,idx,arr) => [ el[0], '', optionalSinceIdx !== null && idx >= optionalSinceIdx ])
                    .filter(n => n && n[0].length && !/^[\[\]\(\)]$/.test(n[0]));

        {
            let newArgs = [];
            for (const [idx, [argName, argType, isOptional]] of Object.entries(args)) {
                if (argName.includes(',')) {
                    // console.warn(`    arg ${idx} wasn't split correctly: "${argName}". args was: ${JSON.stringify(args)}`);
                    for (const [idx2, arg] of Object.entries(argName.split(','))) {
                        newArgs.push([arg.replace(/^\(/, '').trim(), argType, isOptional])
                    }
                } else {
                    newArgs.push([argName, argType, isOptional]);
                }
            }
            args = newArgs;
        }

        // args misc. cleanup and type determination...
        args = args.filter(el => el && el[0].length);
        for (const [idx, [argName]] of Object.entries(args)) {
            if (argName === "Plot#type") {
                wholeSyntaxLine = wholeSyntaxLine.replace(new RegExp('^' + escapeRegExp(name)), '').trim();
                args[idx] = [ 'type', `${name} token`, false ];
            }
            if (/^listname\d/i.test(argName)) {
                args[idx][1] = 'listName'
            } else if (argName.includes('list')) {
                args[idx][1] = 'list'
            } else if (argName === 'string' || argName.startsWith('text')) {
                args[idx][1] = 'string'
            } else if (argName === 'color#') {
                args[idx][1] = 'colorNum'
            } else if (argName === 'linestyle#') {
                args[idx][1] = 'number'
            } else if (argName === 'expression') {
                args[idx][1] = 'expression'
            }
            //console.log(idx, argName, arguments[idx][1])
        }

        // remove last arg if it's just a comment that got there somehow (not an actual arg)
        if (comment && args.length && new RegExp('^\\(?' + comment + '$').test(args[args.length-1][0])) {
            args.pop();
        }

        let description = "";
        {
            const descRaw = Array.from(token.querySelectorAll('tbody p.CmdDesc'));
            descRaw.forEach((el) => { el.innerHTML = el.innerHTML.replace(/<span class="(?:Function|Variable)">([^<]+)<\/span>/g, '`$1`'); });
            description = descRaw.map(el => el.textContent.trim()).join("\n").replace('``', '');
        }

        const rawLocation = token.querySelector('tbody p.MenuName > span')?.parentElement;
        const location = [ ...(rawLocation?.children ?? []) ]
                         .map(el => el.textContent.trim())
                         .filter(el => el)
                         .map(el => el.replace(/^»$/, '[math]').replace(/^y$/, '[2nd]').replace(/^:$/, '[test]').replace(/^q$/, '[zoom]')
                                      .replace(/^V$/, '[𝑖]').replace(/^>$/, '[matrix]').replace(/^…$/, '[stat]').replace(/^¼$/, '[prgm]')
                                      .replace(/^=$/, '[distr]').replace(/^Œ$/, '[apps]').replace(/^\.$/, '[format]').replace(/^r$/, '[trace]')
                                      .replace(/^9$/, '[list]').replace(/^˜$/, '[sin]').replace(/^\? $/, '[sin⁻¹]').replace(/^™$/, '[cos]')
                                      .replace(/^@$/, '[cos⁻¹]').replace(/^š$/, '[tan]').replace(/^A$/, '[tan⁻¹]').replace(/^z$/, '[mode]')
                                      .replace(/^L$/, '[mem]').replace(/^i$/, '𝑖').replace(/^-$/, '[tblset]').replace(/^;$/, '[angle]')
                                      .replace(/^J$/, '[eˣ]').replace(/^D$/, '[ᴇᴇ]').replace(/^t$/, '[alpha]').replace(/^\^$/, '[F1]')
                                      .replace(/^N$/, '[catalog]').replace(/^<$/, '[draw]').replace(/^,$/, '[stat plot]').replace(/^Z$/, '[ans]')
                                      .replace(/^½$/, '[vars]').replace(/^æ$/, 'I%').replace(/^Ú$/, '𝗡').replace(/^ä$/, '*').replace(/^@$/, 'Δ'));
        if (location.length >= 2) {
            if (name.includes('►')) {
                const [ part1, part2 ] = name.split('►');
                if (location[location.length-1] === part2 && (new RegExp('^([A-Z\d]:)?' + escapeRegExp(part1) + '$').test(location[location.length-2]))) {
                    location[location.length-2] += '►' + location.pop();
                }
            }
            if (/^[A-Z\d]:$/.test(location[location.length-2])) {
                location[location.length-2] += location.pop();
            }
        }

        let specificName = undefined;
        if (!bytes) {
            bytes = {
                'If Then End':      name2bytes['If '],
                'If Then Else End': name2bytes['If '],
            }[name];
            specificName = name;
            if (!bytes) {
                throw `bytes not defined for token name: [${name}]`;
            }
        }

        tokenEntry.since = tkXML[bytes]?.since;
        tokenEntry.until = tkXML[bytes]?.until;

        (json[bytes] ??= tokenEntry).syntaxes.push({
            specificName: specificName,
            syntax: wholeSyntaxLine,
            comment: comment,
            arguments: args,
            description: description,
            inEditorOnly: (token.querySelector('tbody p.MenuName')?.textContent ?? '').includes('†'),
            location: location.length > 1 ? location : [`[${name.replace(/\($/,'')}]`],
            specialCategory: specialCategory.length ? specialCategory : undefined,
        });

        name2bytes[name] = bytes;
    }
}

// Add all other tokens from the CSV
for (const [ enName, { bytes, frName, type, comment } ] of Object.entries(csv)) {
    if (json[bytes]) {
        continue;
    }

    const entry = {
        name: enName,
        type: type ?? 'function',
        categories: [],
        syntaxes: [{
            specificName: undefined,
            syntax: enName,
            comment: comment,
            arguments: [],
            description: '',
            inEditorOnly: bytes.length > 4,
            location: '',
            specialCategory: undefined,
        }],
        localizations: { FR: frName },
        since: tkXML[bytes]?.since,
        until: tkXML[bytes]?.until,
    };

    if (dict_fromBytes[bytes]) {
        // console.log(`DICT handled: ${bytes} = ${enName}`)
        mergeInfoFromDict(entry, dict_fromBytes[bytes], false)
    } else {
        // console.log(`NOT handled at all: ${bytes} = ${enName}`)
        if (/^[a-z]$/i.test(enName)) {
            entry.categories.push('Char > Letters');
        } else if (/^[α-ω]$/i.test(enName)) {
            entry.categories.push('Char > Greek');
        } else if (bytes >= '0xBB6E' && bytes <= '0xBB9E') {
            entry.categories.push('Char > International');
        } else if (type.includes('operator')) {
            entry.categories.push('Operators');
        } else if (/^[0-9₀-₉]$/i.test(enName)) {
            entry.categories.push('Char > Digits');
        } else if (goodStrLen(enName) === 1) {
            entry.categories.push('Char > Others');
        } else {
            entry.categories.push('Other (non-catalog)');
        }
    }

    json[bytes] = entry;
}

fs.writeFileSync('output/TI-84_Plus_CE_catalog-tokens.json', JSON.stringify(json, null, 2));
