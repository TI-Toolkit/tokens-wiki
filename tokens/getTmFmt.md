| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF0D`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `affFmtHr`</li></ul> |

# `getTmFmt`

## Description
Returns an integer representing the clock time format that is currently set on the device.
12 = 12 hour format24 = 24 hour format


<b>Availability</b>: Token available everywhere.

## Syntax
`getTmFmt`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `getTmFmt`
<hr>

The <tt>getTmFmt(</tt> command returns the current time format of the clock on the TI-84+/SE/CE calculators as an integer. There are two different time formats available: 12 (12 hour) and 24 (24 hours). You can store this value to a [variable](/variables) for later use. Of course, this command only works if the time format has actually been set, so you should use the <tt><a href="/settmfmt">setTmFmt(</a></tt> command before using it.

## Related Commands

*   <tt><a href="/gettime">getTime</a></tt>
*   <tt><a href="/settime">setTime(</a></tt>
*   <tt><a href="/settmfmt">setTmFmt(</a></tt>
*   <tt><a href="/gettmstr">getTmStr(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


