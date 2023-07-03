| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB44`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-PropZInt(`</li></ul> |

# `2-PropZInt(`

## Description
Computes a two-proportion `z` confidence interval.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-PropZInt(x1,n1,x2,n2[,confidence level])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x1</b></td><td></td><td></td></tr>

<tr><td><b>n1</b></td><td></td><td></td></tr>

<tr><td><b>x2</b></td><td></td><td></td></tr>

<tr><td><b>n2</b></td><td></td><td></td></tr>

<tr><td>confidence level</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `B:2-PropZInt(`
<hr>

The 2-PropZInt( command calculates a confidence interval for the difference between two proportions, at a specific confidence level: for example, if the confidence level is 95%, you are 95% certain that the difference lies within the interval you get. The command assumes that the sample is large enough that the normal approximation to binomial distributions is valid: this is true if, in both samples involved, the positive and negative counts are both >5.

The 1-PropZInt( command takes 5 arguments. The first two, _x<sub>1</sub>_ and _n<sub>1</sub>_ are the positive count and total count in the first sample (so the estimated value of the first proportion is _x<sub>1</sub>_ out of _n<sub>1</sub>_. The next two arguments, _x<sub>2</sub>_ and _n<sub>2</sub>_, are the positive count and total count in the second sample.

The output gives you a confidence interval of the form (a,b), which is the range of values for the difference π<sub>1</sub>-π<sub>2</sub> (where π<sub>1</sub> and π<sub>2</sub> are the first and second proportions respectively). If you were looking for the difference π<sub>2</sub>-π<sub>1</sub> all you have to do is switch two sides and negate the numbers in the interval.

## Sample Problem

You want to compare the proportion of students at your school and at a friend's school. that support a particular political candidate. You take a random sample of 50 students, and find that 22 of them support that candidate. Your friend took a random sample of 75 students at his school, and found that 28 supported the candidate.

The first proportion is the proportion of supporters at your school. 22 out of 50 students support the candidate, so _x<sub>1</sub>_=22 and _n<sub>1</sub>_=50.  
The second proportion is the proportion of supporters at your friend's school. 28 out of 75 students support the candidate, so _x<sub>2</sub>_=28 and _n<sub>2</sub>_=75.  
If you decided to do a 95% confidence interval, you would add the argument 95 after all these, so the syntax would be as follows:

```ti-basic
:2-PropZInt(22,50,28,75,95
which can also be
:2-PropZInt(22,50,28,75,.95
```

  
The output if you run the above code will look approximately like this:

```ti-basic
1-PropZInt
 (-.1092,.24249)
 p1=.44
 p2=.3733333333
 n1=50
 n2=75
```

  
This tells you that between about the difference betwen the proportions is between about -0.11 (your school's proportion being about 0.11 less than your friend's school's proportion) to about 0.24 (your school's proportion being about 0.24 greater than your friend's school's proportion).

## Optimization

If the confidence level is 95%, you can omit the final 95, since that is the default value:

```ti-basic
:2-PropZInt(22,50,28,75,95
can be
:2-PropZInt(22,50,28,75
```

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if either proportion is not between 0 and 1, or _x<sub>i</sub>_ is negative or greater than _n<sub>i</sub>_, or the confidence level is negative or at least 100.

## Related Commands

*   [1-PropZInt(](/1-propzint)
*   [ZInterval](/zinterval)
*   [2-SampZInt(](/2-sampzint)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


