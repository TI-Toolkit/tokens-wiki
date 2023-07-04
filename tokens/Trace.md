| Property      | Value |
|---------------|-------|
| Hex Value     | `$84`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Trace`</li></ul> |

# `Trace`

## Overview
Displays the graph and enters TRACE mode.


<b>Availability</b>: Token available everywhere.

## Syntax
`Trace`

## Location
<tt><kbd><b>trace</b></kbd></tt>
<hr>

## Description

The Trace command displays the graph screen, and allows the user to trace any graphed equations or plots. It works in almost exactly the same way as pressing TRACE does outside a program. When the user presses ENTER, control returns to the program.

When tracing, [ExprOn](ExprOn.md) and [ExprOff](ExprOff.md) affect how the currently-traced equation is displayed, and [CoordOn](CoordOn.md) and [CoordOff](CoordOff.md) affect whether the coordinates of the cursor are displayed ([RectGC](RectGC.md) and [PolarGC](PolarGC.md) determine the type of coordinates).

Since the ENTER key is already used for exiting, the Trace command lacks some of the functionality of pressing TRACE outside a program, where you can use ENTER to center the graphing window on the cursor. The independent variables X, T, θ, and _n_ cannot by directly typed in, either - they can only be selected with the arrow buttons.

## Advanced Uses

As a side effect, the coordinates of the last point traced are stored to X and Y (as well as R and θ, if you're in [PolarGC](PolarGC.md) mode, and T, θ and _n_ depending on the graphing mode). Also, the window bounds may change if the user traces an equation past the edge of the screen.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** is thrown if this command is used outside a program.

## Related Commands

*   [Input](Input.md)
*   [Select(](Select\(.md)
*   [DispGraph](DispGraph.md)
*   [DispTable](DispTable.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: b2jammer, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


