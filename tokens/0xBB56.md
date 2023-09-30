| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB56`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Chaine►Equ(`</li></ul> |

# `String►Equ(`

## Overview
Converts `string` into an equation and stores it in `Y= var`.
string can be a string or string variable.
String►Equ( is the inverse of Equ►String(.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`String►Equ(string,Y= var)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>string</b></td><td>string</td><td></td></tr>

<tr><td><b>var</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `D:String>Equ(`, `F:String>Equ(`
<hr>

## Description

This command stores the contents of a string to an equation variable (such as Y<sub>1</sub> or X<sub>1T</sub>). This command can, in theory, be used whenever you need to set any equation variable.

In practice, however, this command is useless. This is because the [→](store) (store) operation can be used for the same purpose:

```ti-basic
:String►Equ(Str1,Y1
can be
:Str1→Y1
```

This replacement is universal, takes the same time to run (because it actually uses the same routines), is more convenient to type since you don't have to go through the command catalog, and is two bytes smaller.

## Advanced

Unlike any normal use of the → (store) operation, this situation is different because it doesn't modify [Ans](Ans.md). For example:

```ti-basic
:125
:"sin(X→Y1
:Disp Ans
```

  
Because this use of → does not modify Ans, '125' will be displayed rather than 'sin(X'. However, if we were to replace Y1 with Str1, then the → operation would work normally, and 'sin(X' would be displayed.

It's also important to realize the difference between the String►Equ( command and the related Equ►String(, aside from the fact that the latter is actually useful. The main difference is that while Equ►String('s arguments both have to be **variables**, String►Equ('s first argument can either be a variable (Str0 through Str9), a constant string (e.g., "sin(X)"), or an expression that returns a string (e.g., sub(Str1,1,5)). This applies to the → operation as well.

## Related Commands

*   [Equ►String(](Equ►String\(.md)
*   [expr(](expr\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Myles_Zadok, Timtech.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


