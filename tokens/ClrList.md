| Property      | Value |
|---------------|-------|
| Hex Value     | `$FA`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `EffListe `</li></ul> |

# `ClrList `

## Description
Sets the dimension of one or more listnames to 0.


<b>Availability</b>: Token available everywhere.

## Syntax
`ClrListlistname1[,listname2, ...,listname n]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listname1</b></td><td>listName</td><td></td></tr>

<tr><td>listname2</td><td>listName</td><td>Yes</td></tr>

<tr><td>listname n</td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `EDIT`, `4:ClrList`
<hr>

`ClrList` sets the length of a list (or several lists) to 0. This is virtually equivalent to deleting the list, except for several differences:

*   The list still exists — it will be shown in the memory management menu and the list menu
*   Calling the [dim(](/dim) command on it will return 0, rather than an error.
*   `ClrList` can clear multiple lists at the same time

## Advanced Uses

You might use `ClrList` when building up a list element by element and using `dim(` in the process:

```ti-basic
:ClrList L1
:While 10>dim(L1
:Input X
:X→L1(1+dim(L1
:End
```

## Optimization

Using [DelVar](/delvar) instead of `ClrList` allows you to save a tiny bit of memory (between 12 and 16 bytes) that `ClrList` doesn't delete, while keeping almost every aspect of the list clearing the same. If you are clearing several lists, you can separate them with commas as the arguments to `ClrList`, which can save space. Using `ClrList` is also substantially faster than `DelVar` if the list is going to be cleared many times.

## Error Conditions

*   **[ERR:SYNTAX](/errors#syntax)** is thrown if you leave off the [ʟ](/l) symbol when referring to a custom list (i.e., `ClrList` B will not work; you have to use `ClrList` ʟB).

## Related Commands

*   [ClrAllLists](/clralllists)
*   [DelVar](/delvar)
*   [dim(](/dim)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


