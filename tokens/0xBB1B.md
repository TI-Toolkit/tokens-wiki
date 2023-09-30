| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB1B`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [N](<../categories/Catalog.md#N>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `normalFdp(`</li></ul> |

# `normalpdf(`

## Overview
Computes the probability density function for the normal distribution at a specified `x` value for the specified μ and σ.


<b>Availability</b>: Token available everywhere.

## Syntax
`normalpdf(x[,μ,σ])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td>μ</td><td></td><td>Yes</td></tr>

<tr><td>σ</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `1:normalpdf(`
<hr>

## Description

normalpdf( is the normal (Gaussian) probability density function.

Since the normal distribution is continuous, the value of normalpdf( doesn't represent an actual probability - in fact, one of the only uses for this command is to draw a graph of the normal curve. You could also use it for various calculus purposes, such as finding inflection points.

The command can be used in two ways: normalpdf(_x_) will evaluate the standard normal p.d.f. (with mean at 0 and a standard deviation of 1) at _x_, and normalpdf(_x_,_μ_,_σ_) will work for an arbitrary normal curve, with mean _μ_ and standard deviation _σ_.

## Formulas

For the standard normal distribution, normalpdf(_x_) is defined as

(1) $`\begin{align} \texttt{normalpdf}(x)=\frac1{\sqrt{2\pi\,}} \, e^{-\frac1{2}x^2} \end{align}`$ 

For other normal distributions, normalpdf( is defined in terms of the standard distribution:

(2) $`\begin{align} \texttt{normalpdf}(x,\mu,\sigma)=\frac{1}{\sigma} \, \texttt{normalpdf} \left(\frac{x-\mu}{\sigma}\right) \end{align}`$ 

## Related Commands

*   [normalcdf(](normalcdf\(.md)
*   [invNorm(](invNorm\(.md)
*   [ShadeNorm(](ShadeNorm\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


