| Property      | Value |
|---------------|-------|
| Hex Value     | `$A3`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Pxl-Change(`</li></ul> |

# `Pxl-Change(`

## Description
Toggles Off to On in the graph area: with specified color# Toggles On to Off in the graph area: Off will display the set Background Image Var or Color.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Pxl-Change(row,column[,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>row</b></td><td></td><td></td></tr>

<tr><td><b>column</b></td><td></td><td></td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `POINTS`, `6:Pxl-Change(`
<hr>

The Pxl-Change( command is used to toggle the pixel at the given (Y,X) coordinates. If the pixel is on, it will be turned off and vice versa. Please note that the coordinates are switched around so that the row comes first and then the column — it's (Y,X) instead of (X,Y) like the [Pt-Change(](Pt-Change\(.md) command. Also note that the row decreases as you go _up_ which can confuse users.

In addition to being easier to use because it is not affected by the window settings (meaning you don't have to set them when using the command), Pxl-Change( is faster than its equivalent Pt-Change( command, so it should generally be used instead whenever possible.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is triggered if the coordinates are not whole numbers or not in the right range ([0..62] for row, [0..94] for column). These bounds are also affected by split screen mode.

## Related Commands

*   [Pxl-On(](Pxl-On\(.md)
*   [Pxl-Off(](Pxl-Off\(.md)
*   [pxl-Test(](pxl-Test\(.md)
*   [Pt-Change(](Pt-Change\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, iPhoenixOnTIBD.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


