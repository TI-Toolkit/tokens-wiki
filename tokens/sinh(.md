| Property      | Value |
|---------------|-------|
| Hex Value     | `$C8`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `sh(`</li></ul> |

# `sinh(`

## Description
Returns the hyperbolic sine of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`sinh(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `sinh(`
<hr>

Calculates the hyperbolic sine of a value. The hyperbolic trig functions sinh(, [cosh(](/cosh), and [tanh(](/tanh) are an analog of normal trig functions, but for a hyperbola, rather than a circle. They can be expressed in terms of real powers of [e](/e-value), and don't depend on the [Degree](/degree-mode) or [Radian](/radian-mode) mode setting.

```ti-basic
sinh(0)
    0
sinh(1)
    1.175201194
```

Like normal trig commands, sinh( works on lists as well, but not on complex numbers, even though the function is often extended to the complex numbers in mathematics.

## Formulas

The definition of hyperbolic sine is:

(1) $`\begin{align} \sinh{x}=\frac{e^x-e^{-x}}{2} \end{align}`$ 

## Related Commands

*   [sinhֿ¹(](/arsinh)
*   [cosh(](/cosh)
*   [coshֿ¹(](/arcosh)
*   [tanh(](/tanh)
*   [tanhֿ¹(](/artanh)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `sinh ` added |
| <b>TI-83</b> | 0.01013 | Renamed `sinh ` to `sinh(`


