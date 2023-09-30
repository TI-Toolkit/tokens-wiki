| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB43`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `1-PropZInt(`</li></ul> |

# `1-PropZInt(`

## Overview
Computes a one-proportion `z` confidence interval.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`1-PropZInt(x,n[,confidence level])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>n</b></td><td></td><td></td></tr>

<tr><td>confidence level</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `A:1-PropZInt(`
<hr>

## Description

The 1-PropZInt( command calculates a confidence interval for a proportion, at a specific confidence level: for example, if the confidence level is 95%, you are 95% certain that the proportion lies within the interval you get. The command assumes that the sample is large enough that the normal approximation to binomial distributions is valid: this is true if, in the sample you take, the positive and negative counts are both >5.

The 1-PropZInt( command takes 3 arguments. The first, _x_, is the positive count in the sample. The second, _n_, is the total size of the sample. (So the sample proportion is equal to _x_ out of _n_). The third argument is the confidence level, which defaults to 95.

The output gives you a confidence interval of the form (a,b), meaning that the true proportion π is most likely in the range a<π<b, and the value of _x__/n_.

## Sample Problem

You want to know the proportion of students at your school that support a particular political candidate. You take a random sample of 50 students, and find that 22 of them support that candidate. 22, the positive count, and 50-22=28, the negative count, are both >5, so the assumption is satisfied.

Using 22 for _x_, and 50 for _n_, you decide to find a 95% confidence interval. The syntax for that is:

```ti-basic
:1-PropZInt(22,50,95
which can also be
:1-PropZInt(22,50,.95
```

  
The output if you run the above code will look approximately like this:

```ti-basic
1-PropZInt
 (.30241,.57759)
 p=.44
 n=50
```

  
This tells you that between about 30.2% and about 57.8% of the students at your school are in support of the political candidate.

## Optimization

If the confidence level is 95%, you can omit the final 95, since that is the default value:

```ti-basic
:1-PropZInt(22,50,95
can be
:1-PropZInt(22,50
```

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown if the sample proportion is not between 0 and 1, any argument is negative, or the confidence level is 100 or more.

## Related Commands

*   [2-PropZInt(](2-PropZInt\(.md)
*   [ZInterval](ZInterval.md)
*   [2-SampZInt(](2-SampZInt\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


