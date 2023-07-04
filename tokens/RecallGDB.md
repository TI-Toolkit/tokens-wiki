| Property      | Value |
|---------------|-------|
| Hex Value     | `$9B`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `RappelBDG `</li></ul> |

# `RecallGDB `

## Overview
Restores all settings stored in the graph database variable `GDBn`.


<b>Availability</b>: Token available everywhere.

## Syntax
`RecallGDB n`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>n</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `STO`, `4:RecallGDB`
<hr>

## Description

The RecallGDB command recalls graph settings a GDB (Graph DataBase) variable, one of GDB1, GDB2, …, GDB0 (as indicated by the argument). These settings can be stored to a GDB using the [StoreGDB](StoreGDB.md) command.

The settings stored in a GDB include:

*   The [graphing mode](graphing-mode) currently enabled.
*   All [equations](system-variables#equation) in the current graphing mode, but NOT other graphing modes.
*   All [window variables](system-variables#window) applicable to the current graphing mode. This does not include zoom variables, table settings, or irrelevant variables such as Tmin when in function mode.
*   The menu settings relevant to graphing (everything in the 2nd FORMAT menu, as well as Connected/Dot and Sequential/Simul settings in the MODE menu)

The number passed to RecallGDB must be one of 0 through 9. It has to be a number: RecallGDB X will not work, even if X contains a value 0 through 9.

## Advanced Uses

The StoreGDB and RecallGDB variables are useful in [cleaning up](cleanup#toc1) after a program finishes running, preserving the user's settings. If your program heavily relies on the graph screen, it may end up editing window size or other graph settings, which the user might want to be saved. This is easily done:

Add StoreGDB 1 (or any other number) to the beginning of your program.

Then, feel free to edit any graph settings you like.

At the end of your program, add RecallGDB 1, followed by [DelVar](DelVar.md) GDB1, to recall the graph settings stored at the beginning.

GDBs can also be useful in adding extra string storage. You can store strings to the Yn variables, and back them up in a GDB; to retrieve them later, recall the GDB and use [Equ►String(](equ-string) to store the equations to the strings again.

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown if the argument is not a _number_ 0 through 9.
*   **[ERR:UNDEFINED](errors#undefined)** is thrown if the requested GDB does not exist.

## Related Commands

*   [StoreGDB](StoreGDB.md)

## See Also

*   [Cleaning up](Cleaning up.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Zaphod Beeblebrox.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


