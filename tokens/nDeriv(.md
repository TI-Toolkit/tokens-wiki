| Property      | Value |
|---------------|-------|
| Hex Value     | `$25`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [N](<../categories/Catalog.md#N>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `nDeriv(`</li></ul> |

# `nDeriv(`

## Description
When command is used in Classic mode, returns approximate numerical derivative of `expression` with respect to `variable` at `value`, with specific tolerance ε.
In MathPrint mode, numeric derivative template pastes and uses default tolerance ε.


<b>Availability</b>: Token available everywhere.

## Syntax
`nDeriv(expression,variable,value[,ε])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td></td></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

<tr><td>ε</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `MATH`, `8:nDeriv(`
<hr>

<tt>nDeriv(f(var),var,value[,h])</tt> computes an approximation to the value of the derivative of _f_(_var_) with respect to _var_ at _var_=_value_. _h_ is the step size used in the approximation of the derivative. The default value of _h_ is 0.001.

<tt>nDeriv(</tt> only works for real numbers and expressions. <tt>nDeriv(</tt> can be used only once inside another instance of <tt>nDeriv(</tt>.

```ti-basic
π→X
     3.141592654
nDeriv(sin(T),T,X)
     -.9999998333
nDeriv(sin(T),T,X,(abs(X)+E⁻6)E⁻6)
     -1.000000015
nDeriv(nDeriv(cos(U),U,T),T,X)
     .999999665
```

## Advanced

If the default setting for _h_ doesn't produce a good enough result, it can be difficult to choose a correct substitute. Although larger values of _h_ naturally produce a larger margin of error, it's not always helpful to make _h_ very small. If the difference between _f(x+h)_ and _f(x-h)_ is much smaller than the actual values of _f(x+h)_ or _f(x-h)_, then it will only be recorded in the last few significant digits, and therefore be imprecise.

A suitable compromise is to choose a tolerance _h_ that's based on X. As suggested [here](http://www.unitedti.org/index.php?act=ST&f=54&t=4367&hl=&view=findpost&p=68526), <tt>(abs(X)+]E⁻6)E⁻6</tt> is a reasonably good value that often gives better results than the default.

## Formula

The exact formula that the calculator uses to evaluate this function is:

(1) $`\begin{align} \texttt{nDeriv}(f(t),t,x,h)=\frac{f(x+h)-f(x-h)}{2h} \end{align}`$ 

This formula is known as the [symmetric derivative](https://en.wikipedia.org/wiki/Symmetric_derivative), and using it generally increases the accuracy of the calculation. However, in a few instances it can give erroneous answers. One case where it gives false answers is with the function,

(2) $`\begin{align} f(x) = \dfrac{1}{x^2} \bigg\vert_{x=0} \end{align}`$ 

This derivative is undefined when calculated algebraically, but due to the method of calculation, the derivative given by <tt>nDeriv(</tt> is zero. These problems can be avoided by ensuring that a function's derivative is defined at the point of interest.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown if _h_ is 0 (since this would yield division by 0 in the formula)
*   **[ERR:ILLEGAL NEST](errors#illegalnest)** is thrown if <tt>nDeriv(</tt> commands are nested more than one level deep. Just having one <tt>nDeriv(</tt> command inside another is okay, though.

## Related Commands

*   <tt><a href="fMin(.md">fMin(</a></tt>
*   <tt><a href="fMax(.md">fMax(</a></tt>
*   <tt><a href="fnInt(.md">fnInt(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, Deoxal, GoVegan, kg583, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


