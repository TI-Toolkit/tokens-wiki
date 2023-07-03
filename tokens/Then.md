| Property      | Value |
|---------------|-------|
| Hex Value     | `$CF`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Then`</li></ul> |

# `Then`

## Description



<b>Availability</b>: Token available everywhere.

## Syntax
`ThenSee If:Then`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>See</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<kbd>Then</kbd>
<hr>

The `If` command is crucial to most programs. It allows you to execute code if and only if an expression is not equal to zero. Advanced uses of the `If` command allow you to execute a different block of code if the check turns out to be false. The simplest form of the command is quite easy to understand:

```ti-basic
:If (condition)
:statement
```

When the calculator gets to that point in your program, it will check to see if the condition is nonzero. Most expressions you will use with `If` are called _conditional expressions_; that is, they return 1 if the condition is true and 0 if it is false. Examples include `2+2=4`, `A=5`, and `pxl-Test(R,C)`. Therefore, when the condition is true, the expression evaluates to 1 and the statement is run. When the condition is false, the expression evaluates to 0, and the statement is skipped.

## Using Then, Else, and End

When you want more than one line of code to depend on the same condition, use an `If`-`Then` block.

```ti-basic
:If (condition)
:Then
code to execute if true
:End
```

An `If`-`Then` block also has an optional `Else` clause, which is used to execute different code when the condition is false.

```ti-basic
:If (condition)
:Then
code to execute if true
:Else
code to execute if false
:End
```

## Advanced Uses

If statements can execute and skip other `If` statements. This leads to odd yet effective constructs like these:

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

Each time the program enters an `If-Then` block, the calculator uses 35+(size of the condition) bytes of memory to keep track of the block. This memory is given back to you as soon as the program reaches an [End](/end) statement. This isn't really a problem unless you're low on RAM, or have a lot of nested If-Then statements. However, if you use [Goto](/goto) to jump out of such a statement, you lose those bytes for as long as the program is running — and if you keep doing this, you might easily run out of memory, resulting in [ERR:MEMORY](/errors#memory).

## Optimization

As far as the TI-BASIC interpreter is concerned, a value of 0 is false, and any other value is true. We can use a numerical expression rather than a conditional one in the condition of the `If` statement in a case like the following:

```ti-basic
:If A≠0
:Disp "A IS NOT 0

can be
:If A
:Disp "A IS NOT 0
```

When code in a single-line `If` statement simply changes a variable, it can often be replaced with an equivalent [piecewise expression](/piecewise-expression), which will be smaller and faster.

```ti-basic
:If A=B
:C+2→C

can be
:C+2(A=B→C
```

## Code Timings

Single-line `If` statements are greatly slowed when they are the first line in [For(](/for) loops without a closing parenthesis. For example,

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

*   **[ERR:DATA TYPE](/errors#datatype)** occurs if the parameter is complex, even if it's complex in a silly way like 0i.
*   **[ERR:INVALID](/errors#invalid)** occurs if this statement is used outside a program.
*   **[ERR:SYNTAX](/errors#syntax)** occurs if an If is the last statement in the program, or the last except for one empty line.

## Related Commands

*   [For(](/for)
*   [While](/while)
*   [Repeat](/repeat)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


