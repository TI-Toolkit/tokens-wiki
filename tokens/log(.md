| Property      | Value |
|---------------|-------|
| Hex Value     | `$C0`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Keypad](<../categories/Keypad.md>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `log(`</li></ul> |

# `log(`

## Description
Returns logarithm of a real or complex number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`log(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>log</b></kbd></tt>
<hr>

The <tt>log(</tt> command computes the base 10 logarithm of a value — the exponent to which 10 must be raised, to get that value. This makes it the inverse of the <tt><a href="10^(.md">10^(</a></tt> command.

<tt>log(</tt> is a real number for all positive real values. For negative numbers, <tt>log(</tt> is an imaginary number (so taking log( of a negative number will cause [ERR:NONREAL ANS](errors#nonrealans) to be thrown in <tt><a href="Real.md">Real</a></tt> mode), and of course it's a complex number for complex values. log( is not defined at 0, even if you're in a complex mode.

## Advanced Uses

Using either the <tt><a href="ln(.md">ln(</a></tt> or the <tt>log(</tt> command, logarithms of any base can be calculated, using the identity:

(1) $`\begin{align} \log_b{x} = \frac{\ln{x}}{\ln{b}} = \frac{\log{x}}{\log{b}} \end{align}`$ 

So, to take the base B log of a number X, you could use either of the following equivalent ways:

```ti-basic
:log(X)/log(B)
```

```ti-basic
:ln(X)/ln(B)
```

This is the exponent to which B must be raised, to get X. If using OS 2.53 MP or higher, this formula can be circumvented entirely with an optional second argument:

```ti-basic
:log(X,B)
```

This form is functionally identical to the <tt><a href="logBASE.md">logBASE</a></tt> command with the same arguments available with the same OS, but unlike its counterpart does not have any special visual rendering when in <tt>MATHPRINT</tt> mode. Both <tt>logBASE</tt> and the second argument of <tt>log(</tt> are disabled in exam mode.

The base 10 logarithm specifically can also be used to calculate the number of digits a whole number has:

```ti-basic
:1+int(log(N))
```

This will return the number of digits <tt>N</tt> has, if <tt>N</tt> is a whole number. If <tt>N</tt> is a decimal, it will ignore the decimal digits of <tt>N</tt>.

## Error Conditions

*   **[ERR:ARGUMENT](errors#argument)** when attempting to use the second argument of <tt>log(</tt> in exam mode.
*   **[ERR:DOMAIN](errors#domain)** when calculating <tt>log(0)</tt>.
*   **[ERR:NONREAL ANS](errors#nonrealans)** if taking <tt>log(</tt> of a negative number in <tt><a href="Real.md">Real</a></tt> mode.

## Related Commands

*   <tt><a href="10^(.md">10^(</a></tt>
*   <tt><a href="ln(.md">ln(</a></tt>
*   <tt><a href="logBASE(.md">logBASE(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, Deflect, GoVegan, kg583, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `log ` added |
| <b>TI-83</b> | 0.01013 | Renamed `log ` to `log(`


