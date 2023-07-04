| Property      | Value |
|---------------|-------|
| Hex Value     | `$D9`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Stop`</li></ul> |

# `Stop`

## Overview
Ends program execution; returns to home screen.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Stop`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `F:Stop`
<hr>

## Description

When the Stop command is used in a program it exits the program (terminating the program execution) and returns you to the home screen. If it is encountered within [loops](controlflow), the loops will be stopped.

There is some distinction when using Stop with [subprograms](subprograms.md): the Stop command will stop the program execution of the subprogram, as well as the calling program, and return you to the home screen; the program will stop completely. If this functionality is not desired, then you should use the [Return](Return.md) command instead.

## Optimization

You don't have to put a Stop command at the end of a program or subprogram if you can organize the program so that it just naturally quits. When the calculator reaches the end of a program, it will automatically stop executing as if it had encountered a Stop command (the Stop is implied).

```ti-basic
:ClrHome
:Input "Guess:",A
:Stop
Remove the Stop
:ClrHome
:Input "Guess:",A
```

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   [prgm](prgm.md)
*   [Return](Return.md)

## See Also

*   [Subprograms](Subprograms.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


