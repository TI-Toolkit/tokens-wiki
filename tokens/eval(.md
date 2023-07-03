| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF98`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `eval(`</li></ul> |

# `eval(`

## Description
Returns an evaluated expression as a string with 8 significant digits.  The expression must be real.

<b>Comment</b>:CE OS 5.2+

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`eval(expression)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `C:eval(`
<hr>

## Description
Returns an evaluated expression as a string with 8 significant digits.  The expression must simplify to a real expression.

<b>Comment</b>:CE OS 5.2+

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`eval(expression)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `6:eval(`
## Special Category
TI-Innovator™ Hub

<hr>

The `eval(` command, given an expression that evaluates to a real number, returns the string representation of that number.

```ti-basic
eval(1337       //returns "1337"

eval(2.0-3.0    //returns "‾1"

eval(.0001234   //returns "1.234ᴇ‾4"
```

`eval(` has more limitations than the [toString(](/tostring) command. It cannot handle lists, matrices, or complex numbers (even when the imaginary part of the complex number is zero). Another difference from `toString(` is that `eval(` is unaffected by display mode changes like [Fix](/fix).

## Advanced Uses

Use `eval(` in conjunction with [expr(](/expr) to evaluate a real expression in a string and return the answer in a string.

```ti-basic
3.14->X
eval(expr("2X+3
//returns "9.28"
```

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown when the expression contains a list, matrix, imaginary number, or string.
*   **[ERR:SYNTAX](/errors#syntax)** is thrown when trying to evaluate a command that doesn't return a value.

## Related Commands

*   [toString(](/tostring)
*   [expr(](/expr)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CE</b> | 5.2.0 | Added |


