| Property      | Value |
|---------------|-------|
| Hex Value     | `$BF`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Misc](<../categories/Catalog.md#Misc>)</li><li>[Keypad](<../categories/Keypad.md>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `e^(`</li></ul> |

# `e^(`

## Description
Returns `e` raised to `power`.


<b>Availability</b>: Token available everywhere.

## Syntax
`e^(power)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>power</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>eˣ</kbd>
<hr>

## Description
Returns a list of `e` raised to a `list` of powers.


<b>Availability</b>: Token available everywhere.

## Syntax
`e^(list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>eˣ</kbd>
<hr>

The <tt><em>e</em>^(</tt> command raises the constant <tt><em><a href="e-value">e</a></em></tt> to a power. Since it's possible to just type out <tt><em>e</em></tt>, ^, and (, the reason for having a separate function isn't immediately obvious but in fact most of the time you need to use <tt><em>e</em></tt>, it's to raise it to a power.

The trigonometric and hyperbolic functions can be expressed, and in fact are usually defined, in terms of <tt><em>e</em>^(</tt>.

<tt><em>e</em>^(</tt> accepts numbers and lists (but unfortunately not matrices) as arguments. It also works, and is often used for, complex numbers (in fact, one of the standard forms of complex numbers on TI-83 series calculators is <tt><a href="re^θ𝑖.md">re^θ𝑖</a></tt>, which uses the <tt><em>e</em>^(</tt> function<tt>)</tt>

```ti-basic
e^(2)
        7.389056099
e^(πi)
        -1
e^({-1,0,1})
        {.3678794412 1 2.718281828}
```

## Formulas

The <tt><em>e</em>^(</tt> is usually defined by an infinite series:

(1) $`\begin{align} e^x=\sum_{n=0}^\infty{\frac{x^n}{n!}} \end{align}`$ 

This is then used to define exponentiation in general (for all real and even complex numbers), rather than using some sort of definition of exponents that involves multiplying a number by itself many times (which only works for integers).

## Related Commands

*   <tt><em><a href="e-value">e</a></em></tt>
*   <tt><a href="ln(.md">ln(</a></tt>
*   <tt><a href="10^(.md">10^(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `e^` added |
| <b>TI-83</b> | 0.01013 | Renamed `e^` to `e^(`


