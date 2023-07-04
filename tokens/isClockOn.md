| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF0E`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `actHorl`</li></ul> |

# `isClockOn`

## Overview
Identifies if clock is ON or OFF. Returns 1 if the clock is ON. Returns 0 if the clock is OFF.


<b>Availability</b>: Token available everywhere.

## Syntax
`isClockOn`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `isClockOn`
<hr>

## Description

The <tt>isClockOn</tt> command returns whether the clock on the TI-84+/SE calculators is on or off. The command will return 1 if the clock is enabled and 0 if it is not. You can store it to a [variable](variable.md) for later use, or use it in [conditionals](conditionals.md) and [loops](loops.md) as part of the condition. For example, here is how you would check to see if the clock is on:

```ti-basic
:If isClockOn
:Then
  (code if clock is on)
:Else
  (code if clock is off)
:End
```

## Related Commands

*   <tt><a href="ClockOff.md">ClockOff</a></tt>
*   <tt><a href="ClockOn.md">ClockOn</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Jonathan King, kg583, Xphoenix.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


