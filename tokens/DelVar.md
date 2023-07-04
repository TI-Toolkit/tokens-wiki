| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB54`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `EffVar `</li></ul> |

# `DelVar `

## Description
Deletes from memory the contents of `variable`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`DelVar variable`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `G:DelVar`
<hr>

The <tt>DelVar</tt> command deletes the contents of a [variable](variables) (and thus the variable itself) from memory. You can use the <tt>DelVar</tt> command with any variable: reals, lists, matrices, strings, pictures, etc. However, you cannot use <tt>DelVar</tt> on specific elements of a matrix or string; it will actually throw a [ERR:SYNTAX](errors#syntax) error. (It also does not work on programs, unfortunately.)

If the <tt>DelVar</tt> command is used with a real variable, the variable is not only deleted from memory but automatically set to zero the next time it is used. This is equivalent to using <tt><a href="store.md">store</a></tt> (<tt>→</tt>) to manually set the variable yourself. Because the <tt>DelVar</tt> command is two bytes instead of one, there is no size difference between the two.

```ti-basic
:0→A
same as
:DelVar A
```

While there is no size difference between the two, <tt>DelVar</tt> does have some problems that go along with using it. If used in a <tt><a href="For.md">For</a></tt> loop to delete the counter variable or used to delete the variable and/or value in the <tt><a href="IS(.md">IS&gt;(</a></tt> or <tt><a href="DS(.md">DS&lt;(</a></tt> commands before using them, it will cause an [ERR:UNDEFINED](errors#undefined) error.

This is a result of the way that the interpreter in TI-Basic is designed, so there is nothing you can do about it. You just need to be cognizant of it when using <tt>DelVar</tt> in a <tt>For(</tt> loop or together with <tt>IS&gt;(</tt> or <tt>DS&lt;(</tt>.

## Advanced Uses

When you are done using variables, you should delete them at the end of the program with the <tt>DelVar</tt> command to [cleanup](cleanup.md). Each variable takes up a set amount of space (for example, a real variable is 15 bytes), and the more variables you can delete the more free memory is available. Free memory helps your programs run faster and allows you to pack more things on your calculator.

Because the <tt>DelVar</tt> command doesn't update the <tt><a href="Ans.md">Ans</a></tt> variable, you can use <tt>DelVar</tt> and the current value in <tt>Ans</tt> will still be preserved for later use.

## Optimizations

The <tt>DelVar</tt> command does not need a line break or colon (which indicates a new line of code) following the variable name. This allows you to make chains of variables (organized in whatever order you want), and it saves a byte for each line break or colon removed.

```ti-basic
:DelVar A
:DelVar B
can be
:DelVar ADelVar B
```

Besides making chains of variables, the <tt>DelVar</tt> command also allows you to take the command from the next line and put it immediately after the <tt>DelVar</tt> command.

```ti-basic
:DelVar A
:Disp "Hello
can be
:DelVar ADisp "Hello
```

There are, however, two cases in which the following statement will be ignored, so you should add a newline:

*   The <tt><a href="End.md">End</a></tt> from an <tt><a href="If.md">If</a></tt>, <tt><a href="Then.md">Then</a></tt> block.
*   A <tt><a href="Lbl.md">Lbl</a></tt> command.

<tt>DelVar</tt> also does not count as a line with respect to <tt>IS&gt;(</tt>, <tt>DS&lt;(</tt>, and single-line <tt>If</tt> statements.

```ti-basic
:If B
:Then
:DelVar A
:Disp "Hello
:End
can be
:If B
:DelVar ADisp "Hello
```

## Command Timings

The speed of the <tt>DelVar</tt> command depends on the circumstance where it is used. When the variable already exists, <tt>DelVar</tt> is slower because it has to deallocate the variable from the RAM. <tt>DelVar</tt> is also significantly slower for zeroing real variables when compared to using <tt><a href="→.md">→</a></tt> to set the variable to 0. The speed difference becomes apparent when the value is reset many times but is not a major factor if only used sparingly.

## Error Conditions

*   **[ERR:SYNTAX](errors#syntax)** is thrown when trying to delete a system variable (e.g. <tt>DelVar</tt> Xmin) or a program, even though this is syntactically correct.
*   **[ERR:UNDEFINED](errors#undefined)** is thrown if you delete the loop variable while inside the loop, or delete the variable used in <tt><a href="IS(.md">IS&gt;(</a></tt> or <tt><a href="DS(.md">DS&lt;(</a></tt>.
*   **[ERR:ARCHIVED](errors#archived)** is thrown if you use <tt>DelVar</tt> on an archived variable.

## Related Commands

*   <tt><a href="ClrList.md">ClrList</a></tt>

## See Also

*   [Program Cleanup](Program Cleanup.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: AntKou, basickevin, burr, DarkerLine, GoVegan, jonbush, kg583, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 1.010 | Renamed `DelVar` to `DelVar `


