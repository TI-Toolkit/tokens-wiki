| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF04`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `défFmtHr(`</li></ul> |

# `setTmFmt(`

## Description
Sets the time format.
12 = 12 hour format24 = 24 hour format


<b>Availability</b>: Token available everywhere.

## Syntax
`setTmFmt(integer)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>integer</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `setTmFmt(`
<hr>

The setTmFmt( command sets the time format of the clock on the TI-84+/SE calculators when displaying the time on the [mode screen](settings). There are two different formats available, and you simply use the respective value (can be either a literal number or a variable) to display the desired one: 12 (12 hour) or 24 (24 hour). For example, this would set the time format to 24 hour:

```ti-basic
:setTmFmt(24
```

In order for the time format to work, you need to set the time using either the [setTime(](setTime\(.md) command, or by going into the set clock menu (accessible by pressing ENTER on the 'SET CLOCK' message that is displayed at the bottom of the mode screen). Of course, the time will only show up if the clock is on; if you need to turn the clock on, use the [ClockOn](ClockOn.md) command, or scroll down to the 'TURN CLOCK ON' message that is displayed in place of the clock on the mode screen and press ENTER twice.

## Related Commands

*   [getTime](getTime.md)
*   [setTime(](setTime\(.md)
*   [getTmFmt](getTmFmt.md)
*   [getTmStr(](getTmStr\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


