| Property      | Value |
|---------------|-------|
| Hex Value     | `$14`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Matrix](<../categories/Matrix.md>) > [Math](<../categories/Matrix.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `chaîne(`</li></ul> |

# `augment(`

## Description
Returns a matrix, which is `matrixB` appended to `matrixA` as new columns.


<b>Availability</b>: Token available everywhere.

## Syntax
`augment( matrixA ,matrixB )`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrixA</b></td><td>matrix</td><td></td></tr>

<tr><td><b>matrixB</b></td><td>matrix</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `7:augment(`
<hr>

## Description
Returns a list, which is `listB` concatenated to the end of `listA`.


<b>Availability</b>: Token available everywhere.

## Syntax
`augment(listA,listB)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listA</b></td><td>list</td><td></td></tr>

<tr><td><b>listB</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `9:augment(`
<hr>

The <tt>augment(</tt> command is used to combine two lists or two matrices into one. For lists, this is done the obvious way: adding the elements of the second on to the elements of the first. For example:

```ti-basic
augment({1,2,3,4},{5,6,7
    {1 2 3 4 5 6 7}
```

For matrices, the columns of the second matrix are added after the columns of the first matrix: an R by C matrix augmented with an R by D matrix will result in an R by (C+D) matrix. For example:

```ti-basic
augment([[1][2]],[[3][4]
    [[1 3]
     [2 4]]
```

## Advanced Uses

Use the <tt><sup><a href="/transpose">T</a></sup></tt> (transpose) command if you want to combine two matrices vertically, rather than horizontally. For example:

```ti-basic
augment([[1,2]]T,[[3,4]]T)T
    [[1 2]
     [3 4]]
```

## Optimization

You may be tempted to use <tt>augment(</tt> to add one element to the end of a list:

```ti-basic
:augment(L1,{X→L1
```

However, the following way is faster and more memory-efficient while the program is running (although it increases the program's size):

```ti-basic
:X→L1(1+dim(L1
```

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if you try to augment a single number to a list, a common error — use {X instead of X.
*   **[ERR:DIM MISMATCH](/errors#dimmismatch)** is thrown if you try to augment two matrices with a different number of rows.
*   **[ERR:INVALID DIM](/errors#invaliddim)** is thrown if one of the arguments is a list with dimension 0, or if the result would have dimension over 999 (for lists) or 99x99 (for matrices).

## Related Commands

*   <tt><a href="/dim">dim(</a></tt>
*   <tt><a href="/seq-list">seq(</a></tt>
*   <tt><sup><a href="/transpose">T</a></sup></tt> (transpose)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


