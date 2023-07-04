| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF09`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `affDate`</li></ul> |

# `getDate`

## Overview
Returns a list giving the date according to the current value of the clock. The list is in {year,month,day} format.


<b>Availability</b>: Token available everywhere.

## Syntax
`getDate`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `getDate`
<hr>

## Description

The <tt>getDate</tt> command returns the current date that the clock has on the TI-84+/SE/CE calculators in [list](lists) format — {_year_, _month_, _day_}. You can [store](store.md) this list to a variable for later use, or manipulate it the same way you do with other lists. Of course, this command only works if the date has actually been set, so you should use the <tt><a href="setDate(.md">setDate(</a></tt> command before using it.

An interesting note about this command is that you cannot index <tt>getDate</tt> directly to get individual elements; if you try, each element of the clock is instead multiplied by the number. You may, however, call the command and thus store it in <tt><a href="Ans.md">Ans</a></tt>, then retrieve individual elements.

![SCREEN02.BMP](http://tibasicdev.wikidot.com/local--files/getdate/SCREEN02.BMP)

## Related Commands

*   <tt><a href="getDtFmt.md">getDtFmt</a></tt>
*   <tt><a href="getDtStr(.md">getDtStr(</a></tt>
*   <tt><a href="setDate(.md">setDate(</a></tt>
*   <tt><a href="setDtFmt(.md">setDtFmt(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Jonathan King, kg583, RandomProductions.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


