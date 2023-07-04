| Property      | Value |
|---------------|-------|
| Hex Value     | `$B3`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Matrix](<../categories/Matrix.md>) > [Math](<../categories/Matrix.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `dét(`</li></ul> |

# `det(`

## Description
Returns determinant of `matrix`.


<b>Availability</b>: Token available everywhere.

## Syntax
`det(matrix)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrix</b></td><td>matrix</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `1:det(`
<hr>

The <tt>det(</tt> command calculates the [determinant](https://mathworld.wolfram.com/Determinant.html) of a square matrix. If its argument is not a square matrix, [ERR:INVALID DIM](errors#invaliddim) will be thrown.

## Advanced Uses

If [A] is an N×N matrix, then the roots of det([A]-X identity(N)) are the [eigenvalues](https://mathworld.wolfram.com/Eigenvalue.html) of [A].

## Formulas

For 2×2 matrices, the determinant is simply

(1) $`\begin{align} \det\left( \begin{bmatrix} a & b\\c & d \end{bmatrix} \right) = \begin{vmatrix} a & b\\c & d \end{vmatrix} = ad-bc \end{align}`$ 

For larger matrices, the determinant can be computed using the [Laplace expansion](http://en.wikipedia.org/wiki/Laplace_expansion), which allows you to express the determinant of an n×n matrix in terms of the determinants of (n-1)×(n-1) matrices. However, since the Laplace expansion takes $O\left( n! \right)$ operations, the method usually used in calculators is [Gaussian elimination](https://mathworld.wolfram.com/GaussianElimination.html), which only needs $O\left( n^3 \right)$ operations.

The matrix is first decomposed into a unit lower-triangular matrix and an upper-triangular matrix using elementary row operations:

(2) $`\begin{pmatrix} {1}&{}&{}\\ {\vdots}&{\ddots}&{}\\ {\times}&{\cdots}&{1}\end{pmatrix} \begin{pmatrix}{\times}&{\cdots}&{\times}\\ {}&{\ddots}&{\vdots}\\ {}&{}&{\times} \end{pmatrix}`$ 

The determinant is then calculated as the product of the diagonal elements of the upper-triangular matrix.

## Error Conditions

*   **[ERR:INVALID DIM](errors#invaliddim)** is thrown when the matrix is not square.

## Related Commands

*   <tt><a href="identity(.md">identity(</a></tt>
*   <tt><a href="ref(.md">ref(</a></tt>
*   <tt><a href="rref(.md">rref(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Myles_Zadok, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `det ` added |
| <b>TI-83</b> | 0.01013 | Renamed `det ` to `det(`


