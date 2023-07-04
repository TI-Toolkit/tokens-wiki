| Property      | Value |
|---------------|-------|
| Hex Value     | `$7D`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Table Settings](<../categories/Table Settings.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `CalculsDem`</li></ul> |

# `DependAsk`

## Description
Sets table to ask for dependent-variable values.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`DependAsk`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>tblset</kbd>, `Depend: Ask`
<hr>

When the <tt>DependAsk</tt> setting (opposed to the <tt><a href="DependAuto.md">DependAuto</a></tt> setting) is turned on, values in the table are not automatically calculated. To calculate the value of an equation, you have to select the column corresponding to that equation in the row corresponding to the value at which to calculate it, and press ENTER. For example, to calculate Y1 at X=0, select the X=0 column, scroll right to Y1, and press ENTER.

The <tt>DependAsk</tt> setting might be useful when dealing with a difficult-to-calculate function, for which you wouldn't want to have to calculate values that aren't really necessary.

## Related Commands

*   <tt><a href="IndpntAuto.md">IndpntAuto</a></tt>
*   <tt><a href="IndpntAsk.md">IndpntAsk</a></tt>
*   <tt><a href="DependAuto.md">DependAuto</a></tt>
*   <tt><a href="DispTable.md">DispTable</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


