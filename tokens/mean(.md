| Property      | Value |
|---------------|-------|
| Hex Value     | `$21`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [M](<../categories/Catalog.md#M>)</li><li>[List](<../categories/List.md>) > [Math](<../categories/List.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `moyenne(`</li></ul> |

# `mean(`

## Description
Returns the mean of `list` with frequency `freqlist`.


<b>Availability</b>: Token available everywhere.

## Syntax
`mean(list[,freqlist])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `3:mean(`
<hr>

The mean( command finds the [mean](http://en.wikipedia.org/wiki/Mean), or the average, of a list. It's pretty elementary. It takes a list of real numbers as a parameter. For example:

```ti-basic
:Prompt L1
:Disp "MEAN OF L1",mean(L1
```

That's not all, however. Awesome as the mean( command is, it can also take a frequency list argument, for situations when your elements occur more than once. For example:

```ti-basic
:Disp mean({1,2,3},{5,4,4})
```

is short for

```ti-basic
:mean({1,1,1,1,1,2,2,2,2,3,3,3,3})
```

The frequency list {5,4,4} means that the first element, 1, occurs 5 times, the second element, 2, occurs 4 times, and the third element, 3, occurs 4 times.

## Advanced Uses

You can also use the frequency list version of mean( to calculate weighted averages. For example, suppose you're trying to average grades in a class where homework is worth 50%, quizzes 20%, and tests 30%. You have a 90% average on homework, 75% on quizzes (didn't study too well), but 95% average on tests. You can now calculate your grade with the mean( command:

```ti-basic
:mean({90,75,95},{50,20,30
```

You should get a 88.5 if you did everything right.

Frequency lists don't need to be whole numbers. Amazing as that may sound, your calculator can handle being told that one element of the list occurs 1/3 of a time, and another occurs 22.7 times. It can even handle a frequency of 0 - it will just ignore that element, as though it weren't there. In particular, mean(L1,L2) is effectively equivalent to sum (L1*L2)/sum(L2).

One caveat, though - if all of the elements occur 0 times, there's nothing to take an average of and your calculator will throw an error.

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown, among other cases, if the data list is complex, or if the frequencies are not all positive and real.
*   **[ERR:DIM MISMATCH](errors#dimmismatch)** is thrown if the frequency list and the data list have a different number of elements.
*   **[ERR:DIVIDE BY 0](errors#divideby0)** is thrown if the frequency list's elements are all 0.

## Related Commands

*   [median(](median\(.md)
*   [stdDev(](stdDev\(.md)
*   [variance(](variance\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


