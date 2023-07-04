| Property      | Value |
|---------------|-------|
| Hex Value     | `$E5`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `AffTable`</li></ul> |

# `DispTable`

## Description
Displays the table.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`DispTable`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `5:DispTable`
<hr>

The <tt>DispTable</tt> comand displays the table screen you normally see by pressing 2nd TABLE, from a running program. The user will see the table screen with a "paused" run indicator, and will be able to use arrows to scroll through it. Pressing ENTER will exit the screen and continue the program.

## Advanced Uses

The user can't select any cells in the table to be evaluated if they're not, already. So it's best to select the <tt><a href="/indpntauto">IndpntAuto</a></tt> and <tt><a href="/dependauto">DependAuto</a></tt> options from the 2nd TBLSET menu before using this command. <tt><a href="/indpntask">IndpntAsk</a></tt> can also work, however, as long as you store to <tt><a href="/system-variables#window">TblInput</a></tt> first.

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   <tt><a href="/indpntask">IndpntAsk</a></tt>
*   <tt><a href="/indpntauto">IndpntAuto</a></tt>
*   <tt><a href="/dependask">DependAsk</a></tt>
*   <tt><a href="/dependauto">DependAuto</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


