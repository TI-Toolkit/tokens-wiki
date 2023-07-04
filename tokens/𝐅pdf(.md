| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB1E`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `𝐅fdp(`</li></ul> |

# `𝐅pdf(`

## Description
Computes the 𝐅 distribution probability between `lowerbound `and `upperbound` for the specified `numerator df` (degrees of freedom) and `denominator df`.


<b>Availability</b>: Token available everywhere.

## Syntax
`𝐅pdf(x,numerator df,denominator df)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>𝐅</b></td><td></td><td></td></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>numerator df</b></td><td></td><td></td></tr>

<tr><td><b>denominator df</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `9:pdf(`
<hr>

<tt>Fpdf(</tt> is the _F_-distribution probability density function.

Since the _F_-distribution is continuous, the value of <tt>Fpdf(</tt> doesn't represent an actual probability - in fact, one of the only uses for this command is to draw a graph of the distribution. You could also use it for various calculus purposes, such as finding inflection points.

The command takes 3 arguments: _x_ is the point at which to evaluate the function (when graphing, use X for this argument), _numerator df_ and _denominator df_ are the numerator degrees of freedom and denominator degrees of freedom respectively (these specify a single <tt>Fpdf(</tt> curve out of an infinite family).

The _F_-distribution is used mainly in significance tests of variance.

## Formulas

The value of the <tt>Fpdf(</tt> is given by

(1) $`\begin{align} \texttt{Fpdf}(x,d_1,d_2) = \frac{\left( \frac{d_1x}{d_1x+d_2} \right)^{d_1/2} \left(1-\frac{d_1x}{d_1x+d_2}\right)^{d_2/2}}{x \texttt{B}(d_1/2,d_2/2)} \end{align}`$ 

where _B(x,y)_ is the [Beta function](http://en.wikipedia.org/wiki/beta_function).

## Related Commands

*   <tt><a href="Fcdf(.md">Fcdf(</a></tt>
*   <tt><a href="ShadeF(.md">ShadeF(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


