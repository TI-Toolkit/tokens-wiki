| Property      | Value |
|---------------|-------|
| Hex Value     | `$D6`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Lbl `</li></ul> |

# `Lbl `

## Description
Creates a `label` of one or two characters.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Lbl label`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>label</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `9:Lbl`
<hr>

The Lbl command is used together with the [Goto](Goto.md) command to jump (or branch) to another place in a program. When the calculator executes a Goto command, it stores the label name in memory, and then searches from the beginning of the program for the Lbl command with the supplied name. If it finds it, it continues running the program from that point; otherwise, if the label does not exist, it throws a [ERR: LABEL](errors#label) error.

Label names can be either one or two characters long, and the only characters you're allowed to use are letters (including θ) and numbers 0 to 9; this means 37+37*37=1406 possible combinations. Of course, you should use all of the single character names first, before using the two character names. While you can technically have the same label name multiple times in a program, it is rather pointless since the calculator always goes to the first occurrence of the label.

You can position a Lbl command one or more lines before a Goto command to create a kind of loop structure. However, you have to provide the break-out code, since it isn't built-in. An [If](If.md) conditional is easiest, but if there is no code that ends the branching, then program execution will continue indefinitely, until you manually exit it (by pressing the ON key).

```ti-basic
:Lbl A
:...
:If <exit condition>
:Goto A  // this line is skipped
```

Although the Lbl/Goto loop structure may seem like a good alternative to loops, it should be avoided whenever possible, which is especially important when you are first [planning](plan) a program. This is because it has several serious drawbacks associated with it:

*   It is quite slow, and gets slower the further the Lbl is in your program.
*   It makes reading code (your own, or someone else's) much more confusing.
*   In most cases, [If](If.md), [For(](For\(.md), [While](While.md), or [Repeat](Repeat.md) can be used instead, saving space and improving speed.
*   Using a Goto to exit any block of code requiring an End command causes a [memory leak](memory-leaks) — around 40 bytes of memory will be rendered useless each time you do it until the program finishes running, which will also slow down your program down.

They aren't all bad, however, and are actually useful when a loop isn't practical and when something only happens once or twice. Just remember that you should never use Goto to repeat a block of code several times. Use For(, Repeat, or While instead.

Labels are also used with the [Menu(](Menu\(.md) command. The same considerations apply as with Goto, except that (unless you write a [custom menu](custommenus) routine) there's no simple alternative to using labels with Menu(.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** is thrown if this statement is used outside a program.
*   **[ERR:LABEL](errors#label)** is thrown if the corresponding label doesn't exist.

## Related Commands

*   [Goto](Goto.md)
*   [Menu(](Menu\(.md)
*   [While](While.md)
*   [Repeat](Repeat.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


