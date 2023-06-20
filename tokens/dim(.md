| Property      | Value |
|---------------|-------|
| Hex Value     | `$B5`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[List](<../categories/List.md>) > [Ops](<../categories/List.md#Ops>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `dim(`</li></ul> |

# `dim(`

## Description
Returns the dimension of `listname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`dim(listname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listname</b></td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `3:dim(`
<hr>

## Description
Returns the dimension of `matrixname` as a list.


<b>Availability</b>: Token available everywhere.

## Syntax
`dim(matrixname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrixname</b></td><td>matrix</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `3:dim(`
<hr>

## Description
Assigns a new dimension (`length`) to a new or existing `listname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`length→dim(listname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>length</b></td><td>integer</td><td>Yes</td></tr>

<tr><td><b>listname</b></td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `3:dim(`
<hr>

## Description
Assigns new dimensions to a new or existing `matrixname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`{rows,columns}→dim(matrixname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>rows</b></td><td>integer</td><td>Yes</td></tr>

<tr><td><b>columns</b></td><td>integer</td><td>Yes</td></tr>

<tr><td><b>matrixname</b></td><td>matrix</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `3:dim(`
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
| <b>TI-82</b> | 1.0 | `dim ` added |
| <b>TI-83</b> | 0.01013 | Renamed `dim ` to `dim(`

## Related Commands

