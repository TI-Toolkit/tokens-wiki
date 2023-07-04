| Property      | Value |
|---------------|-------|
| Hex Value     | `$A2`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Pxl-Naff(`</li></ul> |

# `Pxl-Off(`

## Description
The Off state will display the set Background Image Var or COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Pxl-Off(row,column)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>row</b></td><td></td><td></td></tr>

<tr><td><b>column</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `POINTS`, `5:Pxl-Off(`
<hr>

The Pxl-Off( command is used to turn off the pixel at the given (Y,X) coordinates. Please note that the coordinates are switched around so that the row comes first and then the column — it's (Y,X) instead of (X,Y) like the [Pt-Off(](Pt-Off\(.md) command. Also note that the (0,0) point is the upper left corner of the Graph screen.

In addition to being easier to use because it is not affected by the window settings (meaning you don't have to set them when using the command), Pxl-Off( is faster than its equivalent Pt-Off( command, so it should generally be used instead whenever possible.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is triggered if the coordinates are not whole numbers or not in the right range ([0..62] for row, [0..94] for column). These bounds are also affected by split screen mode.

## Related Commands

*   [Pxl-On(](Pxl-On\(.md)
*   [Pxl-Change(](Pxl-Change\(.md)
*   [pxl-Test(](pxl-Test\(.md)
*   [Pt-Off(](Pt-Off\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, my_name.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


