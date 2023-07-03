| Property      | Value |
|---------------|-------|
| Hex Value     | `$8A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Zoom -`</li></ul> |

# `Zoom Out`

## Description
Displays a greater portion of the graph, centered on the cursor location.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Zoom Out`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `3:Zoom Out`
<hr>

Outside a program, the Zoom Out tool allows you to pick a point on the graph screen and change the graphing window to a larger one centered at that point. The Zoom Out command, used in a program, also changes the graphing window to a larger one, but doesn't let you pick a point — it uses the center of the screen.

The variables [XFact](/system-variables#window) and [YFact](/system-variables#window) are used to determine how much the graphing window changes: the total width of the screen, Xmax-Xmin, is multiplied by XFact, and the total height, Ymax-Ymin, is multiplied by YFact. Because you can't store a value less than 1 to either of these variables, the screen is guaranteed to get no smaller.

Aside from Xmin, Xmax, Ymin, and Ymax, no window variables are modified by this command (although ΔX and ΔY change [as they are defined](/system-variables#window)).

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** occurs if this command is used outside a program.
*   **[ERR:ZOOM](/errors#zoom)** is thrown if an overflow occurs calculating the new window dimensions (the window is too big)

## Related Commands

*   [Zoom In](/zoom-in)
*   [ZBox](/zbox)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


