| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E03`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `CoordRect`</li></ul> |

# `RectGC`

## Overview
Sets rectangular graphing coordinates format.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`RectGC`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `RectGC`
<hr>

## Description

The RectGC ("Rectangular Grid Coordinates") command (like its opposite, the [PolarGC](PolarGC.md)) command, affects how the coordinates of a point on the graph screen are displayed. When RectGC is enabled, the coordinates of a point are displayed as (X,Y).

The X and Y coordinates of a point are interpreted as the horizontal and vertical distance from the origin (the point (0,0)) Up and right are positive directions, while down and left are negative. For example, the point (1,-2) — that is, the point with x-coordinate 1 and y-coordinate -2 — is one horizontal unit right and two horizontal units down from (0,0).

Of course, coordinates are only displayed with the [CoordOn](CoordOn.md) setting; however, with [CoordOff](CoordOff.md), RectGC and PolarGC are still useful, because in a variety of cases, the coordinates of a point are also stored to variables. With RectGC enabled, they are stored to X and Y.

## Advanced

The following situations involve storing coordinates of a point to variables:

*   Graphing an equation
*   Tracing an equation or plot
*   Moving the cursor on the graph screen
*   Using the interactive mode of one of the 2nd DRAW commands
*   Using one of [DrawF](DrawF.md), [DrawInv](DrawInv.md), or [Tangent(](Tangent\(.md)
*   Anything in the 2nd CALC menu.

Naturally, any command like [Input](Input.md) or [Select(](Select\(.md) which involves the above, will also store coordinates of a point.

## Related Commands

*   [PolarGC](PolarGC.md)
*   [CoordOn](CoordOn.md)
*   [CoordOff](CoordOff.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


