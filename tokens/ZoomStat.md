| Property      | Value |
|---------------|-------|
| Hex Value     | `$8F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ZoomStat`</li></ul> |

# `ZoomStat`

## Overview
Redefines the viewing window so that all statistical data points are displayed.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZoomStat`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `9:ZoomStat`
<hr>

## Description

The ZoomStat command command zooms to a graphing window that accurately represents all the currently defined stat plots (see the [PlotN(](PlotN\(.md) commands). You can think of it as [ZoomFit](ZoomFit.md), but for plots rather than equations.

The specific function of the command is as follows: first, the minimum and maximum X and Y coordinates that stat plots will be using are calculated. Xmin, Xmax, Ymin, and Ymax are calculated to fit all these coordinates plus a padding on either side. The padding is 10% of the unpadded range on the left and right (for Xmin and Xmax), and 17% of the unpadded range on the top and bottom (for Ymin and Ymax).

Of course, the exact function varies slightly with the type of plot defined. For example, Ymin and Ymax will not be affected by [Boxplot](plotn#boxplot) and [Modboxplot](plotn#modboxplot) plots, since they ignore Y-coordinates when graphing. Also, [Histogram](plotn#histogram) fitting is a bit trickier than others. Xscl and Yscl also are changed for histograms, though not for the other plots.

For all plots except Histogram, ZoomStat will create a window with Xmin=Xmax (or Ymin=Ymax) if the X range (or Y range) of the data is 0. This will throw an [ERR:WINDOW RANGE](errors#windowrange). If a Histogram causes this error, though, [ERR:STAT](errors#stat) is thrown, and _then_ when you access the graphscreen [ERR:WINDOW RANGE](errors#windowrange) will occur.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** is thrown if this command is using outside a program (although the menu option, of course, is fine).
*   **[ERR:STAT](errors#stat)** is thrown when trying to ZoomFit to a Histogram with only one distinct number in the data list.
*   **[ERR:WINDOW RANGE](errors#windowrange)** is thrown when the window ends up being empty.

## Related Commands

*   [ZoomFit](ZoomFit.md)
*   [ZBox](ZBox.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, seb83, Zaphod Beeblebrox.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


