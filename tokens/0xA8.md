| Property      | Value |
|---------------|-------|
| Hex Value     | `$A8`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `DessRecip `</li></ul> |

# `DrawInv `

## Overview
Draws the inverse of `expression` by plotting `X` values on the y-axis and `Y` values on the x-axis with specified
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`DrawInvexpression[,color#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td></td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `8:DrawInv`
<hr>

## Description

The <tt>DrawInv</tt> command draws the inverse of a curve in terms of X. Its single argument is an expression in terms of X.

For example, <tt>DrawInv X²</tt> will draw the inverse of the equation Y=X<sup>2</sup>. The inverse reverses the variables X and Y, so that the curve X=Y<sup>2</sup> will be graphed. In this case, the inverse of the function has a simple form: Y=√(X) and Y=-√(X); most functions, however, do not have an inverse expressible as Y= equation, making this command particularly useful.

You can also think of this as graphing the expression but with X representing the vertical direction, and Y representing the horizontal.

<tt>DrawInv</tt> requires the calculator to be in <tt><a href="Func.md">Func</a></tt> mode, and is affected by the <tt><a href="Connected.md">Connected</a></tt>/<tt><a href="Dot.md">Dot</a></tt> setting.

## Advanced Uses

<tt>DrawInv</tt> will update X and Y for each coordinate drawn (like <tt><a href="Tangent(.md">Tangent(</a></tt> and <tt><a href="DrawF.md">DrawF</a></tt>), and exit with the last coordinate still stored.

When evaluating the expression using <tt>DrawInv</tt>, the calculator will ignore the following errors: [ERR:DATA TYPE](errors#datatype), [ERR:DIVIDE BY 0](errors#divideby0), [ERR:DOMAIN](errors#domain), [ERR:INCREMENT](errors#increment), [ERR:NONREAL ANS](errors#nonrealans), [ERR:OVERFLOW](errors#overflow), and [ERR:SINGULAR MAT](errors#singularmat). If one of these errors occurs, the data point will be omitted.

For this reason, <tt>DrawInv</tt> can sometimes behave in an unexpected fashion: for example, it doesn't throw an error for list or matrix expressions (it won't graph anything, either).

## Error Conditions

*   **[ERR:MODE](errors#mode)** is thrown if the calculator is not in <tt><a href="Func.md">Func</a></tt> mode when using <tt>DrawInv</tt>.

## Related Commands

*   <tt><a href="DrawF.md">DrawF</a></tt>
*   <tt><a href="Tangent(.md">Tangent(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, kg583.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


