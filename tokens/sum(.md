| Property      | Value |
|---------------|-------|
| Hex Value     | `$B6`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[List](<../categories/List.md>) > [Math](<../categories/List.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `somme(`</li></ul> |

# `sum(`

## Description
Returns the sum of elements of `list` from `start` to `end`.


<b>Availability</b>: Token available everywhere.

## Syntax
`sum(list[,start,end])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

<tr><td>start</td><td></td><td>Yes</td></tr>

<tr><td>end</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `5:sum(`
<hr>

The sum( command calculates the sum of all or part of a list.

When you use it with only one argument, the list, it sums up all the elements of the list. You can also give it a bound of _start_ and _end_ and it will only sum up the elements starting and ending at those indices (inclusive).

```ti-basic
sum({1,2,3,4,5})
    15
sum({1,2,3,4,5},2,4)
    9
sum({1,2,3,4,5},3)
    12
```

## Optimization

If the value of _end_ is the last element of the list, it can be omitted:

```ti-basic
sum({1,2,3,4,5},3,5)
can be
sum({1,2,3,4,5},3)
```

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown if the starting or ending value aren't positive integers.
*   **[ERR:INVALID DIM](errors#invaliddim)** is thrown if the starting or ending value exceed the size of the list, or are in the wrong order.

## Related Commands

*   [prod(](prod\(.md)
*   [dim(](dim\(.md)
*   [seq(](seq\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `sum ` added |
| <b>TI-83</b> | 0.01013 | Renamed `sum ` to `sum(`


