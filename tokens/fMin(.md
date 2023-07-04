| Property      | Value |
|---------------|-------|
| Hex Value     | `$27`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `fMin(`</li></ul> |

# `fMin(`

## Overview
Returns the value of `variable` where the local minimum of `expression` occurs, between `lower` and `upper`, with specified `tolerance`.


<b>Availability</b>: Token available everywhere.

## Syntax
`fMin(expression,variable,lower,upper[,tolerance])`

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
<tt><kbd><b>math</b></kbd></tt>, `MATH`, `6:fMin(`
<hr>

## Description

<tt>fMin(<em>f</em>(<em>var</em>),<em>var</em>,<em>lo</em>,<em>hi</em>[,<em>tol</em>])</tt> finds the value of _var_ between _lo_ and _hi_ at which the minimum of _f_(_var_) occurs. _tol_ controls the accuracy of the minimum value computed. The default value of _tol_ is 10<sup>-5</sup>.

<tt>fMin(</tt> only works for real numbers and expressions. Brent's method for optimization is used for approximating the minimum value.

```ti-basic
fMin(cos(sin(X)+Xcos(X)),X,0,2)
        1.076873875
```

Keep in mind that the result is the value of _var_, and not the value of _f(var)_. In this example, 1.076873875 is not the lowest possible value of cos(sin(X)+Xcos(X)), but rather the X-value at which cos(sin(X)+Xcos(X)) is the lowest.

## Advanced Uses

<tt>fMin(</tt> is sometimes useful in finding so-called "multiple roots" of a function. If the graph of your function appears "flat" near the root, <tt>fMin(</tt> might be able to find the value of the root more accurately than <tt><a href="solve(.md">solve(</a></tt>.

## Error Conditions

*   **[ERR:BOUND](errors#bound)** is thrown if the lower bound is greater than the upper bound.
*   **[ERR:DOMAIN](errors#domain)** is thrown if _tol_ is 0.
*   **[ERR:TOL NOT MET](errors#tolnotmet)** is thrown if the tolerance is too small for this specific function.

## Related Commands

*   <tt><a href="fMax(.md">fMax(</a></tt>
*   <tt><a href="fnInt(.md">fnInt(</a></tt>
*   <tt><a href="nDeriv(.md">nDeriv(</a></tt>
*   <tt><a href="solve(.md">solve(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: alexrudd, burr, DarkerLine, GoVegan, kg583, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


