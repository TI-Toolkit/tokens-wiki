| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB4A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ListesDéfaut `</li></ul> |

# `SetUpEditor `

## Description
Removes all list names from the stat list editor, and then restores list names `L1` through `L6` to columns `1` through `6`.


<b>Availability</b>: Token available everywhere.

## Syntax
`SetUpEditor`

## Location
<tt><kbd><b>stat</b></kbd></tt>, `EDIT`, `5:SetUpEditor`
<hr>

## Description
Removes all list names from the stat list editor, then sets it up to display one or more `listnames` in the specified order, starting with column `1`.


<b>Availability</b>: Token available everywhere.

## Syntax
`SetUpEditor listname1[,listname2,...,listname20]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>listname1</td><td>listName</td><td>false</td></tr>

<tr><td>listname2</td><td>listName</td><td>true</td></tr>

<tr><td>...</td><td></td><td>true</td></tr>

<tr><td>listname20</td><td>listName</td><td>true</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `EDIT`, `5:SetUpEditor`
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
| <b>TI-83</b> | 1.010 | Added

## Related Commands

    