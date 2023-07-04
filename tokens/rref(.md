| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB2E`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Matrix](<../categories/Matrix.md>) > [Math](<../categories/Matrix.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Gauss-Jordan(`</li></ul> |

# `rref(`

## Description
Returns the reduced row-echelon form of a `matrix`.


<b>Availability</b>: Token available everywhere.

## Syntax
`rref(matrix)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrix</b></td><td>matrix</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `B:rref(`
<hr>

Given a matrix with at least as many columns as rows, the <tt>rref(</tt> command puts a matrix into reduced row-echelon form using Gaussian elimination.

This means that as many columns of the result as possible will contain a pivot entry of 1, with all entries in the same column, or to the left of the pivot, being 0.

```ti-basic
[[1,2,5,0][2,2,1,2][3,4,6,2]]
    [[1 2 5 0]
     [2 2 1 2]
     [3 4 7 3]]
rref(Ans)
    [[1 0 0 6   ]
     [0 1 0 -5.5]
     [0 0 1 1   ]]
```

## Advanced Uses

The rref( command can be used to solve a system of linear equations. First, take each equation, in the standard form of $a_1x_1+\dots + a_nx_n = b$, and put the coefficients into a row of the matrix.

Then, use <tt>rref(</tt> on the matrix. There are three possibilities now:

*   If the system is solvable, the left part of the result will look like the identity matrix. Then, the final column of the matrix will contain the values of the variables.
*   If the system is inconsistent, and has no solution, then it will end with rows that are all 0 except for the last entry.
*   If the system has infinitely many solutions, it will end with rows that are all 0, including the last entry.

This process can be done by a program fairly easily. However, unless you're certain that the system will always have a unique solution, you should check that the result is in the correct form, before taking the values in the last column as your solution. The <tt><a href="Matr►list(.md">Matr►list(</a></tt> command can be used to store this column to a list.

## Error Conditions

*   **[ERR:INVALID DIM](errors#invaliddim)** is thrown if the matrix has more rows than columns.

## Related Commands

*   <tt><a href="ref(.md">ref(</a></tt>
*   <tt><a href="rowSwap(.md">rowSwap(</a></tt>
*   <tt><a href="row+(.md">row+(</a></tt>
*   <tt><a href="*row(.md">*row(</a></tt>
*   <tt><a href="*row+(.md">*row+(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


