# TI 8x tokens inspector

Open a tokenized TI-8x variable file to see each token's bytes and human-readable representation. Files are processed locally in your browser and are not uploaded.

<div id="token-inspector">
<input id="token-inspector-file" class="inspector-file" type="file" disabled aria-describedby="token-inspector-status" accept=".82p,.83p,.8xp,.82y,.83y,.8xy,.82s,.83s,.8xs,.8xp2,.8xy2,.8xs2">

<div class="inspector-controls">
<fieldset>
<legend>Language</legend>
<label><input type="radio" name="token-inspector-language" value="en" checked> English</label>
<label><input type="radio" name="token-inspector-language" value="fr"> Français</label>
</fieldset>
<fieldset>
<legend>Text base</legend>
<label><input type="radio" name="token-inspector-base" value="human" checked> String</label>
<label><input type="radio" name="token-inspector-base" value="bytes"> Bytes</label>
</fieldset>
<fieldset>
<legend>Whitespace</legend>
<label class="inspector-whitespace-control">
<input id="token-inspector-whitespace" type="checkbox" checked>
<span>Show whitespace<small>spaces, line breaks</small></span>
</label>
</fieldset>
</div>

<p id="token-inspector-status" aria-live="polite">Loading tivars_lib_cpp...</p>
<p id="token-inspector-metadata" class="inspector-metadata" hidden></p>
<div id="token-inspector-output" class="inspector-output" aria-label="Tokens"></div>

<p class="inspector-attribution">
Powered by <a href="https://github.com/adriweb/tivars_lib_cpp">tivars_lib_cpp</a> with the <a href="https://github.com/TI-Toolkit/tokens">Tokens XML</a>.
</p>
</div>

<style>
#token-inspector .inspector-file {
    display: block;
    margin: 1rem 0;
    max-width: 100%;
}

#token-inspector .inspector-controls {
    display: flex;
    gap: .8rem;
    margin: 1rem 0;
    flex-flow: wrap;
}

#token-inspector fieldset {
    margin: 0;
    border: .05rem solid var(--md-default-fg-color--lightest);
    border-radius: .2rem;
    width: max-content;
}

#token-inspector legend {
    padding: 0 .25rem;
    font-weight: 700;
}

#token-inspector label {
    display: inline-block;
    margin-right: .8rem;
    white-space: nowrap;
}

#token-inspector input[type="radio"],
#token-inspector input[type="checkbox"] {
    accent-color: var(--md-accent-fg-color);
}

#token-inspector .inspector-whitespace-control {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
}

#token-inspector .inspector-whitespace-control span {
    display: grid;
    line-height: 1.2;
}

#token-inspector .inspector-whitespace-control small {
    color: var(--md-default-fg-color--light);
    font-size: .65rem;
}

#token-inspector .inspector-metadata {
    color: var(--md-default-fg-color--light);
    font-size: .85rem;
}

#token-inspector .inspector-output {
    margin-top: 1.5rem;
    font-family: var(--md-code-font-family), ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 1.15rem;
    line-height: 2.2;
    overflow-wrap: anywhere;
}

#token-inspector ruby {
    margin: 0;
    padding: 0;
    white-space: pre;
}

#token-inspector ruby:hover {
    background: var(--md-code-bg-color);
    border-radius: .1rem;
}

#token-inspector rt {
    color: var(--md-default-fg-color--light);
    font-size: .55em;
    white-space: pre;
    margin: auto 1px;
}

#token-inspector ruby.inspector-whitespace {
    color: var(--md-default-fg-color--light);
    background: #AA00000A;
}

#token-inspector .inspector-output a {
    color: inherit;
    text-decoration: none;
}

#token-inspector .inspector-output a:focus-visible {
    outline: 2px solid var(--md-accent-fg-color);
    outline-offset: 2px;
}

#token-inspector .inspector-attribution {
    margin-top: 3rem;
    padding-top: .75rem;
    border-top: .05rem solid var(--md-default-fg-color--lightest);
    color: var(--md-default-fg-color--light);
    font-size: .8rem;
}

#token-inspector .inspector-error {
    color: #c62828;
}

[data-md-color-scheme="slate"] #token-inspector .inspector-error {
    color: #ff8a80;
}
</style>

