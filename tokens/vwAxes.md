| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E11`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [V](<../categories/Catalog.md#V>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `vwAxes`</li></ul> |

# `vwAxes`

## Overview
Sets sequence graphs to plot `v(n``)` on the x-axis and `w(``n``)` on the y-axis.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`vwAxes`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `vw`
<hr>

## Description

When vwAxes is enabled, and the calculator is in [Seq](seq-mode) mode, the equations v and w will be graphed against each other (that is, the points (v(_n_),w(_n_)) are graphed for the values of _n_ between _n_Min and _n_Max). With this setting, sequence mode graphs are a bit like [parametric](param) mode, except the parameter _n_ is always an integer, and recursive definitions are possible.

The equation u is ignored when in vwAxes mode.

See "Related Commands" for other possibilities of graphing sequences.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** is thrown if either v or w is undefined.

## Related Commands

*   [Time](Time.md)
*   [Web](Web.md)
*   [uvAxes](uvAxes.md)
*   [uwAxes](uwAxes.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


