| Property      | Value |
|---------------|-------|
| Hex Value     | `$A8`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `DessRecip `</li></ul> |

# `DrawInv `

## Description
Draws the inverse of `expression` by plotting `X` values on the y-axis and `Y` values on the x-axis with specified
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`DrawInvexpression[,color#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `8:DrawInv`
<hr>

The `DrawInv` command draws the inverse of a curve in terms of X. Its single argument is an expression in terms of X.

For example, `DrawInv X²` will draw the inverse of the equation Y=X<sup>2</sup>. The inverse reverses the variables X and Y, so that the curve X=Y<sup>2</sup> will be graphed. In this case, the inverse of the function has a simple form: Y=√(X) and Y=-√(X); most functions, however, do not have an inverse expressible as Y= equation, making this command particularly useful.

You can also think of this as graphing the expression but with X representing the vertical direction, and Y representing the horizontal.

`DrawInv` requires the calculator to be in [Func](/func) mode, and is affected by the [Connected](/connected)/[Dot](/dot) setting.

## Advanced Uses

`DrawInv` will update X and Y for each coordinate drawn (like [Tangent(](/tangent) and [DrawF](/drawf)), and exit with the last coordinate still stored.

When evaluating the expression using `DrawInv`, the calculator will ignore the following errors: [ERR:DATA TYPE](/errors#datatype), [ERR:DIVIDE BY 0](/errors#divideby0), [ERR:DOMAIN](/errors#domain), [ERR:INCREMENT](/errors#increment), [ERR:NONREAL ANS](/errors#nonrealans), [ERR:OVERFLOW](/errors#overflow), and [ERR:SINGULAR MAT](/errors#singularmat). If one of these errors occurs, the data point will be omitted.

For this reason, `DrawInv` can sometimes behave in an unexpected fashion: for example, it doesn't throw an error for list or matrix expressions (it won't graph anything, either).

## Error Conditions

*   **[ERR:MODE](/errors#mode)** is thrown if the calculator is not in [Func](/func) mode when using `DrawInv`.

## Related Commands

*   [DrawF](/drawf)
*   [Tangent(](/tangent)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


