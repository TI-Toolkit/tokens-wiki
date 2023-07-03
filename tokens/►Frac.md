| Property      | Value |
|---------------|-------|
| Hex Value     | `$03`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `►Frac`</li></ul> |

# `►Frac`

## Description
Displays a real or complex number, expression, list, or matrix as a fraction simplified to its simplest terms.


<b>Availability</b>: Token available everywhere.

## Syntax
`value►Frac`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `MATH`, `1:Frac`
<hr>

`►Frac` attempts to display the input in fraction form. It only works on the [home screen](/homescreen) outside a program, or with the [Disp](/disp) and [Pause](/pause) commands in a program. It takes up to 12 decimal places of a non-terminating decimal to find the corresponding fraction. The decimal input is returned if `►Frac` fails to find the fraction form.

For a more versatile algorithm for finding fractions, see the [Decimal to Fraction](/decimal-to-fraction) routine.

```ti-basic
.333►Frac
        .333
.333333333333►Frac
         1/3
```

## Related Commands

*   [►Dec](/dec)

## See Also

*   [Decimal to Fraction](/decimal-to-fraction)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


