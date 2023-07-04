| Property      | Value |
|---------------|-------|
| Hex Value     | `$92`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `SauveFen`</li></ul> |

# `ZoomSto`

## Description
Immediately stores the current viewing window.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZoomSto`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `MEMORY`, `2:ZoomSto`
<hr>

The ZoomSto command backs up all window settings applicable to the current graphing mode (those that are shown in the WINDOW menu) to backup variables used specifically for this command. These backup variables are found in the VARS>Zoom… menu, and are distinguished by a Z in front of their name. For example, Xmin is backed up to ZXmin, PlotStart is backed up to ZPlotStart, etc.

Using [ZoomRcl](ZoomRcl.md), these backup variables can be used to overwrite the current window settings, recalling the saved window.

One source of confusion with this command can be the fact that ZoomSto and ZoomRcl only deal with the current graphing mode (and don't touch settings from other graphing modes), but some window variables are shared by graphing modes. So some saved zoom variables only applicable to one mode, such as ZTmin, can be from older saves than those applicable to all modes, such as ZXmin.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this command is used outside a program (but not if the menu option is used, of course).

## Related Commands

*   [ZoomRcl](ZoomRcl.md)
*   [ZPrevious](ZPrevious.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


