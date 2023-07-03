| Property      | Value |
|---------------|-------|
| Hex Value     | `$E2`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Matrix](<../categories/Matrix.md>) > [Math](<../categories/Matrix.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Remplir(`</li></ul> |

# `Fill(`

## Description
Stores `value` to each element in `matrixname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`Fill(value,matrixname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td>Yes</td></tr>

<tr><td><b>matrixname</b></td><td>matrix</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `4:Fill(`
<hr>

## Description
Stores `value` to each element in `listname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`Fill(value,listname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td>Yes</td></tr>

<tr><td><b>listname</b></td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `4:Fill(`
<hr>

The `Fill(` command takes an existing list or matrix variable and sets all its elements to a single number. It doesn't return anything and only works on already defined variables.

```ti-basic
{5}→dim(L1)
Fill(2,L1)
L1
    {2 2 2 2 2}

{3,4}→dim([A])
Fill(1,[A])
[A]
    [[1 1 1 1]
     [1 1 1 1]
     [1 1 1 1]]
```

`Fill(` is very fast: on a twenty-element real list, it takes only about 3.5 ms, much less than any vectorized list operation.

When `Fill(` is called on a list, the datatype of the list becomes the datatype of the number. That is, `Fill(1,L₁)` makes `L₁` a real list, and `Fill(i,L₁)` makes `L₁` a complex list.

## Optimization

When creating a new list or matrix you want to fill with zeroes, it's better to delete it then create it with [dim(](/dim), which will set all entries to 0, than to set its dimensions with dim( (which may not clear what was there before) then use Fill(.

## Errors

On a TI-84+CSE, using `Fill(List,List)` will cause a RAM clear. For example: `Fill({1,2,3},{1,2,3}` will cause a RAM Clear. This does not apply on any other models, as they only give you argument and data type errors.

## Related Commands

*   [augment(](/augment)
*   [dim(](/dim)
*   [seq(](/seq)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


