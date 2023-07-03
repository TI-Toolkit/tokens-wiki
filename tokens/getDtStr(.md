| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF07`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `AffChDt(`</li></ul> |

# `getDtStr(`

## Description
Returns a string of the current date in the format specified by `integer`, where:
1 = M/D/Y2 = D/M/Y3 = Y/M/D


<b>Availability</b>: Token available everywhere.

## Syntax
`getDtStr(integer)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>integer</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `getDtStr(`
<hr>

The `getDtStr(` command returns the current date of the clock on the TI-84+/SE/CE calculators as a string based on the date format that is specified. There are three different date formats available: 1 (M/D/Y), 2 (D/M/Y), or 3 (Y/M/D). You can store this value to a [string](/strings) variable for later use, or manipulate it the same way you do with other strings. Of course, this command only works if the date format has actually been set, so you should use the [setDtFmt(](/setdtfmt) command before using it.

## Related Commands

*   [getDate](/getdate)
*   [getDtFmt](/getdtfmt)
*   [setDate(](/setdate)
*   [setDtFmt(](/setdtfmt)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


