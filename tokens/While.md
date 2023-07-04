| Property      | Value |
|---------------|-------|
| Hex Value     | `$D1`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [W](<../categories/Catalog.md#W>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `While `</li></ul> |

# `While `

## Description
Executes `commands` while `condition` is true.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`:Whilecondition:commands
 :End:command`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>condition</b></td><td></td><td></td></tr>

<tr><td><b>commands</b></td><td></td><td></td></tr>

<tr><td><b>command</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `5:While`
<hr>

A While loop executes a block of commands between the While and End commands as long as the specified condition is true. The condition is tested at the beginning of the loop (when the End command is encountered), so if the condition is initially false, the block of commands will never get executed. This distinguishes it from the [Repeat](Repeat.md) command.

After each time the While loop is executed, the condition is checked to see if it is still true. If it is, the block of commands is executed again, otherwise the program resumes after the End statement.

## Advanced Uses

When using While loops, you have to provide the code to break out of the loop (it isn't built into the loop). If there is no code that ends the loop, then you will have an infinite loop. An infinite loop just keeps executing, until you have to manually exit the loop (by pressing the ON key). In the case that you actually want an infinite loop, you can just use 1 as the condition. Because 1 is always true (based on Boolean logic), the way the calculator sees it, the condition will always be true, and the loop will never end.

```ti-basic
:While 1
:statement(s)
:End
```

Each time the program enters an While block, the calculator uses 35+(size of the condition) bytes of memory to keep track of this. This memory is given back to you as soon as the program reaches End. This isn't really a problem unless you're low on RAM, or have a lot of nested While statements. However, if you use [Goto](Goto.md) to jump out of a While block, you lose those bytes for as long as the program is running — and if you keep doing this, you might easily run out of memory, resulting in [ERR:MEMORY](errors#memory).

## Optimization

Because the While and Repeat commands are so similar, either one can be used in the same situation, but using one usually results in simpler code than the other. To decide which to use, answer some simple questions about the purpose of the code.

1.  Should the code inside the loop be executed at least once? (Alternatively, does the condition use some variable that we first use inside the loop?) If it should, use a Repeat loop. Otherwise, use a While loop.
2.  (Only if the previous question doesn't help) Think of the condition based on which the loop keeps going. Is this condition best phrased as "run the loop as long as this is true?" If so, use a While loop. Or is it more like "run the loop until this is true?" If so, Repeat is best.

Example: we want the user to pick a number, but it has to be positive, so we'll keep asking until it is.

1.  Yes, we should run the loop once. Otherwise, where will we get the number from? So, we should use the Repeat loop.

```ti-basic
:Repeat N>0
:Prompt N
:End
```

Another example: we want to wait for the user to [press a key](getkey).

1.  We're not going to have any code in the loop, all that the loop will have is a condition. So the answer to question 1 is irrelevant.
2.  We can phrase the problem as "run the loop until a key is pressed" or as "run the loop while no key is pressed." However, we have a good way of testing for the former (getKey), while the latter can only be checked with not(getKey). Therefore, it's better to use a Repeat command:

```ti-basic
:Repeat getKey
:End
```

## Command Timings

While and Repeat loops are identical regarding speed, so that shouldn't be a factor in deciding between them. However, For( loops are much faster at what they do, that is, at going through consecutive values for one variable. You should consider if a For( loop is more appropriate to your situation. If not, choose between a Repeat loop and a While loop.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   [For(](For\(.md)
*   [Repeat](Repeat.md)
*   [If](If.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, eibmoz_, GoVegan, Weregoose.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


