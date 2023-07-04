| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB3A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[List](<../categories/List.md>) > [Ops](<../categories/List.md#Ops>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `List►matr(`</li></ul> |

# `List►matr(`

## Overview
Fills `matrixname` column by column with the elements from each specified `listname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`List►matr(listname1,...,listname n,matrixname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listname1</b></td><td>listName</td><td></td></tr>

<tr><td><b>...</b></td><td></td><td></td></tr>

<tr><td><b>listname n</b></td><td>list</td><td></td></tr>

<tr><td><b>matrixname</b></td><td>matrix</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `0:List`, `matr(`
<hr>

## Description

The List►matr( builds a matrix by combining several list expressions, and stores it to the specified variable ([A] through [J]). Each list specifies a column of the matrix: the first list will be stored down the first (leftmost) column, the second list down the second column, and so on. For example:

```ti-basic
List►matr({1,2,3},{10,20,30},{100,200,300},[A]
        Done
[A]
        [[1 10 100]
         [2 20 200]
         [3 30 300]]
```

## Advanced Uses

The calculator can actually handle lists that are not the same size. It will pad zeroes to the shorter lists, until they have the same length as the longest list.

```ti-basic
List►matr({1,2,3},{10},{100,200},[A]
        Done
[A]
        [[1 10 100]
         [2  0 200]
         [3  0   0]]
```

## Error Conditions

*   **[ERR:ARGUMENT](errors#argument)** is thrown if there are more than 99 lists (since a matrix can be at most 99x99)
*   **[ERR:INVALID DIM](errors#invaliddim)** is thrown if one of the lists is longer than 99 elements (since a matrix can be at most 99x99)

## Related Commands

*   [Matr►list(](Matr►list\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, thornahawk, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


