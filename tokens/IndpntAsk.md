| Property      | Value |
|---------------|-------|
| Hex Value     | `$7B`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Table Settings](<../categories/Table Settings.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ValeursDem`</li></ul> |

# `IndpntAsk`

## Description
Sets table to ask for independent-variable values.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`IndpntAsk`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>tblset</kbd>, `Indpnt: Ask`
<hr>

With the `IndpntAsk` setting, the independent variable (X, T, θ, or _n_ depending on [graphing mode](/graphing-mode)) will not be calculated automatically in the table. Instead, when looking at the table, you must select an entry in the independent variable column, press ENTER, and enter a value. The values entered will also be stored to the [TblInput](/system-variables#window) list.

(To access the table, press [2ND][TABLE], or use the [DispTable](/disptable) command in a program)

The alternative, [IndpntAuto](/indpntauto), fills in several values starting at `TblStart` and increasing by `ΔTbl`, and makes the table scrollable (up and down).

## Related Commands

*   [IndpntAuto](/indpntauto)
*   [DependAuto](/dependauto)
*   [DependAsk](/dependask)
*   [DispTable](/disptable)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


