| Property      | Value |
|---------------|-------|
| Hex Value     | `$DA`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `IS>(`</li></ul> |

# `IS>(`

## Overview
Increments `variable` by 1; skips `commandA` if `variable`>`value`.

<b>Comment</b>::commandA,:commands

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`:IS>(variable,value) :commandA:commands`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

<tr><td><b>commandA</b></td><td></td><td></td></tr>

<tr><td><b>commands</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `A:IS>(`
<hr>

## Description

The increment and skip if greater than command — <tt>IS&gt;(</tt> — is a specialized conditional command. It is equivalent to an [If](If.md) conditional, except the next command will be skipped when the condition is true and it has a [variable](variables) update built-in. However, it is not used very often (if anything, it is often misused as a looping command) because of its obscure name and somewhat limited application.

The <tt>IS&gt;(</tt> command takes two arguments:

*   A variable, which is limited only to one of the real variables (<tt>A</tt>-<tt>Z</tt> or <tt>θ</tt>).
*   A value, which can be any expression which evaluates to a real number.

When <tt>IS&gt;(</tt> is executed it adds one to the variable (increments it by one), and compares it to the value. The next command will be skipped if the variable is greater than the value, while the next command will be executed if the variable is less than or equal to the value.

The command <tt>IS&gt;(A,B</tt> is equivalent to the following code:

```ti-basic
:A+1→A
:If A≤B
```

Here are the two main cases where the <tt>IS&gt;(</tt> command is used:

```ti-basic
:7→A
:IS>(A,6
:Disp "Skipped
```

*   Initializes <tt>A</tt> to 7 and then compares to the value
*   7>6 is true so the display message won't be displayed

```ti-basic
:1→B
:IS>(B,2
:Disp "Not Skipped
```

*   Initializes <tt>B</tt> to 1 and then compares to the value
*   1>2 is false so the display message will be displayed

Note: In addition to both of these cases, there is also the case where the variable and the value are equal to each other. This case is shown below under the 'Advanced Uses' section because it has some added background that goes with it.

## Advanced Uses

When you want the skipping feature of the <tt>IS&gt;(</tt> command to always occur, you just have to use the same variable for both the variable and value arguments of the command:

```ti-basic
:IS>(B,B
```

An undefined error will occur if the variable and/or value doesn't exist before the <tt>IS&gt;(</tt> command is used, which happens when the <tt><a href="DelVar.md">DelVar</a></tt> command is used. Consequently, you should not use <tt>DelVar</tt> with <tt>IS&gt;(</tt>.

Similar code can be used as a substitute for <tt>B+1→B</tt> if you don't want to change <tt><a href="Ans.md">Ans</a></tt>:

```ti-basic
:IS>(B,B:
```

  
Note that due to the colon after the line, there will be no statement skipped, so you don't have to worry about that.

## Optimization

Because the <tt>IS&gt;(</tt> command has the variable update built-in, it is smaller than manually incrementing a variable by one along with using an <tt><a href="If.md">If</a></tt> conditional.

```ti-basic
:A+1→A
can be
:IS>(A,0
```

The one caution about this is that if the variable is greater than the value (in this case, '0'), the next command will be skipped. If you don't want the skipping functionality, then you need to make sure that the value is never less than the variable. This is not always possible to do. Also, <tt>IS&gt;(</tt> is slightly slower than its more normal counterpart.

Related to the example code given, <tt>IS&gt;(</tt> should always have a command following after it (i.e., it's not the last command in a program) because it will return an error otherwise. If you have no particular code choice, just put an empty line or something meaningless.

## Command Timings

Using <tt>IS&gt;(</tt> to increment a variable is approximately 25% slower than using code like <tt>X+1→X</tt>. However, it is faster to use <tt>IS&gt;(</tt> than to construct an <tt>If</tt> statement to do the same thing.

Note, however, that a quirk in the <tt><a href="For(.md">For(</a></tt> command (see its Optimizations section) will slow down the <tt>IS&gt;(</tt> command significantly if a closing parenthesis is not used for the <tt>For(</tt> statement.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.
*   **[ERR:UNDEFINED](errors#undefined)** is thrown if the variable to be incremented is not defined.
*   **[ERR:SYNTAX](errors#syntax)** is thrown if there is no next line to skip, or if there is only one next line and it is empty.

## Related Commands

*   <tt><a href="DS&lt;(.md">DS&lt;(</a></tt>
*   <tt><a href="If.md">If</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


