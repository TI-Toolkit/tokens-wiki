| Property      | Value |
|---------------|-------|
| Hex Value     | `$16`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Matrix](<../categories/Matrix.md>) > [Math](<../categories/Matrix.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ligne+(`</li></ul> |

# `row+(`

## Overview
Returns a matrix with `rowA` of `matrix` added to `rowB` and stored in `rowB`.


<b>Availability</b>: Token available everywhere.

## Syntax
`row+(matrix,rowA,rowB)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrix</b></td><td>matrix</td><td></td></tr>

<tr><td><b>rowA</b></td><td></td><td></td></tr>

<tr><td><b>rowB</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `D:row+(`
<hr>

## Description

The row+( command adds one row of a matrix to the second, and returns the result. It is an elementary row operation used in Gaussian Elimination.

```ti-basic
[[1,2][3,4]]
    [[1 2]
     [3 4]]
row+(Ans,1,2)
    [[1 2]
     [4 6]]
```

## Advanced Uses

You can add columns instead of rows with the aid of the <sup>T</sup> ([transpose](transpose.md)) command.

## Error Conditions

*   **[ERR:INVALID DIM](errors#invaliddim)** is thrown if one of the row arguments isn't a valid row (larger than the matrix size, or otherwise bad)

## Related Commands

*   [rowSwap(](rowSwap\(.md)
*   [*row(](*row\(.md)
*   [*row+(](*row+\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, jnesselr, Weregoose.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


