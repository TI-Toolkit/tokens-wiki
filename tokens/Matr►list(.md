| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB39`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [M](<../categories/Catalog.md#M>)</li><li>[List](<../categories/List.md>) > [Ops](<../categories/List.md#Ops>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Matr►list(`</li></ul> |

# `Matr►list(`

## Description
Fills each `listname` with elements from each column in `matrix`.


<b>Availability</b>: Token available everywhere.

## Syntax
`Matr►list(matrix,listnameA,...,listname n)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrix</b></td><td>matrix</td><td>Yes</td></tr>

<tr><td><b>listnameA</b></td><td>list</td><td>Yes</td></tr>

<tr><td><b>...</b></td><td></td><td>Yes</td></tr>

<tr><td><b>listname n</b></td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `A:Matr►list(`
<hr>

## Description
Fills a `listname` with elements from a specified `column#` in `matrix`.


<b>Availability</b>: Token available everywhere.

## Syntax
`Matr►list(matrix,column#,listname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrix</b></td><td>matrix</td><td>Yes</td></tr>

<tr><td><b>column#</b></td><td></td><td>Yes</td></tr>

<tr><td><b>listname</b></td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `A:Matr►list(`
<hr>

The Matr►list( command stores one or more columns of a matrix (or expression resulting in a matrix) to list variables. The syntax is simple: first enter the matrix, then enter the list or lists you want to store columns to. The first (leftmost) column will be stored to the first list entered, the second column will be stored to the second list, and so on. For example:

```ti-basic
[[11,12,13,14][21,22,23,24][31,32,33,34
        [[11 12 13 14]
         [21 22 23 24]
         [31 32 33 34]]
Matr►list(Ans,L1,L2
        Done
L1
        {11 21 31}
L2
        {12 22 32}
```

If there are more lists than columns in the matrix when doing Matr►list(, the extra lists will be ignored.

Matr►list( can also be used to extract a specific column of a matrix to a list. The order of the arguments is: matrix, column number, list name.

```ti-basic
[[11,12,13,14][21,22,23,24][31,32,33,34
        [[11 12 13 14]
         [21 22 23 24]
         [31 32 33 34]]
Matr►list(Ans,4,L1
        Done
L1
        {14 24 34}
```

## Advanced Uses

While the command deals with columns, occasionally you might want to store the matrix to lists by rows. The <sup><a href="/transpose">T</a></sup> (transpose) command is your friend here: applying it to the matrix will flip it diagonally, so that all rows will become columns and vice-versa. For example:

[[11,12,13,14][21,22,23,24][31,32,33,34  
         [[11 12 13 14]  
         [21 22 23 24]  
         [31 32 33 34]]  
Matr►list(Ans<sup>T</sup>,L<sub>1</sub>,L<sub>2</sub>  
         Done  
L<sub>1</sub>  
         {11 12 13 14}  
L<sub>2</sub>  
         {21 22 23 24}

## Optimizations

When using Matr►list( to store to named lists, only the first list must have an ʟ in front of its name — it can be omitted for the rest. For example:

```ti-basic
:Matr►list([A],ʟCOL1,ʟCOL2,ʟCOL3
can be
:Matr►list([A],ʟCOL1,COL2,COL3
```

On the other hand, when storing a specific column of a matrix to a named list, the list does not need to be preceded by an ʟ.

```ti-basic
:Matr►list([A],N,ʟCOL1
can be
:Matr►list([A],N,COL1
```

## Related Commands

*   [List►matr(](/list-matr)
*   <sup>T</sup> ([transpose](/transpose))

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


