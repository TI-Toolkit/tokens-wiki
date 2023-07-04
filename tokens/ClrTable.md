| Property      | Value |
|---------------|-------|
| Hex Value     | `$FB`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `EffTable`</li></ul> |

# `ClrTable`

## Description
Clears all values from the table.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ClrTable`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `9:ClrTable`
<hr>

The <tt>ClrTable</tt> command clears all calculations for the table screen shown if you press 2nd TABLE. That is, all already-calculated values in the table are cleared, and [TblInput](system-variables#window) is deleted. In <tt><a href="IndpntAuto.md">IndpntAuto</a></tt> and <tt><a href="DependAuto.md">DependAuto</a></tt> mode, this usually isn't noticeable because the table will be recalculated almost immediately when you next look at it (unless one of the entered functions is so complicated it takes a while to calculate). This mainly has an effect in <tt><a href="IndpntAsk.md">IndpntAsk</a></tt> or <tt><a href="DependAsk.md">DependAsk</a></tt> mode, where the corresponding parts of the table will be cleared entirely.

## Advanced Uses

As a side effect, <tt>ClrTable</tt> seems to have all the effects of <tt><a href="ClrDraw.md">ClrDraw</a></tt> — it clears the graph screen, and any equations or plots will be regraphed the next time the graph screen is displayed.

## Command Timings

<tt>ClrTable</tt> and <tt>ClrDraw</tt> take the same amount of time to clear the screen.

## Related Commands

*   <tt><a href="ClrDraw.md">ClrDraw</a></tt>
*   <tt><a href="DispGraph.md">DispGraph</a></tt>
*   <tt><a href="DispTable.md">DispTable</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


