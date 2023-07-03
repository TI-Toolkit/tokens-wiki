| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB37`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Ombreχ²(`</li></ul> |

# `Shadeχ²(`

## Description
Draws the density function for the χ² distribution specified by degrees of freedom `df`, and shades and colors the area between `lowerbound` and `upperbound`.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Shadeχ²(lowerbound,upperbound,df[,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>χ²</b></td><td></td><td>Yes</td></tr>

<tr><td><b>lowerbound</b></td><td></td><td>Yes</td></tr>

<tr><td><b>upperbound</b></td><td></td><td>Yes</td></tr>

<tr><td>df</td><td></td><td><b>No</b></td></tr>

<tr><td>color#</td><td>colorNum</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DRAW`, `3:Shade`, `(`
<hr>

`Shadeχ²(` is equivalent to [χ²cdf(](/chisquarecdf) in terms of the probability it calculates: if a random variable follows the χ² distribution, you can use it to calculate the probability that the variable's value falls in a certain interval. However, in addition to calculating the probability, this command also draws the χ² curve, and shades the interval whose area represents the probability you want.

Note that this command does not actually return the value it calculates in Ans or anywhere else: it's merely displayed on the graph. If you're going to use the value in further calculations, you'll have to use `χ²cdf(` as well.

The `Shadeχ²(` command takes three arguments. _lower_ and _upper_ identify the interval you're interested in. _df_ specifies the degrees of freedom (selecting from an infinite family of χ² distributions).

Thus, the following code would find the probability of χ² between 0 and 1 on a χ² distribution with 2 degrees of freedom, and shade this interval:

```ti-basic
:Shadeχ²(0,1,2
```

## Advanced

Often, you want to find a "tail probability" - a special case for which the interval has no lower or no upper bound. For example, "what is the probability x is greater than 2?". The TI-83+ has no special symbol for infinity, but you can use `E99` to get a very large number that will work equally well in this case (`E` is the decimal exponent obtained by pressing [2nd] [EE]). Use `E99` for positive infinity, and `-E99` for negative infinity.

It can be hard to find the best window for `Shadeχ²(` to work in, since it doesn't automatically zoom for you. For any number of degrees of freedom (except for 1), the graph doesn't go above y=.5 (a good value for [Ymax](/system-variables#window)); [Ymin](/system-variables#window) should probably be something small and negative. [Xmin](/system-variables#window) should be around 0 (possibly slightly less if you like seeing axes), while [Xmax](/system-variables#window) probably shouldn't go above 5.

Keep in mind that `Shadeχ²(` is just a drawing command and not an actual graphed function, so resizing the window, [ClrDraw](/clrdraw), and other commands that refresh the [graphscreen](/graphscreen) will remove it.

## Related Commands

*   [χ²pdf(](/chisquarepdf)
*   [χ²cdf(](/chisquarecdf)
*   [Shade(](/shade)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


