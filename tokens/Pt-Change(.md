| Property      | Value |
|---------------|-------|
| Hex Value     | `$A0`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Pt-Change(`</li></ul> |

# `Pt-Change(`

## Description
Toggles a point on or off at (`x`,`y`) on the graph area. Off will be in the Background color and On will be the specified
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Pt-Change(x,y[,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>y</b></td><td></td><td></td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `POINTS`, `3:Pt-Change(`
<hr>

The Pt-Change( command is used to toggle a point (a pixel on the screen) on the graph screen at the given (X,Y) coordinates. If the point is on, it will be turned off and vice versa. Pt-Change( is affected by the window settings, which means you have to change the window settings accordingly, otherwise the point won't show up correctly on the screen.

Pt-Change( can be an interactive command: when on the graph screen, you can select it from the draw menu, and rather than have to input coordinates, be able to draw directly on the screen. Since you can both draw and erase points easily with Pt-Change(, this use of it is often more convenient than the Pen tool.

## Related Commands

*   [Pt-On(](Pt-On\(.md)
*   [Pt-Off(](Pt-Off\(.md)
*   [Pxl-Change(](Pxl-Change\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


