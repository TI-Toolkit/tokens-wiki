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

The `End` command is used together with the different control structures, including the [If](/if) conditional, [While](/while) loop, [Repeat](/repeat) loop, and [For(](/for) loop, to indicate the _end_ of the code block for the respective control structure. In the case of the `If` conditional, you also need to add a [Then](/if) command, which is used to indicate the beginning of the control structure.

## Advanced Uses

You can prematurely end a control structure by using a single `If` conditional and then having `End` be its executed command. Because the calculator stores the positions of the `End` commands, it will take this `End` command to be the `End` command of the control structure.

```ti-basic
:If <condition>
:End
```

One of the most important features of the `End` command is putting multiple control structures inside of each other (known as nesting). While you typically nest `If` conditionals inside of loops, you can actually nest any control structure inside of any other control structure — this even works when using the same control structure, such as a `While` loop inside of another `While` loop.

When nesting control structures, you need to remember to put the appropriate number of `End` commands to close the appropriate structure. The easiest way to keep track of lots of nested control structures is to code the first part, add an `End` immediately after the beginning, and then hit 2nd DEL on the line with the `End`, then hit ENTER a lot of times.

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** occurs if this statement is used outside a program.
*   **[ERR:SYNTAX](/errors#invalid)** occurs if this statement is used before a logic block has been initiated.

## Related Commands

*   [If](/if)
*   [Then](/then)
*   [While](/while)
*   [Repeat](/repeat)
*   [For(](/for)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


