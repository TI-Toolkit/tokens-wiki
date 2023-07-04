| Property      | Value |
|---------------|-------|
| Hex Value     | `$9E`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Pt-Aff(`</li></ul> |

# `Pt-On(`

## Description
Draws a point at (`x`,`y`) on the graph area using `mark `and the specified `color#`.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Pt-On(x,y[,mark,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>y</b></td><td></td><td></td></tr>

<tr><td>mark</td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `POINTS`, `1:Pt-On(`
<hr>

The Pt-On( command is used to draw a point on the graph screen at the given (X,Y) coordinates. Pt-On( is affected by the [window settings](system-variables#window) Xmin, Xmax, Ymin, and Ymax. Make sure to change these accordingly when using it in a program, otherwise, you don't know where the point will show up.

## Advanced Uses

The Pt-On( command has an optional third argument that determines the shape of the point (its mark). The mark can be 1 (dot), 2 (3x3 box), 3 (3x3 cross), 6 (3x3 box), or 7 (3x3 cross). Note that by using the 3x3 shapes the X,Y coordinates will be the center of the shape and not the upperleft corner of the shape. You don't need to specify the mark when using the first mark because it is the default; also, any value that isn't 2, 3, 6, or 7 will be treated as the default of 1. Remember to use the same mark when turning a point off as you used to turn it on. Note that the mark arguments 6 and 7 are not supported on the TI-84+CE, and using them will return a domain error. The color calculators also include a color argument after the mark argument, which can be used to change the color of the point. Note that the leaving the color argument blank will result in the point being plotted with a default color of blue.

If you need to convert coordinates in pixel format into point coordinate format, it can easily be done with the following formula:

(X pixel coordinate*ΔX)-absolute value(Xmax)=X point  
(Y pixel coordinate*ΔY)-absolute value(Ymax)=Y point

The ΔX and ΔY variables are available under "VARS", "Window", options 8 and 9. These two variables represent the number of points per pixel on the graph screen, so multiplying the pixel value by the ratio of points to pixels will give you the point value, you then subtract the Xmax/Ymax from this value to calibrate it to the center of the screen. This formula is useful in programs that use the pixel commands for their speed advantage, but need a point value for commands such as Circle( or Line(.

```ti-basic
:Pt-On(5,5,1
should be
:Pt-On(5,5
```

## Related Commands

*   [Pt-Off(](Pt-Off\(.md)
*   [Pt-Change(](Pt-Change\(.md)
*   [Pxl-On(](Pxl-On\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


