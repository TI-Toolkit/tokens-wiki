| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB55`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [E](<../categories/Catalog.md#E>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Equ►Chaine(`</li></ul> |

# `Equ►String(`

## Description
Converts the contents of a `Y= var` to a string and stores it in `Str``n`


<b>Availability</b>: Token available everywhere.

## Syntax
`Equ►String(Y= var,Strn)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>var</b></td><td></td><td></td></tr>

<tr><td><b>n</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `Equ►String(`
<hr>

This command stores the contents of an equation variable (such as Y<sub>1</sub> or X<sub>1T</sub>) to a string (one of Str0, Str1, … Str9). This can be used when you want to display the equation as text (either using the [Text(](/text) command on the graph screen, or the [Output(](/output) or [Disp](/disp) commands on the home screen). For example:

```ti-basic
:Equ►String(Y1,Str1
:Text(0,0,"Y1(X)=",Str1
```

Apart from cases in which the user has already stored to the equation variable prior to running the program, about the only situation in which you would use `Equ►String(` is for the output of a [regression](/regression-models).

## Advanced

You can use `Equ►String(` (outside a program) to get the [→](/store) or " symbols in a string:

1.  Type them on the home screen and press [ENTER]
2.  Select 2:Quit when the **[ERR:SYNTAX](/errors#syntax)** comes up.
3.  Press [Y=] to go to the equation editor.
4.  Press [2nd] [ENTRY] to recall the symbols to Y<sub>1</sub>
5.  Now, use `Equ►String(`Y<sub>1</sub>,Str1`)` to store the symbols to a string.

## Related Commands

*   [String►Equ(](/string-equ)
*   [expr(](/expr)

## See Also

*   [Number to String](/number-to-string)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


