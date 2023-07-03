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

The `ZTrig` command sets the screen to a special [friendly window](/friendly-window) useful for trigonometric calculations. Unlike the [ZDecimal](/zdecimal) and [ZInteger](/zinteger) commands, for which the distance between two pixels is a short decimal or integer, `ZTrig` sets the horizontal distance between two pixels to be π/24 (in [Radian](/radian-mode) mode) or 7.5 (in [Degree](/degree-mode) mode) . The specific changes `ZTrig` makes are:

*   Xmin=-352.5[°](/degree-symbol) or -47/24π<sup><a href="/radian-symbol">r</a></sup>
*   Xmax=352.5° or 47/24π<sup>r</sup>
*   Xscl=90° or π/2<sup>r</sup>
*   Ymin=-4
*   Ymax=4
*   Yscl=1

Although this window is not quite square (and therefore, distances in the X and Y direction are not exactly equally proportioned), it is quite close, when in `Radian` mode. In a square window (such as the output of [ZSquare](/zsquare)), Ymax would have to be 31/24π, which is approximately 4.05789. As you can see, the value of 4 that `ZTrig` uses is not too far off.

## Advanced Uses

In theory, `ZTrig` should be quite useful in graphing trigonometric functions, since the calculated points would fall exactly on important angles; for example, it would graph the asymptotes of Y=[tan(](/tan)X) correctly. This is actually only true when in [Degree](/degree-mode) mode. In [Radian](/radian-mode) mode, due to round-off error, the pixels far away from the origin do not _exactly_ correspond to rational multiples of π. For example, the pixel which was supposed to correspond to π/2 actually has a value of .5000000001*π, which is enough to make this command mostly useless.

However, in [G-T](/g-t) mode, the size that the graph takes up on the screen is different, and `ZTrig` uses the same values, unlike [ZDecimal](/zdecimal).

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** occurs if this command is used outside a program (but not if the menu option is used, of course).

## Related Commands

*   [ZDecimal](/zdecimal)
*   [ZInteger](/zinteger)
*   [ZStandard](/zstandard)

## See Also

*   [Friendly Graphing Windows](/friendly-window)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


