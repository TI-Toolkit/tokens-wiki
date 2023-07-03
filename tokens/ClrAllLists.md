| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB52`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Memory](<../categories/Memory.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `EffToutListes`</li></ul> |

# `ClrAllLists`

## Description
Sets to `0` the dimension of all lists in memory.


<b>Availability</b>: Token available everywhere.

## Syntax
`ClrAllLists`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>mem</kbd>, `MEMORY`, `4:ClrAllLists`
<hr>

The `ClrAllLists` command sets the dimension (length) of all lists to zero. This is virtually equivalent to deleting the lists, except for two differences:

*   The lists still exist and will show up in the list menu and the memory management menu.
*   The [dim(](/dim) command will return 0 for a cleared list, rather than an error.

However, accessing a cleared list in any other way will return an error, just as for a deleted list.

The `ClrAllLists` command should **never** be used in a program you give to someone else or upload - unless the user is aware of this effect, they might lose important data stored in one of their lists. There is no way to limit the effect of `ClrAllLists`, so a program should use [ClrList](/clrlist) instead to avoid affecting unrelated lists (this is assuming you already want to use this questionably-useful effect).

Outside a program (or in a program for personal use), you might use this command to clear the contents of your lists to free up memory, while still not deleting the lists. This might possibly be convenient. Maybe.

## Related Commands

*   [ClrList](/clrlist)
*   [DelVar](/delvar)
*   [dim(](/dim)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


