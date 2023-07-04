| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF0A`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `affHeure`</li></ul> |

# `getTime`

## Description
Returns a list giving the time according to the current value of the clock. The list is in {hour,minute,second} format. The time is returned in the 24 hour format.


<b>Availability</b>: Token available everywhere.

## Syntax
`getTime`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `getTime`
<hr>

The <tt>getTime</tt> command returns the current time that the clock has on the TI-84+/SE/CE calculators in [list](lists) format — {_hour_, _minute_, _second_}. You can [store](store.md) this list to a variable for later use, or manipulate it the same way you do with other lists. Of course, this command only works if the time has actually been set, so you should use the <tt><a href="setTime(.md">setTime(</a></tt> command before using it.

An interesting note about this command is that you cannot index individual elements directly; if you try, each element of the clock is multiplied by the index. You can, however, call the demand and thus store the result in <tt><a href="Ans.md">Ans</a></tt>, and then retrieve the individual elements.

![SCREEN01.JPG](http://tibasicdev.wikidot.com/local--files/gettime/SCREEN01.JPG)

## Related Commands

*   <tt><a href="getTmFmt.md">getTmFmt</a></tt>
*   <tt><a href="getTmStr(.md">getTmStr(</a></tt>
*   <tt><a href="setTime(.md">setTime(</a></tt>
*   <tt><a href="setTmFmt(.md">setTmFmt(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Jonathan King, kg583, RandomProductions, Socks.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


