| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF01`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `défHeure(`</li></ul> |

# `setTime(`

## Overview
Sets the time using an hour, minute, second format. The `hour` must be in 24 hour format, in which 13 = 1 p.m.


<b>Availability</b>: Token available everywhere.

## Syntax
`setTime(hour,minute, second)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>hour</b></td><td></td><td></td></tr>

<tr><td><b>minute</b></td><td></td><td></td></tr>

<tr><td><b>second</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `setTime(`
<hr>

## Description

The setTime( command sets the time of the clock on the TI-84+/SE calculators. It takes three arguments: the hour, the minute, and the second. The hour must be in 24 hour format — where 13 is equal to 1 P.M. — and the minute and second need to be a valid number within the appropriate range (1-60). For example, this would set the time to 12:30:30:

```ti-basic
:setTime(12,30,30
```

Once you have set the time, you can display it in two different formats on the [mode screen](settings) using the [setTmFmt(](setTmFmt\(.md) command: 12 (12 hour) or 24 (24 hour). Of course, the time will only show up if the clock is on; if you need to turn the clock on, use the [ClockOn](ClockOn.md) command, or scroll down to the 'TURN CLOCK ON' message that is displayed in place of the clock on the mode screen and press ENTER twice.

## Related Commands

*   [getTime](getTime.md)
*   [getTmFmt](getTmFmt.md)
*   [getTmStr(](getTmStr\(.md)
*   [setTmFmt(](setTmFmt\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, RandomProductions.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