<script type="module">
import TIVarsLib from "./assets/token-inspector/TIVarsLib.js";

const inspector = document.querySelector("#token-inspector");
const fileInput = inspector.querySelector("#token-inspector-file");
const status = inspector.querySelector("#token-inspector-status");
const metadata = inspector.querySelector("#token-inspector-metadata");
const output = inspector.querySelector("#token-inspector-output");
const showWhitespace = inspector.querySelector("#token-inspector-whitespace");
let library;
let inspection;
let currentFile;

function exceptionMessage(error) {
    if (error?.message) return error.message;
    try {
        const details = library.getExceptionMessage(error);
        library.decrementExceptionRefcount(error);
        return Array.isArray(details) ? details[1] || details[0] : details;
    } catch (_) {
        return String(error);
    }
}

function visibleHumanText(text, token) {
    if (token.lineBreak) return showWhitespace.checked ? "↵" : "\n";
    if (!showWhitespace.checked) return text;
    return text
        .replaceAll(" ", "·")
        .replaceAll("\r\n", "↵")
        .replaceAll("\r", "↵")
        .replaceAll("\n", "↵");
}

function render() {
    if (!inspection) return;
    const language = inspector.querySelector('input[name="token-inspector-language"]:checked').value;
    const humanFirst = inspector.querySelector('input[name="token-inspector-base"]:checked').value === "human";
    output.replaceChildren();

    for (const token of inspection.data) {
        const rawHuman = token[language];
        const human = visibleHumanText(rawHuman, token);
        const ruby = document.createElement("ruby");
        ruby.append(humanFirst ? human : token.bytes);
        const whitespaceOnly = token.lineBreak || /^[ \r\n]+$/.test(rawHuman);
        if (humanFirst && showWhitespace.checked && whitespaceOnly) ruby.classList.add("inspector-whitespace");
        const annotation = document.createElement("rt");
        annotation.textContent = humanFirst ? token.bytes : human;
        ruby.append(annotation);
        ruby.title = `Offset ${token.offset}; value ${token.value}`;

        let displayedToken = ruby;
        const wikiBytes = token.legacyBytes ?? token.bytes;
        if (wikiBytes) {
            const link = document.createElement("a");
            link.href = `./tokens/0x${wikiBytes}.html`;
            link.target = "_blank";
            link.rel = "noopener";
            link.append(ruby);
            displayedToken = link;
        }
        output.append(displayedToken, document.createElement(token.lineBreak ? "br" : "wbr"));
    }

    const info = inspection.metadata;
    metadata.textContent = `${currentFile.name}: ${info.variableName} (${info.format} ${info.variableType}) • ${info.tokenCount} tokens • ${info.payloadByteLength} bytes`;
    metadata.hidden = false;
    status.hidden = true;
}

async function inspectFile(file) {
    const path = `/tmp/token-inspector-${Date.now()}-${file.name.replace(/[^a-z0-9._-]/gi, "_")}`;
    let variable;
    status.hidden = false;
    status.className = "";
    status.textContent = `Reading ${file.name}…`;
    metadata.hidden = true;
    output.replaceChildren();
    try {
        library.FS.writeFile(path, new Uint8Array(await file.arrayBuffer()));
        variable = library.TIVarFile.loadFromFile(path);
        inspection = JSON.parse(variable.getTokenDataJson());
        currentFile = file;
        render();
    } catch (error) {
        inspection = null;
        status.className = "inspector-error";
        status.textContent = `Could not inspect ${file.name}: ${exceptionMessage(error)}`;
    } finally {
        variable?.delete();
        try { library.FS.unlink(path); } catch (_) { /* nothing to remove */ }
    }
}

fileInput.addEventListener("change", () => { if (fileInput.files[0]) inspectFile(fileInput.files[0]); });
inspector.querySelectorAll('.inspector-controls input').forEach(input => input.addEventListener("change", render));

try {
    library = await TIVarsLib();
    fileInput.disabled = false;
    status.textContent = "Choose or drop a TI tokenized-variable file in the picker above.";
} catch (error) {
    status.className = "inspector-error";
    status.textContent = `Could not load tivars_lib_cpp: ${exceptionMessage(error)}`;
}
</script>
