| Property      | Value |
|---------------|-------|
| Hex Value     | `$B7`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[List](<../categories/List.md>) > [Math](<../categories/List.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `prod(`</li></ul> |

# `prod(`

## Description
Returns product of `list` elements between `start` and `end`


<b>Availability</b>: Token available everywhere.

## Syntax
`prod(list[,start,end])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td>Yes</td></tr>

<tr><td>start</td><td></td><td><b>No</b></td></tr>

<tr><td>end</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `6:prod(`
<hr>

The prod( command calculates the product of all or part of a list.

When you use it with only one argument, the list, it multiplies all the elements of the list. You can also give it a bound of _start_ and _end_ and it will only multiply the elements starting and ending at those indices (inclusive).

```ti-basic
prod({1,2,3,4,5})
    120
prod({1,2,3,4,5},2,4)
    24
prod({1,2,3,4,5},3)
    60
```

## Optimization

If the value of _end_ is the last element of the list, it can be omitted:

```ti-basic
prod({1,2,3,4,5},3,5)
can be
prod({1,2,3,4,5},3)
```

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** if the starting or ending value aren't positive integers.
*   **[ERR:INVALID DIM](/errors#invaliddim)** if the starting or ending value exceed the size of the list, or are in the wrong order.

## Related Commands

*   [sum(](/sum)
*   [dim(](/dim)
*   [seq(](/seq-list)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


