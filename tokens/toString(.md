| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF97`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `versChaîne(`</li></ul> |

# `toString(`

## Description
Converts value to a string where `value` can be real, complex, an evaluated expression, list, or matrix.  String `value` displays in classic `format` (0) following the mode setting AUTO/DEC or in decimal `format` (1).

<b>Comment</b>:CE OS 5.2+

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`toString((value[,format])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>value</td><td></td><td>Yes</td></tr>

<tr><td>format</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `E:toString(`, `C:toString(`
<hr>

The <tt>toString(</tt> command, given any value including real numbers, complex numbers, lists, or matrices, returns the string representation of the value of the input.

```ti-basic
toString(1337       //returns "1337"

toString({1,2,3}    //returns "{1,2,3}"

toString([[1,2][3,4]]   //returns "[[1,2][3,4]]"

toString(√-1     //returns imaginary number "i"
```

<tt>toString(</tt> has less limitations than the <tt><a href="/eval">eval(</a></tt> command. It can handle lists, matrices, and complex numbers. Another difference from <tt>eval(</tt> is that <tt>toString(</tt> is affected by display mode changes like <tt><a href="/fix">Fix</a></tt>.

<tt>toString(</tt> replaces the old [number-to-string](/number-to-string) routine previously used prior to OS 5.2.

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown when the input is a string.
*   **[ERR:NONREAL ANSWERS](/errors#nonrealans)** is thrown when the input is a complex number and your calculator is in REAL mode.
*   **[ERR:SYNTAX](/errors#syntax)** is thrown when trying to evaluate a command that doesn't return a value.

## Related Commands

*   <tt><a href="/eval">eval(</a></tt>
*   <tt><a href="/expr">expr(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CE</b> | 5.2.0 | Added |


