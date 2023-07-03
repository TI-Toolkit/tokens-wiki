| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF03`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `défFmtDt(`</li></ul> |

# `setDtFmt(`

## Description
Sets the date format.
1 = M/D/Y2 = D/M/Y3 = Y/M/D


<b>Availability</b>: Token available everywhere.

## Syntax
`setDtFmt(integer)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>integer</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `setDtFmt(`
<hr>

The setDtFmt( command sets the date format of the clock on the TI-84+/SE calculators when displaying the date on the [mode screen](/settings). There are three different formats available, and you simply use the respective value (can be either a literal number or a variable) to display the desired one: 1 (M/D/Y), 2 (D/M/Y), or 3 (Y/M/D). For example, this would set the date format to Month/Day/Year:

```ti-basic
:setDtFmt(1
```

In order for the date format to work, you need to set the date using either the [setDate(](/setdate) command, or by going into the set clock menu (accessible by pressing ENTER on the 'SET CLOCK' message that is displayed at the bottom of the mode screen). Of course, the date will only show up if the clock is on; if you need to turn the clock on, use the [ClockOn](/clockon) command, or scroll down to the 'TURN CLOCK ON' message that is displayed in place of the clock on the mode screen and press ENTER twice.

## Related Commands

*   [getDate](/getdate)
*   [setDate(](/setdate)
*   [getDtFmt](/getdtfmt)
*   [getDtStr(](/getdtstr)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


