| Property      | Value |
|---------------|-------|
| Hex Value     | `$8B`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Zorthonormal`</li></ul> |

# `ZSquare`

## Description
Adjusts the `X` or `Y` window settings so that each pixel represents an equal width and height in the coordinate system, and updates the viewing window.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZSquare`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `5:ZSquare`
<hr>

The ZSquare command changes the [window variables](system-variables#window) Xmin and Xmax, or Ymin and Ymax, so that ΔX=ΔY, preserving all other settings and the coordinate of the center of the screen. This ensures that a numerical distance on the graphscreen has the same physical length on the calculator display, no matter if it's vertical, horizontal, or diagonal. Probably the most obvious effect of this change is that circles (whether graphed with an equation or drawn with the [Circle(](Circle\(.md) command) are actually circles and not ovals.

When determining which of Xmin and Xmax or Ymin and Ymax to change, the command picks the ones that would be increased, and not decreased. This way, the window can never get smaller.

Note that [ZDecimal](ZDecimal.md), [ZInteger](ZInteger.md), and to an extent [ZTrig](ZTrig.md) already have the same proportions, and don't require a ZSquare command to follow them.

## Advanced Uses

ZSquare can be useful in setting up a [friendly window](friendly-window).

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this command is used outside a program.

## Related Commands

*   [ZDecimal](ZDecimal.md)
*   [ZInteger](ZInteger.md)
*   [ZStandard](ZStandard.md)

## See Also

*   [Friendly Graphing Windows](Friendly Graphing Windows.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


