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

With the <tt>IndpntAsk</tt> setting, the independent variable (X, T, θ, or _n_ depending on [graphing mode](/graphing-mode)) will not be calculated automatically in the table. Instead, when looking at the table, you must select an entry in the independent variable column, press ENTER, and enter a value. The values entered will also be stored to the <tt><a href="/system-variables#window">TblInput</a></tt> list.

(To access the table, press [2ND][TABLE], or use the <tt><a href="/disptable">DispTable</a></tt> command in a program)

The alternative, <tt><a href="/indpntauto">IndpntAuto</a></tt>, fills in several values starting at <tt>TblStart</tt> and increasing by <tt>ΔTbl</tt>, and makes the table scrollable (up and down).

## Related Commands

*   <tt><a href="/indpntauto">IndpntAuto</a></tt>
*   <tt><a href="/dependauto">DependAuto</a></tt>
*   <tt><a href="/dependask">DependAsk</a></tt>
*   <tt><a href="/disptable">DispTable</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


