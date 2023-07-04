| Property      | Value |
|---------------|-------|
| Hex Value     | `$EFA6`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `parmorceaux(`</li></ul> |

# `piecewise(`

## Description
New piecewise function to support entry of functions as they are seen in textbook. This command can be found in » MATH `B:piecewise(`

<b>Comment</b>:CE OS 5.3+

<b>Availability</b>: Token available everywhere.

## Syntax
`piecewise(`

## Location
<tt><kbd><b>math</b></kbd></tt>
<hr>

The <tt>piecewise(</tt> command is a new addition in the release of OS 5.3 for the TI-84 Plus CE. As implied, it allows for the graphing of piecewise functions in the Y= editor. The example code demonstrates how this works from within a program.

```ti-basic
:ClrDraw
:Input "Y1=",Str1
:Input "Y2=",Str2
:Str1→Y1
:Str2→Y2
:FnOff
:"piecewise(Y1,X≥0,Y2,X<0→Y3
:DispGraph
```

## Advanced Uses

One use of the <tt>piecewise(</tt> function is to evaluate an expression for a given value of X. For example:

```ti-basic
:piecewise(X²+2,X≥0
```

This code will return the value of the expression if X≥0. So if X=0, then the program will return a value of 2. If X=3, it will return a value of 11. If X=-5, it will return an error.

## Optimization

This command can simplify and compact the usage of piecewise expressions in programs. If you have less than 6 conditions that will never overlap, and they all affect a single variable, you can use the <tt>piecewise(</tt> command to make your code smaller, as shown below. Beware of comparability, though.

```ti-basic
:If X<2
:Then
:4.5X→N
:Else
:8X+3→N
:End
can be
:piecewise(4.5X,X<2,8X+3,X≥2→N
```

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** is thrown if expressions are not defined.
*   **[ERR:DATA TYPE](errors#data-type)** is thrown if a quotation mark is not placed before a piecewise command that is to be stored to an equation variable.

## See Also

*   [Technique: Piecewise Expressions](Technique: Piecewise Expressions.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Battlesquid, iPhoenixOnTIBD, kg583, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CE</b> | 5.3.0 | Added |


