| Property      | Value |
|---------------|-------|
| Hex Value     | `$C9`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Argsh(`</li></ul> |

# `sinh⁻¹(`

## Description
Returns the hyperbolic arcsine of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`sinh⁻¹ (value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>⁻¹</b></td><td>real|expression|real[]</td><td></td></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `sinh`
<hr>

The sinhֿ¹( command calculates the inverse hyperbolic sine of a value. sinhֿ¹(x) is the number y such that x = sinh(y). Unlike for the standard trig functions, this uniquely determines the inverse hyperbolic sine of any real number.

The sinhֿ¹( command also works for lists.

```ti-basic
sinhֿ¹(0)
    0
sinhֿ¹({1,2,3})
    {.881373587 1.443635475 1.818446459}
```

## Related Commands

*   [sinh(](/sinh)
*   [cosh(](/cosh)
*   [coshֿ¹(](/arcosh)
*   [tanh(](/tanh)
*   [tanhֿ¹(](/artanh)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `sinh⁻¹ ` added |
| <b>TI-83</b> | 0.01013 | Renamed `sinh⁻¹ ` to `sinh⁻¹(`


