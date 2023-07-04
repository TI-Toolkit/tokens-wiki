| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E12`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [U](<../categories/Catalog.md#U>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `uwAxes`</li></ul> |

# `uwAxes`

## Description
Sets sequence graphs to plot `u(n``)` on the x-axis and `w(``n``)` on the y-axis.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`uwAxes`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `uw`
<hr>

When uwAxes is enabled, and the calculator is in [Seq](seq-mode) mode, the equations u and w will be graphed against each other (that is, the points (u(_n_),w(_n_)) are graphed for the values of _n_ between _n_Min and _n_Max). With this setting, sequence mode graphs are a bit like [parametric](param) mode, except the parameter _n_ is always an integer, and recursive definitions are possible.

The equation v is ignored when in uwAxes mode.

See "Related Commands" for other possibilities of graphing sequences.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** is thrown if either u or w is undefined.

## Related Commands

*   [Time](Time.md)
*   [Web](Web.md)
*   [uvAxes](uvAxes.md)
*   [vwAxes](vwAxes.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


