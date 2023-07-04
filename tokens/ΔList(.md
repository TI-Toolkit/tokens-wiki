| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB2C`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `Δliste(`</li></ul> |

# `ΔList(`

## Description
Returns a list containing the differences between consecutive elements in `list`.


<b>Availability</b>: Token available everywhere.

## Syntax
`ΔList(list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>Δ</b></td><td></td><td></td></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `7:List(`
<hr>

<tt>ΔList(</tt> calculates the differences between consecutive terms of a list, and returns them in a new list.

```ti-basic
ΔList({0,1,4,9,16,25,36})
    {1 3 5 7 9 11}
```

## Advanced Uses

The ΔList( command is very nearly the inverse of the [cumSum(](/cumsum) command, which calculates the cumulative sums of a list. For any list, <tt>ΔList(cumSum(<em>list</em>))</tt> will return the same list, but without its first element:

```ti-basic
ΔList(cumSum({1,2,3,4,5,6,7}))
    {2 3 4 5 6 7}
```

Removing the first element would otherwise be a difficult procedure involving the [seq(](/seq-list) command, so this is a useful trick to know.

If a list is sorted in ascending order, <tt>min(ΔList(<em>list</em>))</tt> will return 0 (false) if there are repeating values in the list, and a value corresponding to true if they are all distinct. The number of repeating elements can be determined similarly via <tt>1+sum(0≠ΔList(<em>list</em>))</tt> (again, so long as the list is sorted).

## Error Conditions

*   **[ERR:INVALID DIM](/errors#invaliddim)** is thrown if <tt>ΔList(</tt> is run on a single element list.

## Related Commands

*   <tt><a href="/sum">sum(</a></tt>
*   <tt><a href="/cumsum">cumSum(</a></tt>
*   <tt><a href="/augment">augment(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


