| Property      | Value |
|---------------|-------|
| Hex Value     | `$8C`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ZintConf`</li></ul> |

# `ZInteger`

## Overview
Redefines the viewing window using the following dimensions: `TraceStep=1, `Δ`X=0.5, Xscl=10, `Δ`Y=1, Yscl=10.`


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZInteger`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `8:ZInteger`
<hr>

## Description

When ZInteger is chosen as a menu option outside a program, it asks for a point on the graph screen. This point's coordinates are rounded to the nearest integer point. Then the [window variables](system-variables#window) are changed so the window is centered at this point, and so that the coordinates of every pixel are integers. ΔX and ΔY, the distances between two pixels next to each other, are both 1.

The above process modifies Xmin, Xmax, Ymin, and Ymax. Xscl and Yscl are also modified: both are set to 10. No other variables are modified (unless you count ΔX and ΔY, which are affected as they are defined).

The ZInteger command (usable in a program only) has a slightly different effect: instead of allowing you to choose a point, it automatically uses the point that is the current center.

## Advanced Uses

A graph window commonly used in programming can be created by using the [ZStandard](ZStandard.md) and ZInteger commands:

```ti-basic
:ZStandard
:ZInteger
```

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this command is used outside a program.

## Related Commands

*   [ZDecimal](ZDecimal.md)
*   [ZStandard](ZStandard.md)
*   [ZSquare](ZSquare.md)

## See Also

*   [Friendly Graphing Windows](Friendly Graphing Windows.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, seb83.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


