| Property      | Value |
|---------------|-------|
| Hex Value     | `$5F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `prgm`</li></ul> |

# `prgm`

## Overview
Executes the program `name`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`prgmname`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>name</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTRL`, `D:prgm`
<hr>

## Description

The prgm command is used to execute a program from inside another program (at any time while the program is running), with the secondary program acting as a [subprogram](subprograms) for that program. Although they are listed in the program menu and can be executed independently like any other program, subprograms are primarily designed to do a particular task for the other program.

You insert the prgm command into the program where you want the subprogram to run, and then type (with the alpha-lock on) the program name. You can also go to the program menu to choose a program, pressing ENTER to paste the program name into your program.

```ti-basic
PROGRAM:MYPROG
:ClrHome
:Output(3,3,"Hello
:prgmWHATEVER
```

When the subprogram name is encountered during a program, the program will be put on hold and program execution will transfer to the subprogram. Once the subprogram is finished, program execution will go back to the program, continuing right after the subprogram name.

Although subprograms can call themselves or other subprograms, this should be done sparingly because it can cause memory leaks if done too much or if the subprogram doesn't return to the parent program.

[Branching](goto) is local to each program, so you can’t use Goto in one program to jump to a Lbl in another program. In addition, all [variables](variables.md) are global, so changing a variable in one program affects the variable everywhere else.

## Advanced Uses

Each time you call a TI-Basic program, 16 bytes are used to save your place in the original program so you can return to it correctly. This is a small enough amount that you don't have to worry about it, unless you're low on RAM or use a lot of recursion.

## Error Conditions

*   **[ERR:ARCHIVED](errors#archived)** if the program is archived.
*   **[ERR:SYNTAX](errors#syntax)**, with no 2:Goto option, if the program is an [assembly](assembly.md) program.
*   **[ERR:UNDEFINED](errors#undefined)** if the program doesn't exist.

### See Also

*   [Subprograms](Subprograms.md)
*   [Branching](Branching.md)
*   [Variables](Variables.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Xphoenix.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


