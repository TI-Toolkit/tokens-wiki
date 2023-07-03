| Property      | Value |
|---------------|-------|
| Hex Value     | `$7A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Table Settings](<../categories/Table Settings.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ValeursAuto`</li></ul> |

# `IndpntAuto`

## Description
Sets table to generate independent-variable values automatically.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`IndpntAuto`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>tblset</kbd>, `Indpnt: Auto`
<hr>

The `IndpntAuto` setting sets the independent variable (X, T, θ, or _n_ depending on [graphing mode](/graphing-mode)) to be filled in automatically in the table (which is accessible by pressing 2nd TABLE, or from a program with the [DispTable](/disptable) command).

The values which will be filled in start at the value [TblStart](/system-variables#window) and increment by `ΔTbl`(which can be negative, but not 0). They will also be stored in the list `TblInput`. All these variables can be accessed through the VARS|6:Table… menu; `TblStart` and `ΔTbl` can also be edited in the [2ND][TBLSET] menu.

The other possibility for this setting is [IndpntAsk](/indpntask) - if that setting is turned on, you must scroll to the corresponding row in the independent variable column, and enter a value.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if `ΔTbl=0`.

## Related Commands

*   [IndpntAsk](/indpntask)
*   [DependAuto](/dependauto)
*   [DependAsk](/dependask)
*   [DispTable](/disptable)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


