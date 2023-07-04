| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF34`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `logBASE(`</li></ul> |

# `logBASE(`

## Description
Returns the logarithm of a specifed value determined from a specified base: logBASE(value, base).


<b>Availability</b>: Token available everywhere.

## Syntax
`logBASE(value, base)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

<tr><td><b>base</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>
<hr>

The <tt>logBASE(</tt> command is a visual upgrade to the <tt><a href="/log">log(</a></tt> command to compute logarithms in any base _b_. That is, the command finds the exponent that base _b_ must be raised to obtain the given value.

This command can be used on both the home screen and while programming. If you are using <tt><a href="/classic-mode">CLASSIC</a></tt> mode, the command appears as:

```ti-basic
logBASE(8,2)
            3
```

But in [MATHPRINT](/mathprint-mode) mode, this is improved to:

log<sub>2</sub>(8)  
            3

## Formulas

The log in base _b_ can also be found using the <tt><a href="/ln">ln(</a></tt> or <tt><a href="/log">log(</a></tt> commands. This can be done indirectly using the change-of-base formula:

(1) $`\begin{align} \log_bx = {\ln x \over \ln b} = {\log x \over \log b} \end{align}`$ 

Or directly, using the optional second argument of <tt>log(</tt>:

```ti-basic
logBASE(X,B

can be

log(X,B
```

The <tt>logBASE(</tt> command costs one extra byte compared to <tt>log(</tt>, providing only a visual improvement over its counterpart in <tt>MATHPRINT</tt> mode. The <tt>log(</tt> command is also compatible with older OS's, although its second argument is not. Both <tt>logBASE(</tt> and the second argument of <tt>log(</tt> are disabled in exam mode.

## Error Conditions

*   **[ERR:ARGUMENT](/errors#argument)** when a base is not specified
*   **[ERR:DOMAIN](/errors#domain)** when trying to compute the logarithm of 0
*   **[ERR:NONREAL ANS](/errors#nonrealans)** when trying to compute the logarithm of a negative number in <tt><a href="/real-mode">Real</a></tt> mode

## Related Commands

*   <tt><a href="/log">log(</a></tt>
*   <tt><a href="/ln">ln(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 2.53 | Added |


