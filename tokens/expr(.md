| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB2A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [E](<../categories/Catalog.md#E>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `expr(`</li></ul> |

# `expr(`

## Description
Converts the character string contained in `string` to an expression and executes the expression. `string` can be a string or a string variable.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`expr(string)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>string</b></td><td>string</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>
<hr>

The expr( command is used to evaluate an expression that's stored in a string (an expression is merely anything that returns a value - of any type). Expressions are occasionally stored to strings, rather than evaluated outright, so that their value has the capacity to change when the variables stored inside them change. The expr( command's result depends on the kind of expression that's in the string you pass it — it may return a number, a list, a matrix, or even another string.

As a special case of an expression, the expr( command can also be used to convert a string like "123" to the number 123. Going in the reverse direction (123 to "123") is [more complicated](/number-to-string).

The expr( command has limitations. Here are the situations in which expr( will not work:

*   When the code in the string does not return an answer, and thus is not an expression: e.g. expr("Line(0,0,1,1" or expr("prgmHELLO" is invalid
*   When the expression in the string contains an expr( command itself, e.g. expr("expr(Str1" — this will throw an [ERR:ILLEGAL NEST](/errors#illegalnest) error.
*   In place of a variable (rather than an expression), e.g. 5→expr("X" isn't a substitute for 5→X because expr("X" evaluates to the value of X and not to X itself.

## Advanced Uses

expr( is often used in conjunction with the [Input](/input) command to prompt the user to enter a list. Although the Input command can already handle lists, it requires the user to enter the opening bracket that signifies a list. With expr(, this can be avoided.

Instead of:

```ti-basic
:Input L1
```

  
Use this:

```ti-basic
:Input Str1
:expr("{"+Str1→L1
```

## Optimization

Evaluating an expression inside a string is more complicated than evaluating a normal expression; you should therefore try to take as much out of an expr( statement as possible to speed up your code. For example:

```ti-basic
:expr("sum({"+Str1
can be
:sum(expr("{"+Str1
```

## Error Conditions

*   **[ERR:ILLEGAL NEST](/errors#illegalnest)** is thrown when the string to be evaluated contains an expr( itself.
*   **[ERR:INVALID](/errors#invalid)** is thrown when trying to evaluate the empty string.
*   **[ERR:SYNTAX](/errors#syntax)** is thrown when trying to evaluate a command that doesn't return a value.

## Related Commands

*   [sub(](/sub)
*   [inString(](/instring)
*   [length(](/length)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


