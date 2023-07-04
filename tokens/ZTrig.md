| Property      | Value |
|---------------|-------|
| Hex Value     | `$87`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ZTrig`</li></ul> |

# `ZTrig`

## Description
Replots the functions immediately, updating the window variables to preset values for plotting trig functions.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZTrig`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `7:ZTrig`
<hr>

The <tt>ZTrig</tt> command sets the screen to a special [friendly window](friendly-window) useful for trigonometric calculations. Unlike the <tt><a href="ZDecimal.md">ZDecimal</a></tt> and <tt><a href="ZInteger.md">ZInteger</a></tt> commands, for which the distance between two pixels is a short decimal or integer, <tt>ZTrig</tt> sets the horizontal distance between two pixels to be π/24 (in <tt><a href="Radian.md">Radian</a></tt> mode) or 7.5 (in <tt><a href="Degree.md">Degree</a></tt> mode) . The specific changes <tt>ZTrig</tt> makes are:

*   Xmin=-352.5[°](°.md) or -47/24π<sup><a href="ʳ.md">ʳ</a></sup>
*   Xmax=352.5° or 47/24π<sup>r</sup>
*   Xscl=90° or π/2<sup>r</sup>
*   Ymin=-4
*   Ymax=4
*   Yscl=1

Although this window is not quite square (and therefore, distances in the X and Y direction are not exactly equally proportioned), it is quite close, when in <tt>Radian</tt> mode. In a square window (such as the output of <tt><a href="ZSquare.md">ZSquare</a></tt>), Ymax would have to be 31/24π, which is approximately 4.05789. As you can see, the value of 4 that <tt>ZTrig</tt> uses is not too far off.

## Advanced Uses

In theory, <tt>ZTrig</tt> should be quite useful in graphing trigonometric functions, since the calculated points would fall exactly on important angles; for example, it would graph the asymptotes of Y=<tt><a href="tan(.md">tan(</a></tt>X) correctly. This is actually only true when in <tt><a href="Degree.md">Degree</a></tt> mode. In <tt><a href="Radian.md">Radian</a></tt> mode, due to round-off error, the pixels far away from the origin do not _exactly_ correspond to rational multiples of π. For example, the pixel which was supposed to correspond to π/2 actually has a value of .5000000001*π, which is enough to make this command mostly useless.

However, in <tt><a href="G-T.md">G-T</a></tt> mode, the size that the graph takes up on the screen is different, and <tt>ZTrig</tt> uses the same values, unlike <tt><a href="ZDecimal.md">ZDecimal</a></tt>.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this command is used outside a program (but not if the menu option is used, of course).

## Related Commands

*   <tt><a href="ZDecimal.md">ZDecimal</a></tt>
*   <tt><a href="ZInteger.md">ZInteger</a></tt>
*   <tt><a href="ZStandard.md">ZStandard</a></tt>

## See Also

*   [Friendly Graphing Windows](Friendly Graphing Windows.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


