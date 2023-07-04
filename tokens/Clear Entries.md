| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB57`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Memory](<../categories/Memory.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Efface entrées`</li></ul> |

# `Clear Entries`

## Overview
Clears the contents of the Last Entry storage area.


<b>Availability</b>: Token available everywhere.

## Syntax
`Clear Entries`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>mem</kbd>, `MEMORY`, `3:Clear Entries`
<hr>

## Description

Normally, by pressing 2nd ENTER repeatedly, you can cycle through some of the recent entries on the home screen. With the <tt>Clear Entries</tt> command, this history is cleared (only <tt>Clear Entries</tt> remains in the history).

This can be used to free some memory, although it's recommended not to do this in a program (because clearing things without asking first isn't nice). Aside from that, maybe the only reason to use <tt>Clear Entries</tt> is to protect your privacy — although someone looking at your entries will know you cleared something, so it's not that effective.

## Related Commands

*   <tt><a href="ClrList.md">ClrList</a></tt>
*   <tt><a href="ClrAllLists.md">ClrAllLists</a></tt>
*   <tt><a href="GarbageCollect.md">GarbageCollect</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


