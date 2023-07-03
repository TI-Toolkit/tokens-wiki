| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB30`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Math](<../categories/Math.md>) > [Complex](<../categories/Math.md#Complex>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `►Polaire`</li></ul> |

# `►Polar`

## Description
Displays `complex value` in polar format.


<b>Availability</b>: Token available everywhere.

## Syntax
`complex value ►Polar`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>complex value</b></td><td>complex</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `CMPLX`, `7:Polar`
<hr>

The ►Polar command can be used when displaying a complex number on the home screen, or with the [Disp](/disp) and [Pause](/pause) commands. It will then format the number as though [re^θi](/re-thetai) mode were enabled. It also works with lists.

```ti-basic
i
    i
i►Polar
    1e^(1.570796327i)
{1,i}►Polar
    {1 1e^(1.570796327i)}
```

It will also work when displaying a number by putting it on the last line of a program by itself. It does **not** work with [Output(](/output), [Text(](/text), or any other more complicated display commands.

To actually separate a number into the components of polar form, use [abs(](/abs) and [angle(](/angle).

## Error Conditions

*   **[ERR:SYNTAX](/errors#syntax)** is thrown if the command is used somewhere other than the allowed display commands.
*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if the value is real.

## Related Commands

*   [►Frac](/frac)
*   [►Dec](/dec)
*   [►Rect](/rect)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


