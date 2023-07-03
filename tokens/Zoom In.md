| Property      | Value |
|---------------|-------|
| Hex Value     | `$89`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Zoom +`</li></ul> |

# `Zoom In`

## Description
Magnifies the part of the graph that surrounds the cursor location.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Zoom In`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `2:Zoom In`
<hr>

Outside a program, the Zoom In tool allows you to pick a point on the graph screen and change the graphing window to a smaller one centered at that point. The Zoom In command, used in a program, also changes the graphing window to a smaller one, but doesn't let you pick a point — it uses the center of the screen.

The variables [XFact](/system-variables#window) and [YFact](/system-variables#window) are used to determine how much the graphing window changes: the total width of the screen, Xmax-Xmin, is divided by XFact, and the total height, Ymax-Ymin, is divided by YFact. Because you can't store a value less than 1 to either of these variables, the screen is guaranteed to get no larger.

Aside from Xmin, Xmax, Ymin, and Ymax, no window variables are modified by this command (although ΔX and ΔY change [as they are defined](/system-variables#window)).

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** occurs if this command is used outside a program.
*   **[ERR:WINDOW RANGE](/errors#windowrange)** is thrown if the window is zoomed in beyond the level of the calculator's precision.

## Related Commands

*   [Zoom Out](/zoom-out)
*   [ZBox](/zbox)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


