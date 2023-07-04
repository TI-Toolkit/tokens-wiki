| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB29`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[List](<../categories/List.md>) > [Ops](<../categories/List.md#Ops>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `somCum(`</li></ul> |

# `cumSum(`

## Description
Returns a list of the cumulative sums of the elements in `list`, starting with the first element.


<b>Availability</b>: Token available everywhere.

## Syntax
`cumSum(list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `6:cumSum(`
<hr>

## Description
Returns a matrix of the cumulative sums of `matrix` elements. Each element in the returned matrix is a cumulative sum of a `matrix` column from top to bottom.


<b>Availability</b>: Token available everywhere.

## Syntax
`cumSum(matrix)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrix</b></td><td>matrix</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `0:cumSum(`
<hr>

<tt>cumSum(</tt> calculates the cumulative sums of a list, or of the columns of a matrix, and outputs them in a new list or matrix variable.

For a list, this means that the Nth element of the result is the sum of the first N elements of the list:

```ti-basic
cumSum({1,3,5,7,9})
    {1 4 9 16 25}
```

For a matrix, <tt>cumSum(</tt> is applied to each column in the same way as it would be for a list (but numbers in different columns are never added):

```ti-basic
[[0,1,1][0,1,3][0,1,5][0,1,7]]
    [[0 1 1]
     [0 1 3]
     [0 1 5]
     [0 1 7]]
cumSum(Ans)
    [[0 1 1]
     [0 2 4]
     [0 3 9]
     [0 4 16]]
```

## Advanced Uses

The <tt><a href="ΔList(.md">ΔList(</a></tt> command is very nearly the inverse of the cumSum( command - it calculates the differences between consecutive elements. For any list, <tt>ΔList(cumSum(<em>list</em>))</tt> will return the same list, but without its first element:

```ti-basic
ΔList(cumSum({1,2,3,4,5,6,7}))
    {2 3 4 5 6 7}
```

Removing the first element would otherwise be a difficult procedure involving the <tt><a href="seq(.md">seq(</a></tt> command, so this is a useful trick to know.

* * *

For a matrix, if you want to sum up the rows instead of the columns, use the <tt><sup>T</sup></tt> (<tt><a href="transpose.md">transpose</a></tt>) command.

## Related Commands

*   <tt><a href="ΔList(.md">ΔList(</a></tt>
*   <tt><sup>T</sup></tt> (<tt><a href="transpose.md">transpose</a></tt>)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


