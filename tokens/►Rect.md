| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB2F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Math](<../categories/Math.md>) > [Complex](<../categories/Math.md#Complex>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `►Rect`</li></ul> |

# `►Rect`

## Description
Displays `complex value` or list in rectangular format.


<b>Availability</b>: Token available everywhere.

## Syntax
`complex value ►Rect`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>complex value</b></td><td>complex</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `CMPLX`, `6:Rect`
<hr>

The ►Rect command can be used when displaying a complex number on the home screen, or with the [Disp](/disp) and [Pause](/pause) commands. It will then format the number as though [a+bi](/a-bi) mode were enabled, even when it's not. It also works with lists.

```ti-basic
i►Polar
    1e^(1.570796327i)
Ans►Rect
    i
```

It will also work when displaying a number by putting it on the last line of a program by itself. It does **not** work with [Output(](/output), [Text(](/text), or any other more complicated display commands.

To actually separate a number into the components of rectangular form, use [real(](/real-func) and [imag(](/imag).

## Error Conditions

*   **[ERR:SYNTAX](/errors#syntax)** is thrown if the command is used somewhere other than the allowed display commands.
*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if the value is real.

## Related Commands

*   [►Frac](/frac)
*   [►Dec](/dec)
*   [►Polar](/polar-display)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


