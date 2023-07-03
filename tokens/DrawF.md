| Property      | Value |
|---------------|-------|
| Hex Value     | `$A9`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `DessFonct `</li></ul> |

# `DrawF `

## Description
Draws `expression` (in terms of `X`) on the graph with specified
Color#:10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`DrawFexpression[,color#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td></td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `6:DrawF`
<hr>

The `DrawF` commands draws a single expression on the graph screen in terms of X using [Func](/func) graphing mode, regardless of what graphing mode the calculator is actually in. For example, `DrawF X²` will draw a [parabola](http://en.wikipedia.org/wiki/parabola) in the shape of a U on the screen. Of course, how it is displayed all depends on the window dimensions of the graph screen; you should use a [friendly window](/friendly-window) to ensure it shows up as you intend.

## Advanced Uses

`DrawF` will update X and Y for each coordinate drawn (like [Tangent(](/tangent) and [DrawInv](/drawinv)), and exit with the last coordinate still stored.

When evaluating the expression using `DrawF`, the calculator will ignore the following errors: [ERR:DATA TYPE](/errors#datatype), [ERR:DIVIDE BY 0](/errors#divideby0), [ERR:DOMAIN](/errors#domain), [ERR:INCREMENT](/errors#increment), [ERR:NONREAL ANS](/errors#nonrealans), [ERR:OVERFLOW](/errors#overflow), and [ERR:SINGULAR MAT](/errors#singularmat). If one of these errors occurs, the data point will be omitted.

For this reason, `DrawF` can sometimes behave in an unexpected fashion: for example, it doesn't throw an error for list or matrix expressions (it won't graph anything, either).

You can use `DrawF` to draw an expression instead of having to store an expression to a Y# variable and then displaying it. At the same time, if you plan on manipulating the expression (either changing the value or changing the expression itself), it would be better to simply use the Y# variable.

## Related Commands

*   [DrawInv](/drawinv)
*   [Tangent(](/tangent)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


