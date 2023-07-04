| Property      | Value |
|---------------|-------|
| Hex Value     | `$D5`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Return`</li></ul> |

# `Return`

## Description
Returns to the calling program.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Return`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `E:Return`
<hr>

When the Return command is used in a program it exits the program (terminating the program execution) and returns the user to the home screen. If it is encountered within [loops](while), the loops will be stopped.

There is some distinction when using Return with [subprograms](subprograms.md): the Return command will stop the program execution of the subprogram, and program execution will go back to the calling program, continuing right after the subprogram call. If this functionality is not desired, then you should use the [Stop](Stop.md) command instead. Generally, though, you should use Return instead of Stop.

```ti-basic
:ClrHome
:Input "Guess:",A
:Stop
Replace Stop with Return
:ClrHome
:Input "Guess:",A
:Return
```

## Optimization

You don't have to put a Return command at the end of a program or subprogram if you can organize the program so that it just naturally quits. When the calculator reaches the end of a program, it will automatically stop executing as if it had encountered a Return command (the Return is implied).

```ti-basic
:ClrHome
:Input "Guess:",A
:Return
Remove the Return
:ClrHome
:Input "Guess:",A
```

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   [prgm](prgm.md)
*   [Stop](Stop.md)

## See Also

*   [Subprograms](Subprograms.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


