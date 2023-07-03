| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB36`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Ombre_t(`</li></ul> |

# `Shade_t(`

## Description
Draws the density function for the Student-t distribution specified by degrees of freedom df, and shades or colors the area between `lowerbound` and `upperbound`.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Shade_t(lowerbound,upperbound,df[,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>lowerbound</b></td><td></td><td>Yes</td></tr>

<tr><td><b>upperbound</b></td><td></td><td>Yes</td></tr>

<tr><td><b>df</b></td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DRAW`, `2:Shade_t(`
<hr>

Shade_t( is equivalent to [tcdf(](/tcdf) in terms of the probability it calculates: if a random variable follows the Student's _t_ distribution, you can use it to calculate the probability that the variable's value falls in a certain interval. However, in addition to calculating the probability, this command also draws the distribution, and shades the interval whose area represents the probability you want.

Note that this command does not actually return the value it calculates in Ans or anywhere else: it's merely displayed on the graph. If you're going to use the value in further calculations, you'll have to use tcdf( as well.

Like tcdf(, Shade_t( takes three arguments: the lower bound, the upper bound, and the degrees of freedom.

## Advanced

Often, you want to find a "tail probability" - a special case for which the interval has no lower or no upper bound. For example, "what is the probability x is greater than 2?". The TI-83+ has no special symbol for infinity, but you can use E99 to get a very large number that will work equally well in this case (E is the decimal exponent obtained by pressing [2nd] [EE]). Use E99 for positive infinity, and -E99 for negative infinity.

The Shade_t( command's output is affected by the graphing window, and on many windows you won't be able to get a good idea of what the graph looks like. For best results, Ymin should be either 0 or a small negative number, and Ymax should be 0.5 or less. Xmin and Xmax should be opposites of each other (so the middle of the graph is 0), but how large they are depends on the degrees of freedom and on how much of the graph you want to see: -4 and 4 are good starting places.

Keep in mind that Shade_t( is a drawing command and not the graph of an equation, so changing graph settings, the [ClrDraw](/clrdraw) command, and a great deal of other things will erase its output.

## Related Commands

*   [tpdf(](/tpdf)
*   [tcdf(](/tcdf)
*   [invT(](/invt)
*   [Shade(](/shade)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


