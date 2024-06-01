"use strict"
import * as fs from 'fs';
import { JSDOM } from 'jsdom';
import { XMLParser } from 'fast-xml-parser';
import { parse as CSVParse } from 'csv-parse/sync';

// eGuide xml input is done later, in a loop
const tkXML= {}; // input
const csv  = {}; // input
const dict = {}; // input
const manualOverrides = {}; // input
const json = {}; // output

// temp maps used for manual matching of other tokens
const csv_fromBytes = {};
const dict_fromBytes = {};
const name2bytes = {}

/***
Processing notes:
 - `adriweb_tokens.csv` is parsed as a map<name,props> ('csv'): EN+FR names, bytes, type, comment
 - `ti_pe_83PlusDictionary.xml` is parsed as a map<name,props> ('dict'): EN name, bytes, categories, etc.
 - `eGuide pages` are parsed: EN name, description, comment, syntax (+arguments), menu location, inEdtorOnly, special category
 - `ti-toolkit_tokens_8X.xml` is parsed as a map<bytes,props[]> ('tkXML'): [ EN name, since+until info ]
 - all this gets merged together in a json object <bytes,props>
***/

const decodeHtmlEntity = function(str) {
    return str.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(code));
}

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
         const data = {
            bytes: `0x${tok['Byte 1'].padStart(2, '0')}${tok['Byte 2'].length ? tok['Byte 2'].padStart(2, '0') : ''}`,
            enName: tok['Readable Name'],
            frName: tok['Readable Name (FR)'],
            type: tok.Type?.toLowerCase() ?? '',
            comment: tok.Comments,
        };
        csv_fromBytes[data.bytes] = data;
        csv[tok['Readable Name']] = data;
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
                               .replace('ë', '𝑒').replace('ä', 'χ').replace('Ü', '²').replace('ü', '→').replace('Á', 'θ')
                               .replace('û', 'ᴇ').replace('Ë', 'x̄').replace('à', '𝑖').replace('¾', '∆').replace('e^', '𝑒^');
        if (tok.__name === 'sinh⁻¹') { tok.__name = 'sinh⁻¹('; } // sigh
        else if (/^∆[XY]$/.test(tok.__name)) { tok.categories.category = 'Variables > Window ➤ X/Y'; } // was "Unassigned"
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
    return [ csvMatch.enName, csvMatch.bytes, comment ];
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
    entry.categories = entry.categories.sort().map(cat => cat.replace('\\', ' > ').replace('\\', ' ➤ ')
                                                             .replace('Á', 'θ').replace('Æ', 'Σ')
                                                             .replace(/^Drawing$/, 'Drawing > Commands'));

    // who knows why
    if (dictMatch.__tag === '0xBB96') {
        entry.categories = [ 'Char > International' ];
    }

    // provide matched name and bytes
    return [ entry.name, dictMatch.__tag ];
}

const mergeSinceUntilFromTkXML = function(entry, match, enName) {
    for (const tok of match) {
        for (const which of ['since', 'until']) {
            for (const [model, ver] of Object.entries(tok[which] ?? [])) {
                const cleanedName = tok.enName.replace(/^\[(.{2,})\]$/g, '$1');
                const nameIsDifferent = (tok.enName !== enName && tok.enAccessible !== enName && cleanedName !== enName);
                (entry[which] ??= {})[model] = ver + (nameIsDifferent ? `|${cleanedName}` : '');
            }
        }
    }
}

try {
    const data = JSON.parse(fs.readFileSync('./input/manual_overrides.json', 'utf8'));
    for (const [ bytes, overrides ] of Object.entries(data)) {
        manualOverrides[bytes] = overrides;
    }
} catch (e) {
    console.error(e);
}

