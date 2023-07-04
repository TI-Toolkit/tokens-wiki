| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF05`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `convHeur(`</li></ul> |

# `timeCnv(`

## Description
Converts seconds to units of time that can be more easily understood for evaluation. The list is in {days,hours,minutes,seconds} format.


<b>Availability</b>: Token available everywhere.

## Syntax
`timeCnv(seconds)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>seconds</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `timeCnv`
<hr>

The timeCnv( command converts seconds into the equivalent days, hours, minutes, and seconds. You just specify a number of seconds (should be a whole number, although a decimal number would work too; the calculator will simply use the integer part and discard the decimal) and the calculator will automatically break the seconds up into the standard parts of time, storing them in [list](lists) format — {_days_,_hours_,_minutes_,_seconds_}. You can [store](store.md) this list to a variable for later use, or manipulate it the same way you do with other lists.

The number of seconds you specify can be as small or large as you want, although the number must be at least zero (in which case, the time list will be all zeroes). At the same time, you will run into the standard number precision problems that plague TI-Basic when specifying an extremely large or small number. Because of this, you should try to use numbers with less than 10 digits. Here is a simple example, where the time is exactly 1 day, 1 hour, 1 minute, and 1 second:

```ti-basic
:timeCnv(90061→L1
:Disp Ans
```

The time conversion is 60 seconds for a minute, 3600 (60*60) seconds for an hour, and 86400 (60*60*24) seconds for a day. Adding these three together plus the one second gives you the value that you see in the example. This is pretty basic math, so it should be easy to understand.

## Related Commands

*   [getTime](getTime.md)
*   [getDate](getDate.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Thom M, Xphoenix.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


