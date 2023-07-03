| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB0E`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [V](<../categories/Catalog.md#V>)</li><li>[List](<../categories/List.md>) > [Math](<../categories/List.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `variance(`</li></ul> |

# `variance(`

## Description
Returns the variance of the elements in `list` with frequency `freqlist`.


<b>Availability</b>: Token available everywhere.

## Syntax
`variance(list[,freqlist])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `8:variance(`
<hr>

The `variance(` command finds the sample variance of a list, a measure of the spread of a distribution. It takes a list of real numbers as a parameter. For example:

```ti-basic
:Prompt L1
:Disp "VARIANCE OF L1",variance(L1
```

## Advanced Uses

Frequency lists don't need to be whole numbers; your calculator can handle being told that one element of the list occurs 1/3 of a time, and another occurs 22.7 times. It can even handle a frequency of 0 - it will just ignore that element, as though it weren't there.

## Formulas

The formula for variance used by this command is:

(1) $`\begin{align} s_n^2 = \frac{1}{N-1} \sum_{i=1}^N (x_i - \overline{x})^2 \end{align}`$ 

This is the formula for sample variance. The formula for population variance, which this command does **not** use, varies slightly:

(2) $`\begin{align} \sigma^2 = \frac{1}{N} \sum_{i=1}^N (x_i - \overline{x})^2 \end{align}`$ 

If the population variance is required, just multiply the result of `variance()` by $1-1/N$.

With frequencies _w<sub>i</sub>_, the formula becomes

(3) $`\begin{align} s_n^2 = \frac{\sum_{i=1}^N w_i(x_i - \overline{x})^2}{\sum_{i=1}^N (w_i)-1} \end{align}`$ 

where $\overline{x}$ is the mean with frequencies included.

## Related Commands

*   [mean(](/mean)
*   [median(](/median)
*   [stdDev(](/stddev)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