try {
    const fileContents = fs.readFileSync('./input/ti-toolkit_tokens_8X.xml', 'utf8');

    const fillTkXML = function(bytes, data) {
        (tkXML[bytes] ??= []).push({
            enName: decodeHtmlEntity(String(data.lang[0].display)),
            enAccessible: decodeHtmlEntity(String(data.lang[0].accessible)),
            enVariants: data.lang[0].variant ? data.lang[0].variant.map((str) => decodeHtmlEntity(str)) : undefined,
            since: data.since ? { [data.since.model]: String(data.since['os-version']) } : undefined,
            until: data.until ? { [data.until.model]: String(data.until['os-version']) } : undefined,
        });
    }

    const isArray = (name, jpath, isLeafNode, isAttribute) => {

        const alwaysArray = [ "tokens.two-byte.token.version", "tokens.token.version",
                              "tokens.two-byte.token.version.lang", "tokens.token.version.lang",
                              "tokens.two-byte.token.version.lang.variant", "tokens.token.version.lang.variant"];
        if (alwaysArray.indexOf(jpath) !== -1) return true;
    }
    const {tokens} = new XMLParser({ignoreAttributes: false, trimValues: false, attributeNamePrefix: "__", isArray: isArray,
                                    tagValueProcessor: (tagName, tagValue, jPath) => jPath.endsWith('.os-version') ? null : tagValue}
                                  ).parse(fileContents);
    if(tokens['two-byte'] || tokens.token) {
        for (let tok of (tokens['two-byte'] ?? [])) {
            for (const {version, __value} of tok.token) {
                for (const tokData of version) {
                    const bytes = `0x${tok.__value.substring(1)}${__value.substring(1)}`;
                    fillTkXML(bytes, tokData);
                }
            }
        }
        for (const {version, __value} of (tokens.token ?? [])) {
            for (const tokData of version) {
                const bytes = `0x${__value.substring(1)}`;
                fillTkXML(bytes, tokData);
            }
        }
    } else {
        throw "ti-toolkit_tokens_8X.xml not in the expected format?";
    }
} catch (e) {
    console.error(e);
}

const fontReplacements = {
    ti84KeySymbols_Keys: {
        '»':'【math】',   'y':'【2nd】',    ':':'[test]',   'q':'【zoom】',   'V':'[𝑖]',      '>':'[matrix]',
        '…':'【stat】',   '¼':'【prgm】',   '=':'[distr]',  'Œ':'【apps】',   'r':'【trace】',  '9':'[list]',
        '˜':'【sin】',    '? ':'[sin⁻¹]', '™':'【cos】',    '@':'[cos⁻¹]',  'š':'【tan】',    'A':'[tan⁻¹]',
        'z':'【mode】',   'L':'[mem]',    '-':'[tblset]', ';':'[angle]',  'J':'[eˣ]',     '?':'[sin⁻¹]',
        'D':'[ᴇᴇ]',     't':'【alpha】',  'N':'[catalog]','<':'[draw]',   'Z':'[ans]',    ',':'[stat plot]',
        '½':'【vars】',   '^':'[F1]',     '.':'[format]' ,'Í':'【enter】',  '«':'【log】',    'µ':'【ln】',
        '¿':'【sto→】',
    },
    ti84KeySymbols_Other: {
        "â":"ᴇ", "Û":"𝐅", "Ü":"𝐅", "Ù":"ʟ", "ä":"*", "æ":"I%", "Ú":"𝗡", "!":"→",'Í':'【enter】'
    },
    ICOMsymbols: {
        "3":"◄", "4":"►", "3 4":"◄►", "G":"Σ", "q":"θ", "c":"χ", "L":"-", "@":"Δ", "H":"ε", "m":"μ", "s":"σ", "v":"x̄", "":"≠", "":"≤"
    }
}

