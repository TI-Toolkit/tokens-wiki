| Property      | Value |
|---------------|-------|
| Hex Value     | `$E1`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `EffEcran`</li></ul> |

# `ClrHome`

## Overview
Clears the home screen.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ClrHome`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `8:ClrHome`
<hr>

## Description

There are numerous times in a program that you need a clear screen, so that you can display whatever text you want without it being interrupted. One place, in particular, is at the [beginning](setup) of a program, since the previous program call(s) and any other text is typically still displayed on the screen. The simple <tt>ClrHome</tt> command is the command you use to clear the home screen.

When you use the <tt>ClrHome</tt>, it resets the cursor position to the top left corner of the home screen. This is what the <tt><a href="Disp.md">Disp</a></tt> and <tt><a href="Pause.md">Pause</a></tt> commands use as the reference for what line to display their text on, but it does not have any effect on <tt><a href="Output(.md">Output(</a></tt>.

## Advanced Uses

You want to make sure to clear the home screen when [exiting](cleanup) programs (at the end of a program). This ensures that the next program that the user runs will not have to deal with whatever text your program left behind. It also helps the user, because they will not have to manually clear the home screen by pressing the CLEAR key; you have already done it for them.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   <tt><a href="ClrDraw.md">ClrDraw</a></tt>

## See Also

*   [Program Setup](Program Setup.md)
*   [Program Cleanup](Program Cleanup.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: alexrudd, burr, CloudVariable, DarkerLine, GoVegan, kg583, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


