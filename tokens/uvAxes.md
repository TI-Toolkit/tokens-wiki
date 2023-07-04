| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E10`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [U](<../categories/Catalog.md#U>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `uvAxes`</li></ul> |

# `uvAxes`

## Overview
Sets sequence graphs to plot `u(n``)` on the x-axis and `v(``n``)` on the y-axis.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`uvAxes`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `uv`
<hr>

## Description

When uvAxes is enabled, and the calculator is in [Seq](seq-mode) mode, the equations u and v will be graphed against each other (that is, the points (u(_n_),v(_n_)) are graphed for the values of _n_ between _n_Min and _n_Max). With this setting, sequence mode graphs are a bit like [parametric](param) mode, except the parameter _n_ is always an integer, and recursive definitions are possible.

The equation w is ignored when in uvAxes mode.

See "Related Commands" for other possibilities of graphing sequences.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** is thrown if either u or v is undefined.

## Related Commands

*   [Time](Time.md)
*   [Web](Web.md)
*   [uwAxes](uwAxes.md)
*   [vwAxes](vwAxes.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


