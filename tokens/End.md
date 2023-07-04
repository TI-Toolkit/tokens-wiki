| Property      | Value |
|---------------|-------|
| Hex Value     | `$D4`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [E](<../categories/Catalog.md#E>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `End`</li></ul> |

# `End`

## Description
Identifies end of` For(`, `If`-`Then`-`Else`, `Repeat`, or `While` loop.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`End`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `7:End`
<hr>

The <tt>End</tt> command is used together with the different control structures, including the <tt><a href="If.md">If</a></tt> conditional, <tt><a href="While.md">While</a></tt> loop, <tt><a href="Repeat.md">Repeat</a></tt> loop, and <tt><a href="For(.md">For(</a></tt> loop, to indicate the _end_ of the code block for the respective control structure. In the case of the <tt>If</tt> conditional, you also need to add a <tt><a href="Then.md">Then</a></tt> command, which is used to indicate the beginning of the control structure.

## Advanced Uses

You can prematurely end a control structure by using a single <tt>If</tt> conditional and then having <tt>End</tt> be its executed command. Because the calculator stores the positions of the <tt>End</tt> commands, it will take this <tt>End</tt> command to be the <tt>End</tt> command of the control structure.

```ti-basic
:If <condition>
:End
```

One of the most important features of the <tt>End</tt> command is putting multiple control structures inside of each other (known as nesting). While you typically nest <tt>If</tt> conditionals inside of loops, you can actually nest any control structure inside of any other control structure — this even works when using the same control structure, such as a <tt>While</tt> loop inside of another <tt>While</tt> loop.

When nesting control structures, you need to remember to put the appropriate number of <tt>End</tt> commands to close the appropriate structure. The easiest way to keep track of lots of nested control structures is to code the first part, add an <tt>End</tt> immediately after the beginning, and then hit 2nd DEL on the line with the <tt>End</tt>, then hit ENTER a lot of times.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.
*   **[ERR:SYNTAX](errors#invalid)** occurs if this statement is used before a logic block has been initiated.

## Related Commands

*   <tt><a href="If.md">If</a></tt>
*   <tt><a href="Then.md">Then</a></tt>
*   <tt><a href="While.md">While</a></tt>
*   <tt><a href="Repeat.md">Repeat</a></tt>
*   <tt><a href="For(.md">For(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, MufinMcFlufin, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


