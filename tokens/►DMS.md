| Property      | Value |
|---------------|-------|
| Hex Value     | `$01`|
| Categories    | <ul><li>[Angle](<../categories/Angle.md>)</li><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `►DMS`</li></ul> |

# `►DMS`

## Overview
Displays `value` in DMS format.


<b>Availability</b>: Token available everywhere.

## Syntax
`value►DMS`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>angle</kbd>, `ANGLE`, `4:DMS`
<hr>

## Description

The <tt>►DMS</tt> command can be used when displaying a real number on the home screen, or with the <tt><a href="Disp.md">Disp</a></tt> and <tt><a href="Pause.md">Pause</a></tt> commands. It will then format the number as an angle with degree, minute, and second parts.

```ti-basic
30►DMS
    30°0'0"
100/9°►DMS
    11°6'40"
```

It will also work when displaying a number by putting it on the last line of a program by itself. It does **not** work with <tt><a href="Output(.md">Output(</a></tt>, <tt><a href="Text(.md">Text(</a></tt>, or any other more complicated display commands.

Although <tt>►DMS</tt> is meant as a way to format angles in <tt><a href="Degree mode.md">Degree mode</a></tt>, it doesn't depend on the angle mode chosen, only on the number itself. Note that entering a number as _degree_°_minute_'_second_" will also work, in any mode, and it will not be converted to radians in <tt><a href="Radian mode.md">Radian mode</a></tt>.

## Error Conditions

*   **[ERR:SYNTAX](errors#syntax)** is thrown if the command is used somewhere other than the allowed display commands.
*   **[ERR:DATA TYPE](errors#datatype)** is thrown if the value is complex, or if given a list or matrix as argument.

## Related Commands

*   <tt><a href="►Dec.md">►Dec</a></tt>
*   <tt><a href="►Frac.md">►Frac</a></tt>
*   <tt><a href="►Polar.md">►Polar</a></tt>
*   <tt><a href="►Rect.md">►Rect</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


