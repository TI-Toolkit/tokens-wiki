| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF06`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `joursem(`</li></ul> |

# `dayOfWk(`

## Description
Returns an integer from 1 to 7, with each integer representing a day of the week. Use `dayOfWk(` to determine on which day of the week a particular date would occur. The `year` must be 4 digits; `month` and `day` can be 1 or 2 digits.


<b>Availability</b>: Token available everywhere.

## Syntax
`dayOfWk(year,month,day)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>year</b></td><td></td><td></td></tr>

<tr><td><b>month</b></td><td></td><td></td></tr>

<tr><td><b>day</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `dayOfWk(`, `1:Sunday`, `2:Monday`, `3:Tuesday...`
<hr>

<tt>dayOfWk(<em>year</em>,<em>month</em>,<em>day</em>)</tt> returns an integer from 1 to 7, each representing a separate day of the week. 1 represents Sunday, 2 represents Monday, and so on, with 7 representing Saturday. The date format is different than the normal American format (month/day/year), so be careful to put the arguments in the right order. You can remember this by thinking of the descending lengths of time in each of the arguments.

```ti-basic
:dayOfWk(2007,12,30)
```

  
The above code returns 1, because the 30<sup>th</sup> of December, 2007, is a Sunday.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if any of the arguments are non-integers, or the date does not exist, such as the 42<sup>nd</sup> of February. However, the year does not matter (a date that takes place in the year 10000 is valid). However, there are exceptions, even if some dates do exist, this error may still occur. If you attempt to calculate the previous day of a week such as the previous day, the error may still occur.

## Related Commands

*   <tt><a href="/dbd">dbd(</a></tt>
*   <tt><a href="/setdate">setDate(</a></tt>
*   <tt><a href="/getdate">getDate</a></tt>
*   <tt><a href="/getdtfmt">getDtFmt</a></tt>

## See Also

*   [Day of Week](/day-of-week) — routine to calculate the day of the week

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


