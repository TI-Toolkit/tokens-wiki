| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF95`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `invBinom(`</li></ul> |

# `invBinom(`

## Description
The inverse binomial cumulative distribution function results in the minimum number of successes, such that the cumulative probability for that minimum number of successes ≥ the given cumulative probability (area).  If more information is needed, also find the binomcdf for the result from invBinom( as shown below for a full analysis.
Details:
Assume the toss of a fair coin 30 times.  What is the minimum number of heads you must observe such that the cumulative probability for that number of observed heads is at least 0.95?
The results on the screen first show that the minimum number of successes to obtain at least the given cumulative probability of 0.95 is 19.  Next, the cumulative probability for up to 19 is computed using binomcdf( and is approximately 0.9506314271 which meets the criteria of  0.9506314271≥0.95

Alternate Method:
Set Y1=binomcdf(30,0.5,X) and use the table of values (starting at 0 and increment by 1) to find when the cumulative probability is at or just above the given cumulative probability.  This gives you a view of all values to make decisions.  For this example, search in the table to find the cumulative probability just larger than 0.95.  Again, the number of successes is 19.


<b>Comment</b>:CE OS 5.2+

<b>Availability</b>: Token available everywhere.

## Syntax
`invBinom(area,trial,p)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>area</td><td></td><td>false</td></tr>

<tr><td>trial</td><td></td><td>false</td></tr>

<tr><td>p</td><td></td><td>false</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>distr</kbd>, `DISTR`, `C:invBinom(`
<hr>

## Examples

Explanation 1
```ti-basic
code 1
```
---
Explanation 2
```ti-basic
code 2
```

## Error Conditions


## Advanced Notes


## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CE</b> | 5.2.0 | Added

## Related Commands

    