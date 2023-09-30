| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB13`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `X²FRép(	`</li></ul> |

# `χ²cdf(`

## Overview
Computes the χ²distribution probability between `lowerbound` and` upperbound` for the specified degrees of freedom `df`.


<b>Availability</b>: Token available everywhere.

## Syntax
`χ²cdf(lowerbound,upperbound,df)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>χ²</b></td><td></td><td></td></tr>

<tr><td><b>lowerbound</b></td><td></td><td></td></tr>

<tr><td><b>upperbound</b></td><td></td><td></td></tr>

<tr><td><b>df</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `8:cdf(`
<hr>

## Description

<tt>χ²cdf(</tt> is the χ² cumulative density function. If some random variable follows a χ² distribution, you can use this command to find the probability that this variable will fall in the interval you supply.

The command takes three arguments. _lower_ and _upper_ define the interval in which you're interested. _df_ specifies the degrees of freedom (choosing one of a family of χ² distributions).

## Advanced Uses

Often, you want to find a "tail probability" - a special case for which the interval has no lower or no upper bound. For example, "what is the probability x is greater than 2?". The TI-83+ has no special symbol for infinity, but you can use <tt>E99</tt> to get a very large number that will work equally well in this case (<tt>E</tt> is the decimal exponent obtained by pressing [2nd] [EE]). Use <tt>E99</tt> for positive infinity, and <tt>-E99</tt> for negative infinity.

The <tt>χ²cdf(</tt> command is crucial to performing a χ² goodness of fit test, which the early TI-83 series calculators do not have a command for (the <tt><a href="χ²-Test(.md">χ²-Test(</a></tt> command performs the χ² test of independence, which is not the same thing, although the manual always just refers to it as the "χ² Test"). This test is used to test if an observed frequency distribution differs from the expected, and can be used, for example, to tell if a coin or die is fair.

The [Goodness-of-Fit Test](goodness-of-fit) routine on the [routines](routines.md) page will perform a χ² goodness of fit test for you. Or, if you have a TI-84+/SE with OS version 2.30 or higher, you can use the <tt><a href="χ²GOF-Test(.md">χ²GOF-Test(</a></tt> command.

## Formulas

As with other continuous distributions, we can define <tt>χ²cdf(</tt> in forms of the probability density function:

(1) $`\begin{align} \texttt{\chi^2cdf}(a,b,k) = \int_a^b \texttt{\chi^2pdf}(x,k)\,dx \end{align}`$ 

## Related Commands

*   <tt><a href="χ²pdf(.md">χ²pdf(</a></tt>
*   <tt><a href="Shadeχ²(.md">Shadeχ²(</a></tt>

## See Also

*   [Goodness-of-Fit Test](Goodness-of-Fit Test.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


