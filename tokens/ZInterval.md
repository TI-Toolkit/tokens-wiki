| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB41`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ZintConf `</li></ul> |

# `ZInterval `

## Description
Computes a `z` confidence interval.

<b>Comment</b>:Data list input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZIntervalσ[,listname,freqlist,confidence level]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>σ</b></td><td></td><td></td></tr>

<tr><td><b>listname</b></td><td>list</td><td></td></tr>

<tr><td><b>freqlist</b></td><td>list</td><td></td></tr>

<tr><td><b>confidence level</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `7:ZInterval`
<hr>

## Description
Computes a `z` confidence interval.

<b>Comment</b>:Summary stats input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZIntervalσ,x̄,n[,confidence level]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>σ</b></td><td></td><td></td></tr>

<tr><td><b>x̄</b></td><td></td><td></td></tr>

<tr><td>n</td><td></td><td>Yes</td></tr>

<tr><td>confidence level</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `7:ZInterval`
<hr>

The ZInterval command calculates a confidence interval for the mean value of a population, at a specific confidence level: for example, if the confidence level is 95%, you are 95% certain that the mean lies within the interval you get. Use ZInterval when you have a single variable to analyze, and you already know the standard deviation. The ZInterval assumes that your distribution is normal, but it will work for other distributions if the sample size is large enough.

There are two ways to call the ZInterval command: by supplying it with needed sample statistics (mean and sample size), or by entering a list and letting the calculator work the statistics out. In either case, you will need to enter the standard deviation and desired confidence level as well.

## Sample Problem

You want to know the average height of a student at your school. You haven't asked everyone, but you took a random sample of 30 people and found out their height (and stored it to L<sub>1</sub>). You've read in your textbook that the standard deviation of teenagers' heights is usually 6 inches. You've decided to use a 95% confidence interval.

Since the syntax for entering a data list is ZInterval _std. deviation_, _list_, _confidence level_, the code would look like:

```ti-basic
:ZInterval 6,L1,95
you can also use
:ZInterval 6,L1,.95
```

Alternatively, you could calculate the mean and sample size and enter those instead. The sample size in this case is 30; let's say the mean was 63 inches. The syntax for entering statistics is ZInterval _std. deviation_, _mean_, _sample size_, _confidence level_, so your code would look like:

```ti-basic
:ZInterval 6,63,30,95
you can also use
:ZInterval 6,63,30,.95
```

Of course, the main use of the ZInterval command is in a program. While you can enter the ZInterval command on the home screen as well (just look in the catalog for it), it would probably be easier to select ZInterval… from the STAT>TEST menu (see the sidebar).

## Advanced Uses

As with most other statistical commands, you can enter a second list after the data list, to add frequencies (only with the data list syntax, of course). The frequency list must contain non-negative real numbers, and can't be all 0.

## Optimization

Using the data list syntax, all items but the standard deviation are optional: the calculator will assume you want to use L1 for your data unless another list is supplied, and that the confidence level you want is 95% unless you give another one. Using the summary stats syntax, the confidence level is also optional - again, the calculator will assume 95%. This means we can rewrite our code above in a simpler manner:

```ti-basic
:ZInterval 6,L1,95
can be
:ZInterval 6
```

```ti-basic
:ZInterval 6,63,30,95
can be
:ZInterval 6,63,30
```

## Related Commands

*   [2-SampZInt(](/2-sampzint)
*   [TInterval](/tinterval)
*   [2-SampTInt](/2-samptint)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


