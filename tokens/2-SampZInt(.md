| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB42`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-CompZIntC(`</li></ul> |

# `2-SampZInt(`

## Description
Computes a two-sample `z` confidence interval.

<b>Comment</b>:Data list input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampZInt(σ1,σ2[,listname1,listname2,freqlist1,freqlist2,confidence level])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>σ</b></td><td></td><td></td></tr>

<tr><td>1</td><td></td><td>Yes</td></tr>

<tr><td>σ</td><td></td><td>Yes</td></tr>

<tr><td>2</td><td></td><td>Yes</td></tr>

<tr><td>listname1</td><td>listName</td><td>Yes</td></tr>

<tr><td>listname2</td><td>listName</td><td>Yes</td></tr>

<tr><td>freqlist1</td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist2</td><td>list</td><td>Yes</td></tr>

<tr><td>confidence level</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `9:2-SampZInt(`
<hr>

## Description
Computes a two-sample `z` confidence interval.

<b>Comment</b>:Summary stats input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampZInt(σ1,σ2,x̄1,n1,x̄2,n2[,confidence level])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>σ</b></td><td></td><td></td></tr>

<tr><td><b>1</b></td><td></td><td></td></tr>

<tr><td><b>σ</b></td><td></td><td></td></tr>

<tr><td><b>2</b></td><td></td><td></td></tr>

<tr><td><b>x̄</b></td><td></td><td></td></tr>

<tr><td><b>1</b></td><td></td><td></td></tr>

<tr><td>n1</td><td></td><td>Yes</td></tr>

<tr><td>x̄</td><td></td><td>Yes</td></tr>

<tr><td>2</td><td></td><td>Yes</td></tr>

<tr><td>n2</td><td></td><td>Yes</td></tr>

<tr><td>confidence level</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `9:2-SampZInt(`
<hr>

The 2-SampZInt( command uses the techniques of Z Intervals to compute an interval for the **difference** between the means of two independent populations, at a specified confidence level. Use 2-SampZInt( when you have two independent variables to compare, and you already know their standard deviations. The 2-SampZInt( command assumes that both variables are distributed normally, but it will work for other distributions if the sample size is large enough.

There are two ways to call this command: by supplying it with needed sample statistics (mean and sample size, for both data sets), or by entering two lists and letting the calculator work the statistics out. In either case, you will need to enter the standard deviation and desired confidence level as well.

In the data list syntax, _σ<sub>1</sub>_ and _σ<sub>2</sub>_ are the two standard deviations.  
In the summary stats syntax, _σ<sub>1</sub>_ and _σ<sub>2</sub>_ are the two standard deviations, _x<sub>1</sub>_ and _x<sub>2</sub>_ the two sample means, and _n<sub>1</sub>_ and _n<sub>2</sub>_ the two sample sizes.

The output will contain an open interval (a, b) that is your answer: the difference between the two means will lie in this interval. Specifically, it is the second mean subtracted from the first - μ<sub>1</sub>-μ<sub>2</sub>. If you're interested in the reverse difference, just flip the signs on the interval.

Tip: don't use this command in a matched-pairs setting when you can match the two samples up by units or subjects. Instead, take the difference between the two samples in each matched pair, and use a regular [ZInterval](ZInterval.md).

## Sample Problem

You want to compare the average height of a freshman and a senior at your school. You haven't asked everyone, but you took a random sample of 40 people from each class and found out their heights (and stored them to L<sub>1</sub> and L<sub>2</sub>). You've read in your textbook that the standard deviation of teenagers' heights is usually 6 inches. You've decided to use a 95% confidence interval.

Based on the data list syntax for a 2-SampZInt(, here is your code:

```ti-basic
:2-SampZInt(6,6,L1,L2,95
you can also use
:2-SampZInt(6,6,L1,L2,.95
```

Alternatively, you could calculate the mean and sample size and enter those instead. The sample size in this case is 40 for both data sets; let's say the means were 57 inches and 67 inches. You now have all the needed statistics:

*   _σ<sub>1</sub>_ is the standard deviation for freshmen: 6 inches
*   _σ<sub>2</sub>_ is the standard deviation for seniors: also 6 inches
*   _x<sub>1</sub>_ is the mean height of freshmen: 57 inches
*   _n<sub>1</sub>_ is the number of freshmen in the sample: 40
*   _x<sub>2</sub>_ is the mean height of seniors: 67 inches
*   _n<sub>2</sub>_ is the number of seniors in the sample: 40

This means that the code is:

```ti-basic
:2-SampZInt(6,6,57,40,67,40,95
you can also use
:2-SampZInt(6,6,57,40,67,40,.95
```

Of course, the main use of the 2-SampZInt( command is in a program. While you can enter the command on the home screen as well (just look in the catalog for it), it would probably be easier to select 2-SampZInt… from the STAT>TEST menu (see the sidebar), since you don't have to remember the syntax.

## Advanced Uses

As with most other statistical commands, you can add frequencies to the lists (only with the data list syntax, of course); if you do, both lists must have frequencies, and the arguments go in the order _first data list_, _second data list_, _first freq. list_, _second freq. list_. Each frequency list must contain non-negative real numbers, which can't be all 0.

## Optimization

Using the data list syntax, all items but the standard deviations are optional: the calculator will assume you want to use L1 and L2 for your data unless other lists are supplied, and that the confidence level you want is 95% unless you give another one. Using the summary stats syntax, the confidence level is also optional - again, the calculator will assume 95%. This means we can rewrite our code above in a simpler manner:

```ti-basic
:2-SampZInt(6,6,L1,L2,95
can be
:2-SampZInt(6,6
```

```ti-basic
:2-SampZInt(6,6,57,40,67,40,95
can be
:2-SampZInt(6,6,57,40,67,40
```

## Related Commands

*   [ZInterval](ZInterval.md)
*   [TInterval](TInterval.md)
*   [2-SampTInt](2-SampTInt.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


