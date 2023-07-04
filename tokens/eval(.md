| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF98`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `eval(`</li></ul> |

# `eval(`

## Overview
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

## Overview
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

## Description

The <tt>eval(</tt> command, given an expression that evaluates to a real number, returns the string representation of that number.

```ti-basic
eval(1337       //returns "1337"

eval(2.0-3.0    //returns "‾1"

eval(.0001234   //returns "1.234ᴇ‾4"
```

<tt>eval(</tt> has more limitations than the <tt><a href="toString(.md">toString(</a></tt> command. It cannot handle lists, matrices, or complex numbers (even when the imaginary part of the complex number is zero). Another difference from <tt>toString(</tt> is that <tt>eval(</tt> is unaffected by display mode changes like <tt><a href="Fix.md">Fix</a></tt>.

## Advanced Uses

Use <tt>eval(</tt> in conjunction with <tt><a href="expr(.md">expr(</a></tt> to evaluate a real expression in a string and return the answer in a string.

```ti-basic
3.14->X
eval(expr("2X+3
//returns "9.28"
```

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown when the expression contains a list, matrix, imaginary number, or string.
*   **[ERR:SYNTAX](errors#syntax)** is thrown when trying to evaluate a command that doesn't return a value.

## Related Commands

*   [toString(](toString\(.md)
*   [expr(](expr\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Battlesquid, jonbush, lirtosiast, Michael2_3B.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CE</b> | 5.2.0 | Added |


