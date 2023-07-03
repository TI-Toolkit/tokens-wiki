| Property      | Value |
|---------------|-------|
| Hex Value     | `$CA`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ch(`</li></ul> |

# `cosh(`

## Description
Returns hyperbolic cosine of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`cosh(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `cosh(`
<hr>

Calculates the hyperbolic cosine of a value. The hyperbolic trig functions [sinh(](/sinh), `cosh(`, and [tanh(](/tanh) are an analog of normal trig functions, but for a hyperbola, rather than a circle. They can be expressed in terms of real powers of [e](/e-value), and don't depend on the [Degree](/degree-mode) or [Radian](/radian-mode) mode setting.

```ti-basic
cosh(0)
    1
cosh(1)
    1.543080635
```

Like normal trig commands, `cosh(` works on [lists](/lists) as well, but not on complex numbers, even though the function is often extended to the complex numbers in mathematics.

## Formulas

The definition of hyperbolic cosine is:

(1) $`\begin{align} \cosh{x}=\frac{e^x+e^{-x}}{2} \end{align}`$ 

## Related Commands

*   [sinh(](/sinh)
*   [sinh‾¹(](/arsinh)
*   [cosh‾¹(](/arcosh)
*   [tanh(](/tanh)
*   [tanh‾¹(](/artanh)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `cosh ` added |
| <b>TI-83</b> | 0.01013 | Renamed `cosh ` to `cosh(`


