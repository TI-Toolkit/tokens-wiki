| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF75`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `Point fin`</li></ul> |

# `Dot-Thin`

## Description
Sets dot plotting mode; resets all Y=editor graph-style settings to Dot-Thin.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Dot-Thin`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Dot-Thin`
<hr>

The <tt>Dot-Thin</tt> command sets all lines in the current function type to be drawn using a series of individual pixels at each interval of <tt>TraceStep</tt>. The command can be called on the homescreen or within a program.

```ti-basic
:ClrDraw
:AxesOn
:Dot-Thin
```

## Error Conditions

*   **[ERR:SYNTAX](errors#syntax)** is thrown if the command is executed with any additional arguments

## Related Commands

*   <tt><a href="Dot-Thick.md">Dot-Thick</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CSE</b> | 4.0 | Added |


