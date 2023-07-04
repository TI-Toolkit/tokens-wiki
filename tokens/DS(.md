| Property      | Value |
|---------------|-------|
| Hex Value     | `$DB`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `DS<(`</li></ul> |

# `DS<(`

## Description
Decrements `variable` by 1; skips `commandA` if `variable `< `value`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`DS<(variable,value):commandA:commands`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

<tr><td><b>commandA</b></td><td></td><td></td></tr>

<tr><td><b>commands</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `B:DS<(`
<hr>

The decrement and skip if less than command — <tt>DS&lt;(</tt> — is a specialized conditional command. It is equivalent to an <tt><a href="If.md">If</a></tt> conditional, except the next command will be skipped when the condition is true and it has a [variable](variables) update built-in. However, it is not used very often (if anything, it is often misused as a looping command) because of its obscure name and somewhat limited application.

The <tt>DS&lt;(</tt> command takes two arguments:

*   A variable, which is limited only to one of the [real variables](variables#toc1) (<tt>A</tt>-<tt>Z</tt> or <tt>θ</tt>).
*   A value, which can be any expression which evaluates to a real number.

When <tt>DS&lt;(</tt> is executed it subtracts one from the variable (decrements it by one), and compares it to the value. The next command will be skipped if the variable is less than the value, while the next command will be executed if the variable is greater than or equal to the value.

The command <tt>DS&lt;(A,B</tt> is equivalent to the following code:

```ti-basic
:A-1→A
:If A≥B
```

Here are the two main cases where the <tt>DS&lt;(</tt> command is used:

```ti-basic
:5→A
:DS<(A,6
:Disp "Skipped
```

*   Initializes <tt>A</tt> to 5 and then compares to the value
*   5<6 is true so the display message won't be displayed

```ti-basic
:3→B
:DS<(B,2
:Disp "Not Skipped
```

*   Initializes <tt>B</tt> to 3 and then compares to the value
*   3<2 is false so the display message will be displayed

Note: In addition to both of these cases, there is also the case where the variable and the value are equal to each other. This case is shown below under the 'Advanced Uses' section because it has some added background that goes with it.

## Advanced Uses

When you want the skipping feature of the <tt>DS&lt;(</tt> command to always occur, you just have to use the same variable for both the variable and value arguments of the command:

```ti-basic
:DS<(B,B
```

An undefined error will occur if the variable and/or value doesn't exist before the <tt>DS&lt;(</tt> command is used, which happens when the <tt><a href="DelVar.md">DelVar</a></tt> command is used. Consequently, you should not use <tt>DelVar</tt> with <tt>DS&lt;(</tt>.

A similar code can be used as a substitute for <tt>B-1→B</tt> if you don't want to change <tt><a href="Ans.md">Ans</a></tt>:

```ti-basic
:DS<(B,B:
```

  
Note that due to the colon after the line, there will be no statement skipped, so you don't have to worry about that.

## Optimization

If a program needs to decrement a positive variable, <tt>DS&lt;(</tt> is one byte smaller than than decrementing a variable normally.

```ti-basic
:A-1→A
can be
:DS<(A,0
```

The one caution about this is that if the variable is less than the value (in this case, '0'), the next command will be skipped. If you don't want the skipping functionality, then it is necessary to make sure that the value is never greater than the variable. Also, <tt>DS&lt;(</tt> is slower than its more often used counterpart.

Related to the example code given, <tt>DS&lt;(</tt> should always have a command following after it (i.e. it's not the last command in a program) because it will return an error otherwise. If you have no particular code choice, an empty line will suffice.

```ti-basic
code that will run
:DS<(A,0
:
more code that will run
```

## Command Timings

Using <tt>DS&lt;(</tt> to decrement a variable is approximately 25% slower than using code like <tt>X-1→X</tt>. However, it is faster to use <tt>DS&lt;(</tt> than to construct an <tt>If</tt> statement to do the same thing.

Note, however, that a quirk in the <tt><a href="For(.md">For(</a></tt> command (see its [Optimization](for#optimization) section) will slow down the <tt>DS&lt;(</tt> command significantly if a closing parenthesis is not used for the <tt>For(</tt> statement.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.
*   **[ERR:SYNTAX](errors#syntax)** is thrown if there is no next line to skip.
*   **[ERR:UNDEFINED](errors#undefined)** is thrown if the variable to be decremented is not defined.

## Related Commands

*   <tt><a href="IS(.md">IS&gt;(</a></tt>
*   <tt><a href="If.md">If</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: kg583, Marcsine, GoVegan, DarkerLine, burr.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


