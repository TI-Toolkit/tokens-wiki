| Property      | Value |
|---------------|-------|
| Hex Value     | `$CC`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `th(`</li></ul> |

# `tanh(`

## Description
Returns hyperbolic tangent of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`tanh(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `tanh(`
<hr>

Calculates the hyperbolic tangent of a value. The hyperbolic trig functions [sinh(](sinh\(.md), [cosh(](cosh\(.md), and tanh( are an analog of normal trig functions, but for a hyperbola, rather than a circle. They can be expressed in terms of real powers of [e](e-value), and don't depend on the [Degree](degree-mode) or [Radian](radian-mode) mode setting.

```ti-basic
tanh(0)
    0
tanh(1)
    .761594156
```

Like normal trig commands, tanh( works on lists as well, but not on complex numbers, even though the function is often extended to the complex numbers in mathematics.

## Advanced Uses

The tanh( command can be used to approximate the sign function:

(1) $`\begin{align} \texttt{sgn} x=\begin{cases}-1&\text{if }x<0,\\0&\text{if }x=0,\\1&\text{if }x>0.\end{cases} \end{align}`$ 

As the absolute value of the input becomes large, the convergence is achieved at a point closer to zero. For the function to work as intended generally, numbers having lesser orders of magnitude need to be multiplied by a factor large enough for the argument to arrive at ±16.720082053122, which is the smallest input to produce ±1 (respectively) to fourteen digits of accuracy.

```ti-basic
5/12→X
    .4166666667
tanh(E9X)
    1
tanh(-E9X)
    -1
```

## Formulas

The definition of the hyperbolic tangent is:

(2) $`\begin{align} \tanh{x}=\frac{e^x-e^{-x}}{e^x+e^{-x}}=\frac{e^{2x}-1}{e^{2x}+1} \end{align}`$ 

## Related Commands

*   [sinh(](sinh\(.md)
*   [sinhֿ¹(](sinhֿ¹\(.md)
*   [cosh(](cosh\(.md)
*   [coshֿ¹(](coshֿ¹\(.md)
*   [tanhֿ¹(](tanhֿ¹\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, Edward H, GoVegan, thornahawk, Timothy Foster, Weregoose.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `tanh ` added |
| <b>TI-83</b> | 0.01013 | Renamed `tanh ` to `tanh(`


