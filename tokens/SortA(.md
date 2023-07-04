| Property      | Value |
|---------------|-------|
| Hex Value     | `$E3`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[List](<../categories/List.md>) > [Ops](<../categories/List.md#Ops>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Tricroi(`</li></ul> |

# `SortA(`

## Description
Sorts elements of `listname` in ascending order.


<b>Availability</b>: Token available everywhere.

## Syntax
`SortA(listname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listname</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `1:SortA(`
<hr>

## Description
Sorts elements of `keylistname` in ascending order, then sorts each `dependlist` as a dependent list.


<b>Availability</b>: Token available everywhere.

## Syntax
`SortA(keylistname,dependlist1[,dependlist2,...,dependlist n])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>keylistname</b></td><td>list</td><td></td></tr>

<tr><td><b>dependlist1</b></td><td>list</td><td></td></tr>

<tr><td>dependlist2</td><td>list</td><td>Yes</td></tr>

<tr><td>dependlist n</td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `1:SortA(`
<hr>

The SortA( command sorts a list in ascending order. It does not return it, but instead edits the original list variable (so it takes only list variables as arguments).

SortA( can also be passed multiple lists. In this case, it will sort the first list, and reorder the others so that elements which had the same indices initially will continue having the same indices. For example, suppose the X and Y coordinates of some points were stored in ʟX and ʟY, so that the Nth point had coordinates ʟX(N) and ʟY(N). Then SortA(ʟX,ʟY) would sort the points by their x-coordinates, still preserving the same points.

However, SortA( is not stable: if several elements in the first list are equal, then the corresponding elements in the subsequent lists may still end up being in a different order than they were initially.

## Algorithm

The algorithm used by SortA( and [SortD(](SortD\(.md) appears to be a modified selection sort. It is still O(n<sup>2</sup>) on all inputs, but for some reason takes twice as long on a list with all equal elements. It is not stable.

## Related Commands

*   [SortD(](SortD\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


