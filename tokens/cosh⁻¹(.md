| Property      | Value |
|---------------|-------|
| Hex Value     | `$CB`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Argch(`</li></ul> |

# `cosh⁻¹(`

## Description
Returns hyperbolic arccosine of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`cosh⁻¹ (value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>⁻¹</b></td><td>real|expression|real[]</td><td>Yes</td></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `cosh`
<hr>

The `coshֿ¹(` function gives the inverse hyperbolic cosine of a value. `coshֿ¹(x)` is the number y such that x = `cosh(y)`.

Although `coshֿ¹(x)` can be defined for all real and complex numbers, it assumes real values only for x≥1. Since hyperbolic functions in the Z80 calculators are restricted only to real values, [ERR:DOMAIN](/errors#domain) is thrown when x<1.

The `coshֿ¹(` command also works for lists.

```ti-basic
coshֿ¹(1)
    0
coshֿ¹({2,3})
    {1.316957897 1.762747174}
```

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** when taking the inverse cosh of a number less than 1.

## Related Commands

*   [sinh(](/sinh)
*   [sinhֿ¹(](/arsinh)
*   [cosh(](/cosh)
*   [tanh(](/tanh)
*   [tanhֿ¹(](/artanh)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `cosh⁻¹ ` added |
| <b>TI-83</b> | 0.01013 | Renamed `cosh⁻¹ ` to `cosh⁻¹(`


