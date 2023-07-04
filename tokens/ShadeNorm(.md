| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB35`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `OmbreNorm(`</li></ul> |

# `ShadeNorm(`

## Overview
Draws the normal density function specified by μ and σ and shades and colors the area between `lowerbound` and `upperbound`.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`ShadeNorm(lowerbound,upperbound[,μ,σ,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>lowerbound</b></td><td></td><td></td></tr>

<tr><td><b>upperbound</b></td><td></td><td></td></tr>

<tr><td>μ</td><td></td><td>Yes</td></tr>

<tr><td>σ</td><td></td><td>Yes</td></tr>

<tr><td>color</td><td></td><td>Yes</td></tr>

<tr><td>#</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DRAW`, `1:ShadeNorm(`
<hr>

## Description

ShadeNorm( is equivalent to [normalcdf(](normalcdf\(.md) in terms of the probability it calculates: if a random variable follows the normal distribution, you can use it to calculate the probability that the variable's value falls in a certain interval. However, in addition to calculating the probability, this command also draws the normal curve, and shades the interval whose area represents the probability you want.

Note that this command does not actually return the value it calculates in Ans or anywhere else: it's merely displayed on the graph. If you're going to use the value in further calculations, you'll have to use normalcdf( as well.

There are two ways to use ShadeNorm(. With two arguments (lower bound and upper bound), the calculator will assume you mean the standard normal distribution, and use that to find the probability corresponding to the interval between "lower bound" and "upper bound". You can also supply two additional arguments to use the normal distribution with a specified mean and standard deviation. For example:

```ti-basic
for the standard normal distribution
:ShadeNorm(-1,1

for the normal distribution with mean 10 and std. dev. 2.5
:ShadeNorm(5,15,10,2.5
```

## Advanced

Often, you want to find a "tail probability" - a special case for which the interval has no lower or no upper bound. For example, "what is the probability x is greater than 2?". The TI-83+ has no special symbol for infinity, but you can use E99 to get a very large number that will work equally well in this case (E is the decimal exponent obtained by pressing [2nd] [EE]). Use E99 for positive infinity, and -E99 for negative infinity.

It can be hard to find the best window for ShadeNorm( to work in, since it doesn't automatically zoom for you. For the standard curve, the graph doesn't go above y=.5 (a good value for Ymax); Ymin should probably be something small. Xmin and Xmax could be -3 to 3 (3 deviations out); change this around to see more or less of the graph.

For nonstandard curves, increasing the standard deviation stretches and flattens the curve; by dividing Ymax and multiplying Xmin and Xmax by the standard deviation, you'll account for this effect. To account for the mean, add it to both Xmin and Xmax. You may also choose to standardize the lower and upper values instead by applying the formula (z-μ)/σ.

Keep in mind that ShadeNorm is just a drawing command and not an actual graphed function, so resizing the window, [ClrDraw](ClrDraw.md), and a bunch of other things will simply get rid of it.

## Related Commands

*   [normalpdf(](normalpdf\(.md)
*   [normalcdf(](normalcdf\(.md)
*   [invNorm(](invNorm\(.md)
*   [Shade(](Shade\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


