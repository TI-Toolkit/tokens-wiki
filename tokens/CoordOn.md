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

When moving a cursor on a screen, it's possible for the calculator to display the coordinates of the current point (either polar or rectangular coordinates, depending on which of <tt><a href="RectGC.md">RectGC</a></tt> or <tt><a href="PolarGC.md">PolarGC</a></tt> is set). The <tt>CoordOn</tt> command turns on this option (to disable it, use the <tt><a href="CoordOff.md">CoordOff</a></tt> command).

The coordinates are displayed in practically every situation when you're moving a cursor on the graph screen, even including the <tt><a href="Trace.md">Trace</a></tt>, <tt><a href="Input.md">Input</a></tt> or <tt><a href="Select(.md">Select(</a></tt> commands in a program. The interactive mode of <tt><a href="Text(.md">Text(</a></tt> and the <tt>Pen</tt> tool are the exceptions — this is because these two situations involve a pixel coordinate, and not a point.

## Related Commands

*   <tt><a href="CoordOff.md">CoordOff</a></tt>
*   <tt><a href="RectGC.md">RectGC</a></tt>
*   <tt><a href="PolarGC.md">PolarGC</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


