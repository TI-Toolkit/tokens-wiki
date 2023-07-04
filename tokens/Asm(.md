| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB6A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Asm(`</li></ul> |

# `Asm(`

## Overview



<b>Availability</b>: Token available everywhere.

## Syntax
`Asm(`

<hr>

## Description

The <tt>Asm(</tt> command is used for running an assembly program. Unlike TI-Basic programs, assembly programs are written in the calculator's machine code directly, which makes them more powerful in both speed and functionality. However, it also means that if they crash, they crash hard — there is no built-in error menu to protect you.

Keep in mind that many assembly programs these days are written for a [shell](asmshells) such as Ion or MirageOS. If you're dealing with one of those programs, calling <tt>Asm(</tt> on it will do nothing; you need to get the appropriate shell and run that instead.

With the <tt><a href="AsmPrgm.md">AsmPrgm</a></tt> and <tt><a href="AsmComp(.md">AsmComp(</a></tt> commands, you can create small assembly programs yourself, directly on the calculator. If you are using at TI-84+CE with OS 5.3, the <tt>Asm(</tt> is unnecessary to run such programs.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** is thrown if the program isn't an assembly program.

## Related Commands

*   <tt><a href="AsmPrgm.md">AsmPrgm</a></tt>
*   <tt><a href="AsmComp(.md">AsmComp(</a></tt>

## See Also

*   [Assembly Shells](Assembly Shells.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583, Myles_Zadok, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83+</b> | 0.103 | Added |


