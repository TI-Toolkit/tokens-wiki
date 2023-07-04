| Property      | Value |
|---------------|-------|
| Hex Value     | `$88`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Zboîte`</li></ul> |

# `ZBox`

## Description
Displays a graph, lets you draw a box that defines a new viewing window, and updates the window.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZBox`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `1:ZBox`
<hr>

The ZBox command allows the user to select a smaller window within the current graphing window to zoom in to. To select the window, use the arrow keys and ENTER to select one corner of the window; then as you use the arrow keys and ENTER to select the other corner, a rectangle of the window's dimensions will be shown.

It's not recommended to use this in most programs, because entering an empty window (with no width or no height) will cause an error and exit the program without letting it clean up.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this command is used outside a program.
*   **[ERR:ZOOM](errors#zoom)** is thrown if an empty window is selected (with no width or no height)

## Related Commands

*   [Zoom In](Zoom In.md)
*   [Zoom Out](Zoom Out.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


