| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB6B`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `AsmComp(`</li></ul> |

# `AsmComp(`

## Description



<b>Availability</b>: Token available everywhere.

## Syntax
`AsmComp(`

<hr>

This command is used to compress an assembly program written using [AsmPrgm](/asmprgm) into an "assembled" assembly program. This will make the program about twice as small, and protect it from being edited, in addition to making execution faster.

To use `AsmComp(`, give it the ASCII represented assembly program, followed by the name you want the assembled program to have. That name can't be already taken. Since it's not easy to rename an assembled assembly program, if you want to write a program called prgmGAME, you type the ASCII represented code in a program with a different name (e.g. GAMEA) and then do `AsmComp(`(prgmGAMEA,prgmGAME).

Assembly programs can be run with [Asm(](/asm-command).

## Error Conditions

*   **[ERR:DUPLICATE](/errors#duplicate)** is thrown if prgm_RESULT_ is an already used program name;
*   **[ERR:INVALID](/errors#invalid)** is thrown if prgm_ORIGINAL_ doesn't start with [AsmPrgm](/asmprgm);
*   **[ERR:SYNTAX](/errors#syntax)** is thrown if prgm_ORIGINAL_ is not an assembly program.

## Related Commands

*   [Asm(](/asm-command)
*   [AsmPrgm](/asmprgm)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83+</b> | 0.103 | Added |


