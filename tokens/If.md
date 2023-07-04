| Property      | Value |
|---------------|-------|
| Hex Value     | `$CE`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `If `</li></ul> |

# `If `

## Description
If `condition` = 0 (false), skips `commandA`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`If condition:commandA:commands`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>condition</b></td><td></td><td></td></tr>

<tr><td><b>commandA</b></td><td></td><td></td></tr>

<tr><td><b>commands</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `1:If`
<hr>

# `If Then End`

## Description
Executes `commands` from `Then` to `End` if `condition` = 1 (true).


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`If:conditionThen:commandsEnd:commands`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>:</b></td><td></td><td></td></tr>

<tr><td><b>condition</b></td><td></td><td></td></tr>

<tr><td><b>commands</b></td><td></td><td></td></tr>

<tr><td><b>commands</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `2:Then`
<hr>

# `If Then Else End`

## Description
Executes `commands` from `Then` to `Else` if `condition` = 1 (true); from `Else` to `End` if `condition` = 0 (false).


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`If:conditionThen:commandsElse:commandsEnd:commands`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>condition</b></td><td></td><td></td></tr>

<tr><td><b>commands</b></td><td></td><td></td></tr>

<tr><td><b>commands</b></td><td></td><td></td></tr>

<tr><td><b>commands</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `3:Else`
<hr>

The <tt>If</tt> command is crucial to most programs. It allows you to execute code if and only if an expression is not equal to zero. Advanced uses of the <tt>If</tt> command allow you to execute a different block of code if the check turns out to be false. The simplest form of the command is quite easy to understand:

```ti-basic
:If (condition)
:statement
```

When the calculator gets to that point in your program, it will check to see if the condition is nonzero. Most expressions you will use with <tt>If</tt> are called _conditional expressions_; that is, they return 1 if the condition is true and 0 if it is false. Examples include <tt>2+2=4</tt>, <tt>A=5</tt>, and <tt>pxl-Test(R,C)</tt>. Therefore, when the condition is true, the expression evaluates to 1 and the statement is run. When the condition is false, the expression evaluates to 0, and the statement is skipped.

## Using Then, Else, and End

When you want more than one line of code to depend on the same condition, use an <tt>If</tt>-<tt>Then</tt> block.

```ti-basic
:If (condition)
:Then
code to execute if true
:End
```

An <tt>If</tt>-<tt>Then</tt> block also has an optional <tt>Else</tt> clause, which is used to execute different code when the condition is false.

```ti-basic
:If (condition)
:Then
code to execute if true
:Else
code to execute if false
:End
```

## Advanced Uses

If statements can execute and skip other <tt>If</tt> statements. This leads to odd yet effective constructs like these:

```ti-basic
:If A
:If B
//Executes if A is false or B is true
```

```ti-basic
If A:Then
//Executes if A is true
If B:Else
//Executes if A is false or B is false
End
```

## Memory Leaks

Each time the program enters an <tt>If-Then</tt> block, the calculator uses 35+(size of the condition) bytes of memory to keep track of the block. This memory is given back to you as soon as the program reaches an <tt><a href="End.md">End</a></tt> statement. This isn't really a problem unless you're low on RAM, or have a lot of nested If-Then statements. However, if you use <tt><a href="Goto.md">Goto</a></tt> to jump out of such a statement, you lose those bytes for as long as the program is running — and if you keep doing this, you might easily run out of memory, resulting in [ERR:MEMORY](errors#memory).

## Optimization

As far as the TI-BASIC interpreter is concerned, a value of 0 is false, and any other value is true. We can use a numerical expression rather than a conditional one in the condition of the <tt>If</tt> statement in a case like the following:

```ti-basic
:If A≠0
:Disp "A IS NOT 0

can be
:If A
:Disp "A IS NOT 0
```

When code in a single-line <tt>If</tt> statement simply changes a variable, it can often be replaced with an equivalent [piecewise expression](piecewise-expression), which will be smaller and faster.

```ti-basic
:If A=B
:C+2→C

can be
:C+2(A=B→C
```

## Code Timings

Single-line <tt>If</tt> statements are greatly slowed when they are the first line in <tt><a href="For(.md">For(</a></tt> loops without a closing parenthesis. For example,

```ti-basic
Very slow
:For(I,1,2000
:If 0:
:End

19 times faster (!)
:For(I,1,2000)
:If 0:
:End
```

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** occurs if the parameter is complex, even if it's complex in a silly way like 0i.
*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.
*   **[ERR:SYNTAX](errors#syntax)** occurs if an If is the last statement in the program, or the last except for one empty line.

## Related Commands

*   <tt><a href="For(.md">For(</a></tt>
*   <tt><a href="While.md">While</a></tt>
*   <tt><a href="Repeat.md">Repeat</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, CloudVariable, DarkerLine, GoVegan, kg583, lirtosiast, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


