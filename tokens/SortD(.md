| Property      | Value |
|---------------|-------|
| Hex Value     | `$E4`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[List](<../categories/List.md>) > [Ops](<../categories/List.md#Ops>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Tridécroi(`</li></ul> |

# `SortD(`

## Description
Sorts elements of `listname` in descending order.


<b>Availability</b>: Token available everywhere.

## Syntax
`SortD(listname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>listname</td><td>list</td><td>false</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>list</kbd>, `OPS`, `2:SortD(`
<hr>

## Description
Sorts elements of `keylistname` in descending order, then sorts each `dependlist` as a dependent list.


<b>Availability</b>: Token available everywhere.

## Syntax
`SortD(keylistname,dependlist1[,dependlist2,..., dependlist n])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>keylistname</td><td>list</td><td>false</td></tr>

<tr><td>dependlist1</td><td>list</td><td>false</td></tr>

<tr><td>dependlist2</td><td>list</td><td>true</td></tr>

<tr><td>dependlist n</td><td>list</td><td>true</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>list</kbd>, `OPS`, `2:SortD(`
<hr>

## Examples

Explanation 1
```ti-basic
code 1
```
---
Explanation 2
```ti-basic
code 2
```

## Error Conditions


## Advanced Notes


## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added

## Related Commands

    