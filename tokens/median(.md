| Property      | Value |
|---------------|-------|
| Hex Value     | `$1F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [M](<../categories/Catalog.md#M>)</li><li>[List](<../categories/List.md>) > [Math](<../categories/List.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `médianne`</li></ul> |

# `median(`

## Description
Returns the median of `list` with frequency `freqlist`.


<b>Availability</b>: Token available everywhere.

## Syntax
`median(list[,freqlist])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist</td><td>list</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `4:median(`
<hr>

The median( command finds the [median](https://en.wikipedia.org/wiki/Median) of a list. It takes a list of real numbers as a parameter. For example:

```ti-basic
:Prompt L1
:Disp "MEDIAN OF L1",median(L1
```

That's not all, however. Awesome as the median( command is, it can also take a frequency list argument, for situations when your elements occur more than once. For example:

```ti-basic
:Disp median({1,2,3},{5,4,4})
```

is short for

```ti-basic
:median({1,1,1,1,1,2,2,2,2,3,3,3,3})
```

The frequency list {5,4,4} means that the first element, 1, occurs 5 times, the second element, 2, occurs 4 times, and the third element, 3, occurs 4 times.

## Advanced Uses

Frequency lists don't need to be whole numbers. Amazing as that may sound, your calculator can handle being told that one element of the list occurs 1/3 of a time, and another occurs 22.7 times. It can even handle a frequency of 0 - it will just ignore that element, as though it weren't there. One caveat, though - if all of the elements occur 0 times, there's nothing to take the median of and your calculator will throw an error.

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown, among other cases, if the data list is complex, or if the frequencies are not all positive and real.
*   **[ERR:DIM MISMATCH](/errors#dimmismatch)** is thrown if the frequency list and the data list have a different number of elements.
*   **[ERR:DIVIDE BY 0](/errors#divideby0)** is thrown if the frequency list's elements are all 0.

## Related Commands

*   [mean(](/mean)
*   [stdDev(](/stddev)
*   [variance(](/variance)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


