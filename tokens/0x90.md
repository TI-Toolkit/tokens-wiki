| Property      | Value |
|---------------|-------|
| Hex Value     | `$90`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ZoomRpl`</li></ul> |

# `ZoomRcl`

## Overview
Graphs the selected functions in a user-defined viewing window.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZoomRcl`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `MEMORY`, `3:ZoomRcl`
<hr>

## Description

The ZoomRcl command restores a backup of the window settings previously saved by [ZoomSto](ZoomSto.md) — this backup is stored in special variables found in the VARS>Zoom… menu, which are distinguished by a Z in front of their name. For example, Xmin is restored from ZXmin, PlotStart is restored from ZPlotStart, etc.

Only those settings are restored that apply to the current graphing mode (that is, those that you can see in the window screen). And if no backup had been made, then the default settings are restored to (see [ZStandard](ZStandard.md)).

One source of confusion with this command can be the fact that ZoomSto and ZoomRcl only deal with the current graphing mode (and don't touch settings from other graphing modes), but some window variables are shared by graphing modes. So some saved zoom variables only applicable to one mode, such as ZTmin, can be from older saves than those applicable to all modes, such as ZXmin.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this command is used outside a program (but not if the menu option is used, of course).

## Related Commands

*   [ZoomSto](ZoomSto.md)
*   [ZPrevious](ZPrevious.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Kydapoot.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


