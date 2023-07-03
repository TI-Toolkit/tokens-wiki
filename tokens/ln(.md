| Property      | Value |
|---------------|-------|
| Hex Value     | `$BE`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Keypad](<../categories/Keypad.md>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ln(`</li></ul> |

# `ln(`

## Description
Returns the natural logarithm of a real or complex number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`ln(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>ln</b></kbd></tt>
<hr>

The ln( command computes the natural logarithm of a value — the exponent to which the constant _[e](/e-value)_ must be raised, to get that value. This makes it the inverse of the _[e^(](/e-exponent)_ command.

ln( is a real number for all positive real values. For negative numbers, ln( is an imaginary number (so taking ln( of a negative number will cause [ERR:NONREAL ANS](/errors#nonrealans) to be thrown in [Real](/real-mode) mode), and of course it's a complex number for complex values. ln( is not defined at 0, even if you're in a complex mode.

## Advanced Uses

Using either the ln( or the [log(](/log) command, logarithms of any base can be calculated, using the identity:

(1) $`\begin{align} \log_b{x} = \frac{\ln{x}}{\ln{b}} = \frac{\log{x}}{\log{b}} \end{align}`$ 

So, to take the base B log of a number X, you could use either of the following equivalent ways:

```ti-basic
:log(X)/log(B)
```

```ti-basic
:ln(X)/ln(B)
```

This is the exponent to which B must be raised, to get X.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** when calculating ln(0).
*   **[ERR:NONREAL ANS](/errors#nonrealans)** if taking ln( of a negative number in [Real](/real-mode) mode.

## Related Commands

*   _[e](/e-value)_
*   _[e^(](/e-exponent)_
*   [log(](/log)
*   [logBASE(](/logbase)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `ln ` added |
| <b>TI-83</b> | 0.01013 | Renamed `ln ` to `ln(`


