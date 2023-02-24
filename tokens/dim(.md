| Property      | Value |
|---------------|-------|
| Hex Value     | `$B5`|
| Categories    | <ul><li>List\Ops</li><li>Catalog\D</li></ul> |
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

<tr><td>listname</td><td>list</td><td>false</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>list</kbd>, `OPS`, `3:dim(`
<hr>

## Description
Returns the dimension of `matrixname` as a list.


<b>Availability</b>: Token available everywhere.

## Syntax
`dim(matrixname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>matrixname</td><td></td><td>false</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>matrix</kbd>, `MATH`, `3:dim(`
<hr>

## Description
Assigns a new dimension (`length`) to a new or existing `listname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`length→dim(listname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>length</td><td></td><td>false</td></tr>

<tr><td>→</td><td></td><td>false</td></tr>

<tr><td>listname</td><td>list</td><td>false</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>list</kbd>, `OPS`, `3:dim(`
<hr>

## Description
Assigns new dimensions to a new or existing `matrixname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`{rows,columns}→dim(matrixname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>rows</td><td></td><td>false</td></tr>

<tr><td>columns</td><td></td><td>false</td></tr>

<tr><td>→</td><td></td><td>false</td></tr>

<tr><td>matrixname</td><td></td><td>false</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>matrix</kbd>, `MATH`, `3:dim(`
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

    