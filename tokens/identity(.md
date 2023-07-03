| Property      | Value |
|---------------|-------|
| Hex Value     | `$B4`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Matrix](<../categories/Matrix.md>) > [Math](<../categories/Matrix.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `identité(`</li></ul> |

# `identity(`

## Description
Returns the identity matrix of `dimension` rows x `dimension` columns.


<b>Availability</b>: Token available everywhere.

## Syntax
`identity(dimension)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>dimension</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `5:identity(`
<hr>

The `identity(` command generates an identity matrix: that is, a matrix [B] such that for any other matrix [A], [A]*[B]=[A] (if [A] is the right size to make the multiplication valid).

The identity matrix is square (that is, the row dimension equals the column dimension); all of its elements are 0 except for the elements along the main diagonal (the diagonal going from top left to bottom right).

The command itself takes one argument: the size of the matrix, used for both row and column size, that is, `identity(n)` creates an _n_ by _n_ matrix.

```ti-basic
:dim([A]
:identity(Ans(2→[B]
:[A][B]=[A]  // should always return 1, meaning 'true'
```

## Optimization

The `identity(` command can be used as a quick way to create an empty square matrix: `0identity(n)` will create an _n_ by _n_ matrix containing only 0 as an element. This is faster and smaller than the [dim(](/dim) and [Fill(](/fill) commands used for the same purpose:

```ti-basic
:{5,5→dim([A]
:Fill(0,[A]
can be
:0identity(5→[A]
```

## Error Conditions

*   **[ERR:INVALID DIM](/errors#invaliddim)** occurs if the size is not an integer 1-99. In practice, however, `identity(21)` is already too large for the calculator to generate.
*   **[ERR:MEMORY](/errors#memory)** occurs if the size of the created matrix exceeds memory limits. This limit is hard-fixed to 3611 bytes (the size of a 20x20 matrix), regardless of having sufficient RAM to hold a larger matrix.

## Related Commands

*   [det(](/det)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `identity ` added |
| <b>TI-83</b> | 0.01013 | Renamed `identity ` to `identity(`


