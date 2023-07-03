| Property      | Value |
|---------------|-------|
| Hex Value     | `$01`|
| Categories    | <ul><li>[Angle](<../categories/Angle.md>)</li><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `►DMS`</li></ul> |

# `►DMS`

## Description
Displays `value` in DMS format.


<b>Availability</b>: Token available everywhere.

## Syntax
`value►DMS`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>angle</kbd>, `ANGLE`, `4:DMS`
<hr>

The `►DMS` command can be used when displaying a real number on the home screen, or with the [Disp](/disp) and [Pause](/pause) commands. It will then format the number as an angle with degree, minute, and second parts.

```ti-basic
30►DMS
    30°0'0"
100/9°►DMS
    11°6'40"
```

It will also work when displaying a number by putting it on the last line of a program by itself. It does **not** work with [Output(](/output), [Text(](/text), or any other more complicated display commands.

Although `►DMS` is meant as a way to format angles in [Degree mode](/degree-mode), it doesn't depend on the angle mode chosen, only on the number itself. Note that entering a number as _degree_°_minute_'_second_" will also work, in any mode, and it will not be converted to radians in [Radian mode](/radian-mode).

## Error Conditions

*   **[ERR:SYNTAX](/errors#syntax)** is thrown if the command is used somewhere other than the allowed display commands.
*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if the value is complex, or if given a list or matrix as argument.

## Related Commands

*   [►Dec](/dec)
*   [►Frac](/frac)
*   [►Polar](/polar-display)
*   [►Rect](/rect)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


