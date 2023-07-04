"use strict"
import * as fs from 'fs';
import { JSDOM } from 'jsdom';
import TurndownService from "turndown";

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

TurndownService.prototype.escape = function (string) { return string; } // it's causing too many issues... ?

turndownService.keep(['tt', 'em', 'sup', 'sub']);

turndownService.addRule('fencedCodeBlock', {
    filter: function (node, options) {
        return options.codeBlockStyle === 'fenced' &&
               node.nodeName === 'PRE' &&
               node.firstChild && node.firstChild.nodeName === 'CODE';
    },
    replacement: function (content, node, options) {
        return `\n\n${options.fence}ti-basic
${node.firstChild.textContent}
${options.fence}\n\n`;
    }
});

turndownService.addRule('latexContent', {
    filter: function (node, options) {
        return node.nodeName === 'DIV' && node.className === 'math-equation' && node.firstChild && node.firstChild.nodeType === 3; // TEXT_NODE
    },
    replacement: function (content, node, options) {
        return ' $`' + node.firstChild.textContent + '`$ ';
    }
});

const BASEURL = 'http://tibasicdev.wikidot.com/';

const pages = [
    ["1-PropZInt(",null],
    ["1-PropZTest(",null],
    ["1-Var Stats",null],
    ["2-PropZInt(",null],
    ["2-PropZTest(",null],
    ["2-SampFTest",null],
    ["2-SampTInt",null],
    ["2-SampTTest",null],
    ["2-SampZInt(",null],
    ["2-SampZTest(",null],
    ["2-Var Stats",null],
    ["a+bi","a+b𝑖"],
    ["abs(",null],
    ["and",null],
    ["angle(",null],
    ["ANOVA(",null],
    ["Ans",null],
    ["arccos","cos⁻¹("],
    ["Archive",null],
    ["arcosh","cosh⁻¹("],
    ["arcsin","sin⁻¹("],
    ["arctan","tan⁻¹("],
    ["arsinh","sinh⁻¹("],
    ["artanh","tanh⁻¹("],
    ["asm-command","Asm("],
    ["Asm84CEPrgm",null],
    ["Asm84CPrgm",null],
    ["AsmComp(",null],
    ["augment(",null],
    ["AUTO Answer",null],
    ["AxesOff",null],
    ["AxesOn",null],
    ["BackgroundOff",null],
    ["BackgroundOn",null],
    ["bal(",null],
    ["binomcdf(",null],
    ["binompdf(",null],
    ["checkTmr(",null],
    ["chisquare-test","χ²-Test("],
    ["chisquarecdf","χ²cdf("],
    ["chisquaregof-test","χ²GOF-Test("],
    ["chisquarepdf","χ²pdf("],
    ["Circle(",null],
    ["classic-mode","CLASSIC"],
    ["Clear Entries",null],
    ["ClockOff",null],
    ["ClockOn",null],
    ["ClrAllLists",null],
    ["ClrDraw",null],
    ["ClrHome",null],
    ["ClrList",null],
    ["ClrTable",null],
    ["conj(",null],
    ["Connected",null],
    ["CoordOff",null],
    ["CoordOn",null],
    ["cos(",null],
    ["cosh(",null],
    ["CubicReg",null],
    ["cumSum(",null],
    ["dayOfWk(",null],
    ["dbd(",null],
    ["DEC Answer",null],
    ["degree-mode","Degree"],
    ["degree-symbol","°"],
    ["deltalist","ΔList("],
    ["DelVar",null],
    ["DependAsk",null],
    ["DependAuto",null],
    ["det(",null],
    ["DetectAsymOff",null],
    ["DetectAsymOn",null],
    ["DiagnosticOff",null],
    ["DiagnosticOn",null],
    ["dim(",null],
    ["Disp",null],
    ["DispGraph",null],
    ["DispTable",null],
    ["Dot",null],
    ["Dot-Thick",null],
    ["Dot-Thin",null],
    ["DrawF",null],
    ["DrawInv",null],
    ["DS<(",null],
    ["e-exponent","e^("],
    ["e-ten","E"],
    ["e-value","e"],
    ["Else",null],
    ["End",null],
    ["Eng",null],
    ["Equ►String(",null],
    ["eval(",null],
    ["ExecLib",null],
    ["expr(",null],
    ["ExpReg",null],
    ["ExprOff",null],
    ["ExprOn",null],
    ["Fcdf(",null],
    ["Fill(",null],
    ["Fix",null],
    ["Float",null],
    ["fMax(",null],
    ["fMin(",null],
    ["fnInt(",null],
    ["FnOff",null],
    ["FnOn",null],
    ["For(",null],
    ["fPart(",null],
    ["Fpdf(","𝐅pdf("],
    ["FRAC Answer",null],
    ["Full",null],
    ["Func",null],
    ["G-T",null],
    ["GarbageCollect",null],
    ["gcd(",null],
    ["geometcdf(",null],
    ["geometpdf(",null],
    ["Get(",null],
    ["GetCalc(",null],
    ["getDate",null],
    ["getDtFmt",null],
    ["getDtStr(",null],
    ["getKey",null],
    ["getTime",null],
    ["getTmFmt",null],
    ["getTmStr(",null],
    ["Goto",null],
    ["GraphColor(",null],
    ["GraphStyle(",null],
    ["GridOff",null],
    ["GridOn",null],
    ["Horiz",null],
    ["Horizontal",null],
    ["i","𝑖"],
    ["identity(",null],
    ["If",null],
    ["imag(",null],
    ["IndpntAsk",null],
    ["IndpntAuto",null],
    ["Input",null],
    ["inString(",null],
    ["int(",null],
    ["inverse","⁻¹"],
    ["invNorm(",null],
    ["invT(",null],
    ["iPart(",null],
    ["irr(",null],
    ["IS>(",null],
    ["IsClockOn",null],
    ["LabelOff",null],
    ["LabelOn",null],
    ["Lbl",null],
    ["lcm(",null],
    ["length(",null],
    ["Line(",null],
    ["LinReg(a+bx)",null],
    ["LinReg(ax+b)",null],
    ["LinRegTInt",null],
    ["LinRegTTest",null],
    ["List►matr(",null],
    ["ln(",null],
    ["LnReg",null],
    ["log(",null],
    ["logBASE(",null],
    ["Logistic",null],
    ["l","ʟ"],
    ["Manual-Fit",null],
    ["mathprint-mode","MATHPRINT"],
    ["Matr►list(",null],
    ["max(",null],
    ["mean(",null],
    ["Med-Med",null],
    ["median(",null],
    ["Menu(",null],
    ["min(",null],
    ["n/d","n⁄d"],
    ["nCr",null],
    ["nDeriv(",null],
    ["Normal",null],
    ["normalcdf(",null],
    ["normalpdf(",null],
    ["not(",null],
    ["nPr",null],
    ["npv(",null],
    ["OpenLib(",null],
    ["or",null],
    ["Output(",null],
    ["Param",null],
    ["Pause",null],
    ["piecewise(",null],
    ["plotn#boxplot","Boxplot"],
    ["plotn#histogram","Histogram"],
    ["plotn#modboxplot","ModBoxplot"],
    ["plotn#normprobplot","NormProbPlot"],
    ["plotn#scatter","Scatter"],
    ["plotn#xyline","xyLine"],
    ["plotn","Plot1("],
    ["plotn","Plot2("],
    ["plotn","Plot3("],
    ["PlotsOff",null],
    ["PlotsOn",null],
    ["Pmt_Bgn",null],
    ["Pmt_End",null],
    ["poissoncdf(",null],
    ["poissonpdf(",null],
    ["polar-display","►Polar"],
    ["polar-mode","Polar"],
    ["PolarGC",null],
    ["prgm",null],
    ["prod(",null],
    ["Prompt",null],
    ["Pt-Change(",null],
    ["Pt-Off(",null],
    ["Pt-On(",null],
    ["PwrReg",null],
    ["Pxl-Change(",null],
    ["Pxl-Off(",null],
    ["Pxl-On(",null],
    ["pxl-Test(",null],
    ["P►Rx(",null],
    ["P►Ry(",null],
    ["QuadReg",null],
    ["QuartReg",null],
    ["r-ptheta","R►Pθ("],
    ["radian-mode","Radian"],
    ["radian-symbol","ʳ"],
    ["rand",null],
    ["randBin(",null],
    ["randInt(",null],
    ["randIntNoRep","randIntNoRep("],
    ["randM(",null],
    ["randNorm(",null],
    ["Rcl",null],
    ["re-thetai","re^θ𝑖"],
    ["real-func","real("],
    ["real-mode","Real"],
    ["RecallGDB",null],
    ["RecallPic",null],
    ["RectGC",null],
    ["ref(",null],
    ["remainder(",null],
    ["Repeat",null],
    ["Return",null],
    ["round(",null],
    ["rowplus","row+("],
    ["rowSwap(",null],
    ["rref(",null],
    ["R►Pr(",null],
    ["Sci",null],
    ["Select(",null],
    ["Send(",null],
    ["seq-list","seq("],
    ["seq-mode","Seq"],
    ["Sequential",null],
    ["setDate(",null],
    ["setDtFmt(",null],
    ["setTime(",null],
    ["setTmFmt(",null],
    ["SetUpEditor",null],
    ["Shade(",null],
    ["Shade_t(",null],
    ["shadechisquare","Shadeχ²("],
    ["ShadeF(",null],
    ["ShadeNorm(",null],
    ["sigmaint","ΣInt("],
    ["sigmaprn","ΣPrn("],
    ["Simul",null],
    ["sin(",null],
    ["sinh(",null],
    ["SinReg",null],
    ["solve(",null],
    ["SortA(",null],
    ["SortD(",null],
    ["square-root","√("],
    ["startTmr",null],
    ["statwizard-off",null],
    ["statwizard-on",null],
    ["stdDev(",null],
    ["Stop",null],
    ["StoreGDB",null],
    ["StorePic",null],
    ["String►Equ(",null],
    ["sub(",null],
    ["sum(",null],
    ["summationsigma","summation Σ("],
    ["T-Test",null],
    ["tan(",null],
    ["Tangent(",null],
    ["tanh(",null],
    ["tcdf(",null],
    ["Text(",null],
    ["TextColor(",null],
    ["Then",null],
    ["Thick",null],
    ["Thin",null],
    ["Time",null],
    ["timeCnv(",null],
    ["timesrowplus","*row+("],
    ["timesrow","*row("],
    ["TInterval",null],
    ["toString(",null],
    ["tpdf(",null],
    ["Trace",null],
    ["tvm","tvm_FV"],
    ["tvm","tvm_I%"],
    ["tvm","tvm_𝗡"],
    ["tvm","tvm_Pmt"],
    ["tvm","tvm_PV"],
    ["Un/d","Un⁄d"],
    ["UnArchive",null],
    ["uvAxes",null],
    ["uwAxes",null],
    ["variance(",null],
    ["Vertical",null],
    ["vwAxes",null],
    ["Wait",null],
    ["Web",null],
    ["While",null],
    ["xor",null],
    ["Z-Test(",null],
    ["ZBox",null],
    ["ZDecimal",null],
    ["zfrac","ZFrac1⁄10"],
    ["zfrac","ZFrac1⁄2"],
    ["zfrac","ZFrac1⁄3"],
    ["zfrac","ZFrac1⁄4"],
    ["zfrac","ZFrac1⁄5"],
    ["zfrac","ZFrac1⁄8"],
    ["ZInteger",null],
    ["ZInterval",null],
    ["Zoom In",null],
    ["Zoom Out",null],
    ["ZoomFit",null],
    ["ZoomRcl",null],
    ["ZoomStat",null],
    ["ZoomSto",null],
    ["ZPrevious",null],
    ["ZQuadrant1",null],
    ["ZSquare",null],
    ["ZStandard",null],
    ["ZTrig",null],
    ["►Dec",null],
    ["►DMS",null],
    ["►Eff(",null],
    ["►Frac",null],
    ["►F◄►D",null],
    ["►n/d◄►Un/d","►n⁄d◄►Un⁄d"],
    ["►Nom(",null],
    ["►Rect",null]
];

