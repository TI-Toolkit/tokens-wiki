| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB07`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `jed(`</li></ul> |

# `dbd(`

## Description
Calculates the number of days between `date1` and `date2` using the actual-day-count method.


<b>Availability</b>: Token available everywhere.

## Syntax
`dbd(date1,date2)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>date1</b></td><td></td><td></td></tr>

<tr><td><b>date2</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `D:dbd(`
<hr>

The <tt>dbd(</tt> command calculates the number of days between two dates. Each date is encoded as a single number in one of two formats (two formats can be mixed in the same command):

*   day, month, year — DDMM.YY (e.g. April 26, 1989 would be 2604.89)
*   month, day, year — MM.DDYY (e.g. April 26, 1989 would be 04.2689 or just 4.2689)

Because this is just a number like any other, leading zeroes and trailing zeroes after the decimal can be dropped. For example, January 1, 2000 does not have to be formatted as 0101.00 but can be simply 101.

Since there are only two digits for the year, obviously only a century's worth of dates can be handled. The calculator assumes this range to be from January 1, 1950 to December 31, 2049.

If the second date comes before the first, <tt>dbd(</tt> will return a negative number of days, so the range of possible results is from -36524 to 36524.

Finally, <tt>dbd(</tt> will also work for list inputs in the usual manner: a single date will be compared against every date in a list, and two lists of dates will be paired up.

```ti-basic
dbd(612.07,2512.07
    19
dbd(1.0207,1.0107
    -1
dbd(1.0107,{2.0107,3.0107,4.0107})
    {31 59 90}
```

## Advanced Uses

The <tt>dbd(</tt> command can be used to calculate the [day of week](/day-of-week) without using the <tt><a href="/dayofwk">dayOfWk(</a></tt> command, which is only available on the TI-84+ or higher.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if a date is improperly formatted.

## Related Commands

*   <tt><a href="/dayofwk">dayOfWk(</a></tt>

## See Also

*   [Day of Week](/day-of-week)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


