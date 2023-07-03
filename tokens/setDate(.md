| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF00`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `défDate(`</li></ul> |

# `setDate(`

## Description
Sets the date using a year, month, day format. The `year` must be 4 digits; `month` and `day` can be 1 or 2 digit.

<b>Comment</b>:EFXX tokens are TI-84+ and later only

<b>Availability</b>: Token available everywhere.

## Syntax
`setDate(year,month,day)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>year</b></td><td></td><td>Yes</td></tr>

<tr><td><b>month</b></td><td></td><td>Yes</td></tr>

<tr><td><b>day</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `setDate(`
<hr>

The setDate( command sets the date of the clock on the TI-84+/SE calculators. It takes three arguments: the year, the month, and the day. All three of these must be integers; in particular, year must be four digits, and month and day can be one or two digits. They represent the associated value that goes with a respective date. For example, this would set the date to January 1, 2008:

```ti-basic
:setDate(2008,1,1
```

Once you have set the date, you can display it in three different formats on the [mode screen](/settings) using the [setDtFmt(](/setdtfmt) command: Month/Day/Year, Day/Month/Year, or Year/Month/Day. Of course, the date will only show up if the clock is on; if you need to turn the clock on, use the [ClockOn](/clockon) command or select 'TURN CLOCK ON' , displayed in place of the clock on the mode screen.

## Related Commands

*   [getDate](/getdate)
*   [getDtFmt](/getdtfmt)
*   [getDtStr(](/getdtstr)
*   [setDtFmt(](/setdtfmt)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