for (const page of pages) {
    const pagename = page[0];
    const tokname = page[1] ?? pagename;

    const htmlOutFile = `./input/tibd_html/${tokname}.html`;
    const mdOutFile = `./input/tibd_gen/${tokname}.md`;

    let articleHTML = '';
    if (!fs.existsSync(htmlOutFile)) {
        console.log(`Fetching ${tokname}...`);
        const pageHTML = await (await fetch(BASEURL + pagename)).text();
        articleHTML = (new JSDOM(pageHTML)).window.document.body.querySelector("#page-content").innerHTML;
        fs.writeFileSync(htmlOutFile, articleHTML);
    } else {
        articleHTML = fs.readFileSync(htmlOutFile, 'utf8');
    }

    console.log(`Converting ${tokname}...`)
    // Discard the sidebar content (ends at the token size thing), remove the empty end, resize titles, and do some cleanup.
    articleHTML = articleHTML
        .replace(/.*Token Size<\/a><\/strong><\/p>\n<p>(?:N\/A|\d bytes?(?: \(\w+\))?)<\/p>\n(?:<p><sub>\*OS [\d.]{1,10} or later<\/sub><\/p>\n)?<\/div>\n/s, '')
        .replaceAll('re^θi', 're^θ𝑖')
        .replaceAll('<a class="newpage" href="/"></a>', '')
        .replaceAll('<a href="http://tibasicdev.wikidot.com/', '<a href="')
        .replaceAll('<a href="/', '<a href="')
        .replaceAll('<a href="radian-symbol">r</a>', '<a href="ʳ">ʳ</a>')
        .replaceAll(/<(li|tt)><a href="([^"]+)">([^<(]+)\(<\/a><\/\1>/gmi, '<$1><a href="$3\\(.md">$3(</a></$1>')
        .replaceAll(/<(li|tt)><a href="([^"]+)">([^<(]+)<\/a><\/\1>/gmi, '<$1><a href="$3.md">$3</a></$1>')
        .replaceAll(/<a href="([^"]+)">(\1)\(<\/a>/gmi, '<a href="$2\\(.md">$2(</a>')
        .replaceAll(/<a href="([^"]+)">(\1)<\/a>/gmi, '<a href="$2.md">$2</a>')
        .replaceAll('<div style="display : none;">\n<p>.</p>\n</div>', '')
        .replaceAll('‾¹', '⁻¹')
        .replaceAll('<h5', '<h6').replaceAll('</h5', '</h6')
        .replaceAll('<h4', '<h5').replaceAll('</h4', '</h5')
        .replaceAll('<h3', '<h4').replaceAll('</h3', '</h4')
        .replaceAll('<h2', '<h3').replaceAll('</h2', '</h3')
        .replaceAll('<h1', '<h2').replaceAll('</h1', '</h2')
        .replaceAll('http://mathworld.wolfram.com', 'https://mathworld.wolfram.com')
        .replaceAll('∟', 'ʟ')
        .replaceAll('\\operatorname{', '\\texttt{')
        .replaceAll('<em>i</em>', '𝑖')
        .replaceAll('𝑖th', '<em>i<em><sup>th</sup>');

    const markdown = turndownService.turndown(articleHTML)
        .replaceAll(/____$/gm, '')
        .replaceAll('\\(.md">', '(.md">') // fix up bad link stuff after "escaping" transformation above
        .replaceAll('[°](degree-symbol)', '[°](°.md)')
        .replaceAll('<a href="degree-symbol">°</a>', '<a href="°.md">°</a>')
        .replaceAll(/<a href="([^"]*)[<>]([^"]*)\.md">/gmi, '<a href="$1$2.md">')
        .replaceAll('[IS>(](is)', '[IS>(](IS\(.md)').replaceAll('[DS<(](ds)', '[DS<(](DS\(.md)')
        .replaceAll(/^> \*\*NOTE\*\*: Due to the limitations of the wiki markup language.*$/gm, '');

    fs.writeFileSync(mdOutFile, markdown);
}
