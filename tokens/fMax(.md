| Property      | Value |
|---------------|-------|
| Hex Value     | `$28`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `fMax(`</li></ul> |

# `fMax(`

## Description
Returns the value of `variable` where the local maximum of `expression` occurs, between `lower` and `upper`,with specified `tolerance`.


<b>Availability</b>: Token available everywhere.

## Syntax
`fMax(expression,variable,lower,upper[,tolerance])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td>Yes</td></tr>

<tr><td><b>variable</b></td><td></td><td>Yes</td></tr>

<tr><td><b>lower</b></td><td></td><td>Yes</td></tr>

<tr><td><b>upper</b></td><td></td><td>Yes</td></tr>

<tr><td>tolerance</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `MATH`, `7:fMax(`
<hr>

`fMax(` finds the value of _var_ between _lo_ and _hi_ at which the maximum of _f_(_var_) occurs. _tol_ controls the accuracy of the maximum value computed. The default value of _tol_ is 10<sup>-5</sup>.

`fMax(` only works for real numbers and expressions. Brent's method for optimization is used for approximating the maximum value.

```ti-basic
fMax(sin(X)cos(X),X,0,3)
        .7853995667
```

Keep in mind that the result is the value of _var_, and not the value of _f(var)_. In this example, .7853995667 is not the highest possible value of sin(X)cos(X), but rather the X-value at which sin(X)cos(X) is the highest.

## Error Conditions

*   **[ERR:BOUND](/errors#bound)** is thrown if the lower bound is greater than the upper bound.
*   **[ERR:DOMAIN](/errors#domain)** is thrown if _tol_ is 0.
*   **[ERR:TOL NOT MET](/errors#tolnotmet)** is thrown if the tolerance is too small for this specific function.

## Related Commands

*   [fMin(](/fmin)
*   [fnInt(](/fnint)
*   [nDeriv(](/nderiv)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


