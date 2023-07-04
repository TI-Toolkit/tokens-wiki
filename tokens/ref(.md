| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB2D`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Matrix](<../categories/Matrix.md>) > [Math](<../categories/Matrix.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Gauss(`</li></ul> |

# `ref(`

## Description
Returns the row-echelon form of a `matrix`.


<b>Availability</b>: Token available everywhere.

## Syntax
`ref(matrix)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrix</b></td><td>matrix</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `A:ref(`
<hr>

Given a matrix with at least as many columns as it has rows, the <tt>ref(</tt> command uses a technique called Gaussian elimination to put the matrix into row-echelon form.

This means that the leftmost N columns (if the matrix has N rows) of the matrix are upper triangular - all entries below the main diagonal are zero. What's more, every entry on the main diagonal is either 0 or 1.

```ti-basic
[[1,2,5,0][2,2,1,2][3,4,6,2]]
    [[1 2 5 0]
     [2 2 1 2]
     [3 4 6 2]
ref(Ans)►Frac
    [[1 4/3 2   2/3]
     [0 1   9/2 -1 ]
     [0 0   0   0  ]]
```

## Advanced Uses

In theory, a system of linear equations in N variables can be solved using the <tt>ref(</tt> command - an equation of the form $a_1x_1+\dots + a_nx_n = b$ becomes a row $a_1, \dots, a_n, b$, and is put into the matrix. If there is a sufficient number of conditions, the last row of the reduced matrix will give you the value of the last variable, and back-substitution will give you the others.

In practice, it's easier to use <tt><a href="/rref">rref(</a></tt> instead for the same purpose.

## Error Conditions

*   **[ERR:INVALID DIM](/errors#invaliddim)** is thrown if the matrix has more rows than columns.

## Related Commands

*   <tt><a href="/rref">rref(</a></tt>
*   <tt><a href="/rowswap">rowSwap(</a></tt>
*   <tt><a href="/rowplus">row+(</a></tt>
*   <tt><a href="/timesrow">*row(</a></tt>
*   <tt><a href="/timesrowplus">*row+(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


