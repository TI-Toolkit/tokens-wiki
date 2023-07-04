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

<tt>ClrList</tt> sets the length of a list (or several lists) to 0. This is virtually equivalent to deleting the list, except for several differences:

*   The list still exists — it will be shown in the memory management menu and the list menu
*   Calling the <tt><a href="/dim">dim(</a></tt> command on it will return 0, rather than an error.
*   <tt>ClrList</tt> can clear multiple lists at the same time

## Advanced Uses

You might use <tt>ClrList</tt> when building up a list element by element and using <tt>dim(</tt> in the process:

```ti-basic
:ClrList L1
:While 10>dim(L1
:Input X
:X→L1(1+dim(L1
:End
```

## Optimization

Using <tt><a href="/delvar">DelVar</a></tt> instead of <tt>ClrList</tt> allows you to save a tiny bit of memory (between 12 and 16 bytes) that <tt>ClrList</tt> doesn't delete, while keeping almost every aspect of the list clearing the same. If you are clearing several lists, you can separate them with commas as the arguments to <tt>ClrList</tt>, which can save space. Using <tt>ClrList</tt> is also substantially faster than <tt>DelVar</tt> if the list is going to be cleared many times.

## Error Conditions

*   **[ERR:SYNTAX](/errors#syntax)** is thrown if you leave off the [ʟ](/l) symbol when referring to a custom list (i.e., <tt>ClrList</tt> B will not work; you have to use <tt>ClrList</tt> ʟB).

## Related Commands

*   <tt><a href="/clralllists">ClrAllLists</a></tt>
*   <tt><a href="/delvar">DelVar</a></tt>
*   <tt><a href="/dim">dim(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


