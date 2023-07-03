| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB0D`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[List](<../categories/List.md>) > [Math](<../categories/List.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Ecart-type(`</li></ul> |

# `stdDev(`

## Description
Returns the standard deviation of the elements in `list` with frequency `freqlist`.


<b>Availability</b>: Token available everywhere.

## Syntax
`stdDev(list[,freqlist])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `7:stdDev(`
<hr>

The stdDev( command finds the sample standard deviation of a list, a measure of the spread of a distribution. It takes a list of real numbers as a parameter. For example:

```ti-basic
:Prompt L1
:Disp "STD. DEV. OF L1",stdDev(L1
```

Caution: the standard deviation found by this command is the **sample** standard deviation, not the **population** standard deviation, which is the one most commonly used when dealing with a sample rather than the whole population. The formula for population standard deviation is similar, but N-1 is replaced by N. There is no single command that will calculate population standard deviation for you, but [1-Var Stats](/1-var-stats) will return both (sample standard deviation, the one returned by stdDev(), is Sx, while population standard deviation is σx). You can also calculate population standard deviation of L1 with the following code:

```ti-basic
:stdDev(augment(L1,{mean(L1
```

## Advanced Uses

Frequency lists don't need to be whole numbers. Amazing as that may sound, your calculator can handle being told that one element of the list occurs 1/3 of a time, and another occurs 22.7 times. It can even handle a frequency of 0 - it will just ignore that element, as though it weren't there. One caveat, though - if all of the elements occur 0 times, there's no elements actually in the list and your calculator will throw an error.

## Formulas

The formula for standard deviation used by this command is:

(1) $`\begin{align} s = \sqrt{\frac{1}{N-1} \sum_{i=1}^N (x_i - \overline{x})^2} \end{align}`$ 

This is the formula for sample standard deviation. The formula for population standard deviation, which this command does **not** use, varies slightly:

(2) $`\begin{align} \sigma = \sqrt{\frac{1}{N} \sum_{i=1}^N (x_i - \overline{x})^2} \end{align}`$ 

## Related Commands

*   [mean(](/mean)
*   [median(](/median)
*   [variance(](/variance)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


