| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB1D`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Χ²Fdp(`</li></ul> |

# `χ²pdf(`

## Description
Computes the probability density function (pdf) for the χ² distribution at a specified `x` value for the specified degrees of freedom `df`.


<b>Availability</b>: Token available everywhere.

## Syntax
`χ²pdf(x,df)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>χ²</b></td><td></td><td></td></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>df</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `7:pdf(`
<hr>

`χ²pdf(` is the χ² probability density function.

Since the χ² distribution is continuous, the value of `χ²pdf(` doesn't represent an actual probability — in fact, one of the only uses for this command is to draw a graph of the χ² curve. You could also use it for various calculus purposes, such as finding inflection points.

The command takes two arguments: the value at which to evaluate the p.d.f., and _df_, the number of 'degrees of freedom'.

## Formulas

The value of `χ²pdf(` is given by

(1) $`\begin{align} \texttt{\chi^2pdf}(x,k)=\frac{(1/2)^{k/2}}{(k/2-1)!}\,x^{k/2-1}e^{-x/2} \end{align}`$ 

## Related Commands

*   [χ²cdf(](/chisquarecdf)
*   [Shadeχ²(](/shadechisquare)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


