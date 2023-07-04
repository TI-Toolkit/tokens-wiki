| Property      | Value |
|---------------|-------|
| Hex Value     | `$CD`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Argth(`</li></ul> |

# `tanh⁻¹(`

## Description
Returns the hyperbolic arctangent of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`tanh⁻¹(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>⁻¹</b></td><td>real|expression|real[]</td><td></td></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `tanh`
<hr>

The tanhֿ¹( command calculates the inverse hyperbolic tangent of a value. tanhֿ¹(x) is the number y such that x = tanh(y).

tanhֿ¹(x), although it can be defined for all real and complex numbers, is real-valued only for x in the open interval (-1,1). Since Z80 calculators have their hyperbolic functions and inverses restricted to real values, [ERR:DOMAIN](errors#domain) is thrown when x is outside the interval (-1,1).

The tanhֿ¹( command also works for lists.

```ti-basic
tanhֿ¹(0)
    0
tanhֿ¹({-.5,.5})
    {-.5493061443 .5493061443}
```

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** when taking the inverse tanh of a number not between -1 and 1.

## Related Commands

*   [sinh(](sinh\(.md)
*   [sinhֿ¹(](sinhֿ¹\(.md)
*   [cosh(](cosh\(.md)
*   [coshֿ¹(](coshֿ¹\(.md)
*   [tanh(](tanh\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `tanh⁻¹ ` added |
| <b>TI-83</b> | 0.01013 | Renamed `tanh⁻¹ ` to `tanh⁻¹(`


