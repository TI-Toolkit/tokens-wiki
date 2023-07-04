| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB1C`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `StudentFdp(`</li></ul> |

# `tpdf(`

## Description
Computes the probability density function (pdf) for the Student-`t` distribution at a specified `x` value with specified degrees of freedom `df`.


<b>Availability</b>: Token available everywhere.

## Syntax
`tpdf(x,df)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>df</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `5:tpdf(`
<hr>

<tt>tpdf(</tt> is the Student's _t_ probability density function.

Since the _t_ distribution is continuous, the value of <tt>tpdf(</tt> doesn't represent an actual probability — in fact, one of the few uses for this command is to draw a graph of the bell curve. You could also use it for various calculus purposes, such as finding inflection points.

The command takes two arguments: the first is the value where the PDF is to be evaluated, and the second is the number of degrees of freedom (so the calculator knows which _t_ distribution to use). As the degrees of freedom increases without bound, <tt>tpdf(</tt> approaches <tt><a href="normalpdf(.md">normalpdf(</a></tt>; i.e.

(1) $`\begin{align} \lim_{\nu\rightarrow\infty}\texttt{tpdf}(x,\nu)=\texttt{normalpdf}(x) \end{align}`$ 

## Formulas

The value of <tt>tpdf(</tt> is given by

(2) $`\begin{align} \texttt{tpdf}(t,\nu) = \frac{\Gamma((\nu+1)/2)}{\sqrt{\nu\pi}\,\Gamma(\nu/2)}\,\left(1+\frac{t^2}{\nu}\right)^{-\frac1{2}(\nu+1)} \end{align}`$ 

(where Γ is the [gamma function](http://en.wikipedia.org/wiki/Gamma_function)), or alternatively

(3) $`\begin{align} \texttt{tpdf}(t,\nu) = \frac1{\sqrt{\nu}B(\nu/2,1/2)}\,\left(1+\frac{t^2}{\nu}\right)^{-\frac1{2}(\nu+1)} \end{align}`$ 

(where B is the [beta function](http://en.wikipedia.org/wiki/Beta_function))

## Related Commands

*   <tt><a href="tcdf(.md">tcdf(</a></tt>
*   <tt><a href="invT(.md">invT(</a></tt>
*   <tt><a href="Shade_t(.md">Shade_t(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


