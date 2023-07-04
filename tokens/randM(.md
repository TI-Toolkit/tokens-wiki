| Property      | Value |
|---------------|-------|
| Hex Value     | `$20`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Matrix](<../categories/Matrix.md>) > [Math](<../categories/Matrix.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `MatAléat(`</li></ul> |

# `randM(`

## Description
Returns a random matrix of `rows` × `columns`.
Max rows x columns = 400 matrix elements.


<b>Availability</b>: Token available everywhere.

## Syntax
`randM(rows,columns)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>rows</b></td><td>integer</td><td></td></tr>

<tr><td><b>columns</b></td><td>integer</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `6:randM(`
<hr>

randM(_M_, _N_) generates an M by N matrix whose entries are pseudorandom integers between -9 and 9 inclusive.

_seed_→rand affects the output of randM(.

```ti-basic
0→rand
    0
randM(3,3)
    [[9  -3 -9]
     [4  -2 0 ]
     [-7 8  8 ]]
```

If you actually cared about the bounds of the random numbers, this command would not be very useful, since it's hard to manipulate the matrix to yield uniformly spread random numbers in a different range.

## Formulas

The entries of randM( are actually the outputs of successive calls to randInt(-9,9), filled in starting at the bottom right and moving left across each row from the last row to the first.

## Error Conditions

*   **[ERR:INVALID DIM](errors#invaliddim)** is thrown if the number of rows or columns of the matrix isn't an integer 1-99.

## Related Commands

*   [rand](rand.md)
*   [randInt(](randInt\(.md)
*   [randNorm(](randNorm\(.md)
*   [randBin(](randBin\(.md)
*   [randIntNoRep(](randIntNoRep\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


