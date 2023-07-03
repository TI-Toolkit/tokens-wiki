| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB65`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ZminMax`</li></ul> |

# `ZoomFit`

## Description
Recalculates `Ymin` and `Ymax` to include the minimum and maximum `Y` values, between `Xmin` and `Xmax`, of the selected functions and replots the functions.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZoomFit`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `0:ZoomFit`
<hr>

The ZoomFit zooms to the smallest window that contains all points of the currently graphed equations. In [Func](/func) mode, this means that it calculates the minimum and maximum Y-value for the current Xmin to Xmax range, and sets Ymin and Ymax to those values (Xmin and Xmax remain unchanged). In other graphing modes, this process is done for both X and Y over the range of T, θ, or _n_.

## Optimization

When graphing an equation with ZoomFit, the calculator will first calculate all points to find the minimum and maximum, then calculate all the points again to graph it. This can be time consuming if the equation is very complicated, and in that case doing part of the process manually might be faster if you reuse the points.

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** is thrown if this command is using outside a program (although the menu option, of course, is fine).
*   **[ERR:WINDOW RANGE](/errors#windowrange)** is thrown when the window ends up being empty (if the function is constant, for example)

## Related Commands

*   [ZoomStat](/zoomstat)
*   [ZBox](/zbox)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 1.010 | Added |


