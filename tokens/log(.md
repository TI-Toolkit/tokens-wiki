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

The `log(` command computes the base 10 logarithm of a value — the exponent to which 10 must be raised, to get that value. This makes it the inverse of the [10^(](/ten-exponent) command.

`log(` is a real number for all positive real values. For negative numbers, `log(` is an imaginary number (so taking log( of a negative number will cause [ERR:NONREAL ANS](/errors#nonrealans) to be thrown in [Real](/real-mode) mode), and of course it's a complex number for complex values. log( is not defined at 0, even if you're in a complex mode.

## Advanced Uses

Using either the [ln(](/ln) or the `log(` command, logarithms of any base can be calculated, using the identity:

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

This form is functionally identical to the [logBASE](/logbase) command with the same arguments available with the same OS, but unlike its counterpart does not have any special visual rendering when in `MATHPRINT` mode. Both `logBASE` and the second argument of `log(` are disabled in exam mode.

The base 10 logarithm specifically can also be used to calculate the number of digits a whole number has:

```ti-basic
:1+int(log(N))
```

This will return the number of digits `N` has, if `N` is a whole number. If `N` is a decimal, it will ignore the decimal digits of `N`.

## Error Conditions

*   **[ERR:ARGUMENT](/errors#argument)** when attempting to use the second argument of `log(` in exam mode.
*   **[ERR:DOMAIN](/errors#domain)** when calculating `log(0)`.
*   **[ERR:NONREAL ANS](/errors#nonrealans)** if taking `log(` of a negative number in [Real](/real-mode) mode.

## Related Commands

*   [10^(](/ten-exponent)
*   [ln(](/ln)
*   [logBASE(](/logbase)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `log ` added |
| <b>TI-83</b> | 0.01013 | Renamed `log ` to `log(`


