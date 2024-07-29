| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB2A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [E](<../categories/Catalog.md#E>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `expr(`</li></ul> |

# `expr(`

## Overview
Converts the character string contained in `string` to an expression and executes the expression. `string` can be a string or a string variable.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`expr(string)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>string</b></td><td>string</td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>
<hr>

## Description

The <tt>expr(</tt> command is used to evaluate an expression that's stored in a string (an expression is merely anything that returns a value - of any type). Expressions are occasionally stored to strings, rather than evaluated outright, so that their value has the capacity to change when the variables stored inside them change. The <tt>expr(</tt> command's result depends on the kind of expression that's in the string you pass it — it may return a number, a list, a matrix, or even another string.

As a special case of an expression, the <tt>expr(</tt> command can also be used to convert a string like <tt>"123"</tt> to the number <tt>123</tt>. Going in the reverse direction (<tt>123</tt> to <tt>"123"</tt>) is [more complicated](number-to-string).

The <tt>expr(</tt> command has limitations. Here are the situations in which <tt>expr(</tt> will not work:

*   When the code in the string does not return an answer, and thus is not an expression: e.g. <tt>expr("Line(0,0,1,1"</tt> or <tt>expr("prgmHELLO"</tt> is invalid

*   When the expression in the string contains an <tt>expr(</tt> command itself, e.g. <tt>expr("expr(Str1"</tt> — this will throw an [ERR:ILLEGAL NEST](errors#illegalnest) error.

*   In place of a variable (rather than an expression), e.g. <tt>5→expr("X"</tt> isn't a substitute for <tt>5→X</tt> because <tt>expr("X"</tt> evaluates to the value of <tt>X</tt> and not to <tt>X</tt> itself.

## Advanced Usage with Lists

<tt>expr(</tt> is often used in conjunction with the <tt><a href="Input.md">Input</a></tt> command to prompt the user to enter a list. Although the <tt>Input</tt> command can already handle lists, it requires the user to enter the opening bracket that signifies a list. With <tt>expr(</tt>, this can be avoided.

If you want the user to enter a list separated by commas, instead of:

```ti-basic
Input L₁
```

Use this:

```ti-basic
Input Str1
expr("{"+Str1→L₁
```

This will automatically put the curly bracket in so the user does not have to.

Just be aware that you _cannot_ access individual list items directly after the <tt>expr()</tt> function, unlike how you can with <tt><a href="Ans.md">Ans</a></tt>. The following code will _multiply_ the entire list by 2 rather than return the second item:

```ti-basic
expr("{1,2}")(2)
```

Instead, to access the second item in the list you could split this across two lines and use <tt>Ans</tt>:

```ti-basic
expr("{1,2}")
Ans(2)
```

## Optimization

Evaluating an expression inside a string is more complicated than evaluating a normal expression; you should therefore try to take as much out of an <tt>expr(</tt> statement as possible to speed up your code. For example:

```ti-basic
expr("sum({"+Str1
```

can be:

```ti-basic
sum(expr("{"+Str1
```

## Error Conditions

*   **[ERR:ILLEGAL NEST](errors#illegalnest)** is thrown when the string to be evaluated contains an expr( itself.
*   **[ERR:INVALID](errors#invalid)** is thrown when trying to evaluate the empty string.
*   **[ERR:SYNTAX](errors#syntax)** is thrown when trying to evaluate a command that doesn't return a value.

## Related Commands

*   [sub(](sub\(.md)
*   [inString(](inString\(.md)
*   [length(](length\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


