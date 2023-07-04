| Property      | Value |
|---------------|-------|
| Hex Value     | `$A1`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Pxl-Aff(`</li></ul> |

# `Pxl-On(`

## Description
Draws pixel on the graph area at (`row`,`column`) in the specified color.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Pxl-On(row,column[,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>row</b></td><td></td><td></td></tr>

<tr><td><b>column</b></td><td></td><td></td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `POINTS`, `4:Pxl-On(`
<hr>

The Pxl-On( command is used to turn on the pixel at the given (Y,X) coordinates. Please note that the coordinates are switched around so that the row comes first and then the column — it's (Y,X) unlike the (X,Y) of the [Pt-On(](Pt-On\(.md) command. Also note that the (0,0) point is the upper left corner of the Graph screen.

In addition to being easier to use because it is not affected by the window settings (meaning you don't have to set them when using the command), Pxl-On( is faster than its equivalent Pt-On( command, so it should generally be used instead whenever possible.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is triggered if the coordinates are not whole numbers or not in the right range ([0..62] for row, [0..94] for column). These bounds are also affected by split screen mode.

## Related Commands

*   [Pxl-Off(](Pxl-Off\(.md)
*   [Pxl-Change(](Pxl-Change\(.md)
*   [pxl-Test(](pxl-Test\(.md)
*   [Pt-On(](Pt-On\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


