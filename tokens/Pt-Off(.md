| Property      | Value |
|---------------|-------|
| Hex Value     | `$9F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Pt-Naff(`</li></ul> |

# `Pt-Off(`

## Description
Erases a point at (`x`,`y`) on the graph area using `mark`. The Off state may be the background color determined by the `ImageVar` or `color` setting.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Pt-Off(x,y[,mark])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>y</b></td><td></td><td></td></tr>

<tr><td>mark</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `POINTS`, `2:Pt-Off(`
<hr>

The Pt-Off( command is used to turn off a point (a pixel on the screen) on the graph screen at the given (X,Y) coordinates. Pt-Off( is affected by the window settings, which means you have to change the window settings accordingly, otherwise the point won't show up correctly on the screen.

## Advanced Uses

The Pt-Off( command has an optional third argument that determines the shape of the point (its mark). The mark can be 1 (dot), 2 (3x3 box), 3 (3x3 cross), 6 (3x3 box), or 7 (3x3 cross). Note that by using the 3x3 shapes the X,Y coördinates will be the center of the shape and not the upperleft corner of the shape. You don't need to specify the mark when using the first mark because it is the default; also, any value that isn't 2, 3, 6, or 7 will be treated as the default of 1.

```ti-basic
:Pt-Off(5,5,1
Remove Mark
:Pt-Off(5,5
```

## Related Commands

*   [Pt-On(](/pt-on)
*   [Pt-Change(](/pt-change)
*   [Pxl-Off(](/pxl-off)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


