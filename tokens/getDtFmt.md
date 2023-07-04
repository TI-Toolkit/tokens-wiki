| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF0C`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `affFmtDt`</li></ul> |

# `getDtFmt`

## Description
Returns an integer representing the date format that is currently set on the device.
1 = M/D/Y2 = D/M/Y3 = Y/M/D


<b>Availability</b>: Token available everywhere.

## Syntax
`getDtFmt`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `getDtFmt`
<hr>

The <tt>getDtFmt(</tt> command returns the current date format of the clock on the TI-84+/SE/CE calculators as an integer. There are three different date formats available: 1 (M/D/Y), 2 (D/M/Y), and 3 (Y/M/D). You can store this value to a [variable](variables) for later use. Of course, this command only works if the date format has actually been set, so you should use the <tt><a href="setDtFmt(.md">setDtFmt(</a></tt> command before using it.

## Related Commands

*   <tt><a href="getDate.md">getDate</a></tt>
*   <tt><a href="setDate(.md">setDate(</a></tt>
*   <tt><a href="setDtFmt(.md">setDtFmt(</a></tt>
*   <tt><a href="getDtStr(.md">getDtStr(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Jonathan King, kg583, RandomProductions.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


