| Property      | Value |
|---------------|-------|
| Hex Value     | `$24`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `fnInt(`</li></ul> |

# `fnInt(`

## Description
Returns the function integral of `expression` with respect to `variable`, between `lower` and `upper`, with specified `tolerance`.


<b>Availability</b>: Token available everywhere.

## Syntax
`fnInt(expression,variable,lower,upper[,tolerance])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td></td></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

<tr><td><b>lower</b></td><td></td><td></td></tr>

<tr><td><b>upper</b></td><td></td><td></td></tr>

<tr><td>tolerance</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `MATH`, `9:fnInt(`
<hr>

`fnInt(` computes an approximation to the definite integral of _f_ with respect to _var_ from _a_ to _b_. _tol_ controls the accuracy of the integral computed. The default value of _tol_ is 10<sup>-5</sup>. fnInt( returns exact results for functions that are polynomials of small degree.

`fnInt(` only works for real numbers and expressions. The [Gauss-Kronrod method](https://mathworld.wolfram.com/Gauss-KronrodQuadrature.html) is used for approximating the integral.

**Tip**: Sometimes, to get an answer of acceptable accuracy out of `fnInt(`, substitution of variables and analytic manipulation may be needed.

```ti-basic
fnInt(1/X,X,1,2)
        .6931471806
fnInt(ln(X),X,0,1) <a difficult example>
        -.999998347
fnInt(ln(X),X,0,1,e-11)
        -1
```

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if _tol_ is 0.
*   **[ERR:ILLEGAL NEST](/errors#illegalnest)** is thrown if `fnInt(` occurs in the expression to be integrated.
*   **[ERR:TOL NOT MET](/errors#tolnotmet)** may occur if the tolerance is too small.

## Related Commands

*   [fMin(](/fmin)
*   [fMax(](/fmax)
*   [nDeriv(](/nderiv)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


