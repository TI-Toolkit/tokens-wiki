| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E04`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `CoordAff`</li></ul> |

# `CoordOn`

## Description
Turns on cursor coordinate value display.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`CoordOn`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `CoordOn`
<hr>

When moving a cursor on a screen, it's possible for the calculator to display the coordinates of the current point (either polar or rectangular coordinates, depending on which of [RectGC](/rectgc) or [PolarGC](/polargc) is set). The `CoordOn` command turns on this option (to disable it, use the [CoordOff](/coordoff) command).

The coordinates are displayed in practically every situation when you're moving a cursor on the graph screen, even including the [Trace](/trace), [Input](/input) or [Select(](/select) commands in a program. The interactive mode of [Text(](/text) and the `Pen` tool are the exceptions — this is because these two situations involve a pixel coordinate, and not a point.

## Related Commands

*   [CoordOff](/coordoff)
*   [RectGC](/rectgc)
*   [PolarGC](/polargc)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


