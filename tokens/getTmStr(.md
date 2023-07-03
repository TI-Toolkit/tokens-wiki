| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF08`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `affChHr(`</li></ul> |

# `getTmStr(`

## Description
Returns a string of the current clock time in the format specified by `integer`, where:
12 = 12 hour format24 = 24 hour format


<b>Availability</b>: Token available everywhere.

## Syntax
`getTmStr(integer)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>integer</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `getTmStr(`
<hr>

The getTmStr( command returns the current time of the clock on the TI-84+/SE calculators as a string based on the time format that is specified. There are two different time formats available: 12 (12 hour) or 24 (24 hour). You can store this value to a [string](/strings) variable for later use, or manipulate it the same way you do with other strings. Of course, this command only works if the time format has actually been set, so you should use the [setTmFmt(](/settmfmt) command before using it.

## Related Commands

*   [getTime](/gettime)
*   [getTmFmt](/gettmfmt)
*   [setTime(](/settime)
*   [setTmFmt(](/settmfmt)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


