| Property      | Value |
|---------------|-------|
| Hex Value     | `$15`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Matrix](<../categories/Matrix.md>) > [Math](<../categories/Matrix.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `permutLigne(`</li></ul> |

# `rowSwap(`

## Description
Returns a matrix with `rowA` of `matrix` swapped with `rowB`.


<b>Availability</b>: Token available everywhere.

## Syntax
`rowSwap(matrix,rowA,rowB)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrix</b></td><td>matrix</td><td></td></tr>

<tr><td><b>rowA</b></td><td></td><td></td></tr>

<tr><td><b>rowB</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `C:rowSwap(`
<hr>

The rowSwap( command swaps two rows of a matrix and returns the result. It is an elementary row operation used in Gaussian Elimination.

```ti-basic
[[1,2][3,4]]
    [[1 2]
     [3 4]]
rowSwap(Ans,1,2)
    [[3 4]
     [1 2]]
```

## Advanced Uses

You can swap columns instead of rows with the aid of the <sup>T</sup> ([transpose](/transpose)) command.

## Error Conditions

*   **[ERR:INVALID DIM](/errors#invaliddim)** is thrown if one of the row arguments isn't a valid row (larger than the matrix size, or otherwise bad)

## Related Commands

*   [row+(](/rowplus)
*   [*row(](/timesrow)
*   [*row+(](/timesrowplus)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


