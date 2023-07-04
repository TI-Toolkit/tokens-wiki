| Property      | Value |
|---------------|-------|
| Hex Value     | `$BBCE`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [G](<../categories/Catalog.md#G>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `RéorganiserMém`</li></ul> |

# `GarbageCollect`

## Description
Displays the garbage collection menu to allow cleanup of unused archive memory.


<b>Availability</b>: Token available everywhere.

## Syntax
`GarbageCollect`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `GarbageCollect`
<hr>

A bit of a preamble: unlike RAM, which is the easy-to-access memory, Flash ROM (the archive), used for long-term storage on the 83+ and higher, can't be written to easily. Skipping over technicalities, what's written in the archive once is semi-permanent, and can't be written to again unless an entire 64KB sector of memory is erased.

As a result, when you delete a variable from archive, the calculator doesn't delete it immediately (there may be other, good variables in the same block that would get erased as well), it just marks it as deleted. Similarly, when you unarchive a variable, its data is copied to RAM and the original is marked as deleted.

Naturally, this can't be done forever: sooner or later you'll run out of space in the archive because all of it is taken up by these "garbage variables". At this point, the calculator does something known as "garbage collecting". It copies the actually-used variables in each sector to a backup sector (set aside just for this purpose), then erases it; the process is repeated for the other sectors. Additionally, the variables are rearranged so that they aren't spread out all over the place; this makes it more likely that a spot will be found for large variables.

While "garbage collecting" will be done automatically when it's absolutely necessary, this may be a time-consuming process at that stage. Instead, you can call the <tt>GarbageCollect</tt> command yourself periodically (how often depends on your calculator habits, but generally once a month or so could work) to keep the Flash ROM in a semi-neat state, and then it will be a fairly quick process.

During garbage collection, a menu will appear that asks you "Garbage Collect?", giving you the options No and Yes. If you didn't select the <tt>GarbageCollect</tt> command yourself, it's highly recommended to select Yes. If you did select it, you probably want to garbage collect, so you should also select Yes. At that point, the message "Garbage collecting…" will be displayed for some time, and then the process will end.

## Advanced Uses

To avoid garbage collecting often, reduce the amount of times you archive and unarchive variables. There's also the consideration that too many writes to the Flash ROM (which are directly related to the number of GarbageCollects you do) can, in theory, wear it out. This probably would take much longer than anyone's used a TI-83+ calculator so far, though, and in all probability you don't really have to worry about this.

## Related Commands

*   <tt><a href="/archive">Archive</a></tt>
*   <tt><a href="/unarchive">UnArchive</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83+</b> | 1.03 | Added |