const menuReplacements = {
    ...fontReplacements.ti84KeySymbols_Keys, 'i':'𝑖',
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

    const docBody = (new JSDOM(fileContents)).window.document.body;

    {
        // some global replacements...
        // ...ICOMsymbols
        for (const [s, r] of Object.entries(fontReplacements.ICOMsymbols)) {
            docBody.innerHTML = docBody.innerHTML.replace(new RegExp(`<span class="Keys_ICOMSymbols"[^>]*>\\s*${s}\\s*</span>`, 'gi'), r);
        }
        // ...KeySymbols
        for (const [s, r] of Object.entries(fontReplacements.ti84KeySymbols_Other)) {
            docBody.innerHTML = docBody.innerHTML.replace(new RegExp(`<span style="font-family: 'TI84KeySymbols'"[^>]*>${escapeRegExp(s)}</span>`, 'gi'), r);
        }
        // ...superscripts etc.
        docBody.innerHTML = docBody.innerHTML
            .replace(/<span class="Superscript" style="font-family: 'ICOM Symbols'[^>]*>L<\/span>\s*<span class="Superscript" [^>]*>1<\/span>\s*<span class="Function">\(<\/span>/g, '⁻¹(')
            .replace(/<span class="Superscript" style="font-family: 'ICOM Symbols'[^>]*>L<\/span>\s*<span class="Superscript" [^>]*>1<\/span>/g, '⁻¹')
            .replace(/<span class="Superscript" [^>]*>2<\/span>/g, '²')
        // ...misc
            .replaceAll('‑', '-') // really...?
            .replaceAll('► <span class="Function">F </span> ◄► <span class="Function">D</span>', '►F◄►D')
            .replaceAll('<span class="Function">r</span> <span class="Variable">e</span> <span class="Function">^</span> θ <span class="Variable">i</span>', 'r𝑒^θ𝑖')
            .replaceAll('<span class="Function">6:R</span> ► <span class="Function">P</span> θ <span class="Function">(</span>', '6:R►Pθ(');
    }

    const tokens = docBody.querySelectorAll('table.TableStyle-RGFunction');
    for (const token of tokens)
    {
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
            else if (name === 're^θi')      { name = 'r𝑒^θ𝑖'; }
            else if (name === '►F ◄►D')     { name = '►F◄►D'; }
            else if (name === '►n⁄d ◄►Un⁄d'){ name = '►n⁄d◄►Un⁄d'; }
            else if (name === 'i')          { name = '𝑖'; }
            else if (name === 'SEQ(n')      { name = 'SEQ(𝑛)'; }
            else if (name === 'SEQ(n+1')    { name = 'SEQ(𝑛+1)'; }
            else if (name === 'SEQ(n+2')    { name = 'SEQ(𝑛+2)'; }
            else if (name === 'e^(')        { name = '𝑒^('; }
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
            accessibleName: undefined,
            nameVariants: undefined,
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

        const csvMatch =   csv[name] ??  csv[`${name} `] ??  csv[` ${name} `] ??  csv[`${name})`] ??  csv[`${name}) `] ??  csv[name.replace(/\($/,'')];
        const dictMatch = dict[name] ?? dict[`${name} `] ?? dict[` ${name} `] ?? dict[`${name})`] ?? dict[`${name}) `] ?? dict[name.replace(/\($/,'')];

        if (typeof(csvMatch) === 'object') {
            const [ newName, newBytes, newComment ] = mergeInfoFromCSV(tokenEntry, csvMatch);
            name = newName;
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

        let description = "";
        {
            const descRaw = Array.from(token.querySelectorAll('tbody p.CmdDesc'));
            descRaw.forEach((el) => { el.innerHTML = el.innerHTML.replace(/<span class="(?:Function|Variable)">([^<]+)<\/span>/g, '`$1`'); });
            description = descRaw.map(el => el.textContent.trim()).join("\n").replace('``', '');
        }

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
                    .filter(el => el.nodeType !== 8 /*COMMENT_NODE*/ && el.textContent !== '→' && el.textContent.trim().length &&
                           (!el.classList?.contains('Function') || el.textContent === ',' || el.getAttribute("style")?.includes('font-weight: normal')))
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
            } else if (argName.includes('matrix')) {
                args[idx][1] = 'matrix'
            } else if (argName.endsWith('string') || argName.startsWith('text')) {
                args[idx][1] = 'string'
            } else if (argName === 'color#') {
                args[idx][1] = 'colorNum'
            } else if (/^(length|rows|columns|linestyle#)$/.test(argName)) {
                args[idx][1] = 'integer'
            } else if (argName === 'expression') {
                args[idx][1] = 'expression'
            } else if (argName === 'complex value') {
                args[idx][1] = 'complex'
            }

            // some overrides...
            if (description.includes('`valueA` and `valueB`, which can be real numbers or lists') // gcd/lcm, expressions work fine
                    || description.includes('`valueA` and `valueB` can be real numbers, expressions, or lists')) {
                args[idx][1] = 'real|expression|real[]'
            } else if (description.includes('of a real number, expression, or list')) {
                args[idx][1] = 'real|expression|real[]'
            } else if (description.includes('of a real number, expression, list, or matrix')) {
                args[idx][1] = 'real|expression|real[]|matrix'
            } else if (description.includes('of a complex number or list')) {
                args[idx][1] = 'complex|complex[]'
            }
            //console.log(idx, argName, arguments[idx][1])
        }

        // remove last arg if it's just a comment that got there somehow (not an actual arg)
        if (comment && args.length && new RegExp('^\\(?' + comment + '$').test(args[args.length-1][0])) {
            args.pop();
        }

        const rawLocation = token.querySelector('tbody p.MenuName > span')?.parentElement;
        const location = [ ...(rawLocation?.children ?? []) ]
                         .map(el => el.textContent.trim())
                         .filter(el => el)
                         .map(el => menuReplacements[el] ?? el);
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

        if (tkXML[bytes]) {
            const lastTkData = tkXML[bytes][tkXML[bytes].length - 1];
            if (lastTkData.enAccessible && tokenEntry.name !== lastTkData.enAccessible) {
                tokenEntry.accessibleName = lastTkData.enAccessible;
            }
            if (lastTkData.enVariants) {
                tokenEntry.nameVariants = lastTkData.enVariants;
            }
            mergeSinceUntilFromTkXML(tokenEntry, tkXML[bytes], name);
        }

        if (comment && comment.startsWith('Alias')) {
            tokenEntry.isAlias = true;
        }

        (json[bytes] ??= tokenEntry).syntaxes.push({
            specificName: specificName,
            syntax: wholeSyntaxLine,
            comment: comment,
            arguments: args,
            description: description,
            inEditorOnly: (token.querySelector('tbody p.MenuName')?.textContent ?? '').includes('†'),
            location: location.length && location[0].length ? location : [`[${name.replace(/\($/,'')}]`],
            specialCategory: specialCategory.length ? specialCategory : undefined,
        });

        if (manualOverrides[bytes]) {
            for (const [ what, override ] of Object.entries(manualOverrides[bytes])) {
                if (typeof(json[bytes][what]) === 'undefined') {
                    json[bytes][what] = override;
                } else if (typeof(override) === 'object') {
                    json[bytes][what].push(...override)
                } else {
                    console.error("override type not handled: " + typeof(override));
                }
            }
        }

        name2bytes[name] = bytes;
    }
}

// Add all other tokens from the CSV
for (let [ bytes, { enName, frName, type, comment } ] of Object.entries(csv_fromBytes)) {
    if (json[bytes]) {
        continue;
    }

    // one exception...
    if (enName === 'Asm83CEPrgm' || enName === 'Asm84CEPrgm') {
        enName = 'Asm84CEPrgm';
        comment = '`Asm83CEPrgm` on the TI-83 Premium CE'
    }

    const entry = {
        name: enName,
        accessibleName: undefined,
        nameVariants: undefined,
        type: type ?? 'function',
        categories: [],
        syntaxes: [{
            specificName: undefined,
            syntax: enName,
            comment: comment,
            arguments: [],
            description: '',
            inEditorOnly: undefined, // we don't know...
            location: '',
            specialCategory: undefined,
        }],
        localizations: { FR: frName },
        isAlias: (comment && comment.startsWith('Alias')) ? true : undefined,
    };

    if (tkXML[bytes]) {
        const lastTkData = tkXML[bytes][tkXML[bytes].length - 1];
        if (lastTkData.enAccessible && entry.name !== lastTkData.enAccessible) {
            entry.accessibleName = lastTkData.enAccessible;
        }
        if (lastTkData.enVariants) {
            entry.nameVariants = lastTkData.enVariants;
        }
        mergeSinceUntilFromTkXML(entry, tkXML[bytes], enName);
    }

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
        } else if (bytes >= '0xEF82' && bytes <= '0xEF8D') {
            entry.categories.push('Variables > Sequences');
        } else if (bytes >= '0xEF9E' && bytes <= '0xEFA5') {
            entry.categories.push('Other (non-catalog) > TI-Basic Editor');
        } else if (bytes >= '0xEF41' && bytes <= '0xEF4F') {
            entry.categories.push('Drawing > Colors');
        } else if (type.includes('operator')) {
            entry.categories.push('Operators');
        } else if (/^[0-9₀-₉]$/i.test(enName)) {
            entry.categories.push('Char > Digits');
        } else if (goodStrLen(enName) === 1) {
            entry.categories.push('Char > Other');
        } else if (enName.startsWith('Image')) {
            entry.categories.push('Variables > Images');
        } else if (enName.includes('asm') || enName.includes('Asm')) {
            entry.categories.push('Other (non-catalog) > Assembly');
        } else {
            entry.categories.push('Other (non-catalog) > Other');
        }
    }

    if (/(Char > (Letters|Greek|International|Digits))|(Drawing > Colors)|(Operators|Catalog|Variables|Keypad)/.test(entry.categories.toString())) {
        entry.syntaxes.forEach(s => { s.inEditorOnly = false; });
    }

    json[bytes] = entry;
}

fs.writeFileSync('output/TI-84_Plus_CE_catalog-tokens.json', JSON.stringify(json, null, 2));
