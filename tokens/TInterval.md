| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB48`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `TintConf `</li></ul> |

# `TInterval `

## Description
Computes a `t` confidence interval.

<b>Comment</b>:Data list input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`TInterval [listname,freqlist,confidence level]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>listname</td><td>list</td><td><b>No</b></td></tr>

<tr><td>freqlist</td><td>list</td><td><b>No</b></td></tr>

<tr><td>confidence level</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `8:TInterval`
<hr>

## Description
Computes a `t` confidence interval.

<b>Comment</b>:Summary stats input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`TInterval x̄,Sx,n[,confidence level]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x̄</b></td><td></td><td>Yes</td></tr>

<tr><td><b>Sx</b></td><td></td><td>Yes</td></tr>

<tr><td>n</td><td></td><td><b>No</b></td></tr>

<tr><td>confidence level</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `8:TInterval`
<hr>

The `TInterval` command calculates a confidence interval for the mean value of a population, at a specific confidence level: for example, if the confidence level is 95%, you are 95% certain that the mean lies within the interval you get. Use `TInterval` when you have a single variable to analyze, and **don't** know the standard deviation. The `TInterval` assumes that your distribution is normal, but it will work for other distributions if the sample size is large enough.

There are two ways to call the `TInterval` command: by supplying it with needed sample statistics (mean, sample standard deviation, and sample size), or by entering a list and letting the calculator work the statistics out.

## Sample Problem

You want to know the average height of a student at your school. You haven't asked everyone, but you took a random sample of 30 people and found out their heights (and stored it to L<sub>1</sub>). You've decided to use a 95% confidence interval.

Since the syntax for entering a data list is `TInterval` _list_, _confidence level_, here is your code:

```ti-basic
:TInterval L1,95
you can also use
:TInterval L1,.95
```

Alternatively, you could calculate the mean, sample size, and standard deviation, and enter those instead. The sample size is 30; let's say the mean was 63 inches and the standard deviation was 6.2 inches.

The syntax for entering statistics is `TInterval` _mean_, _std. deviation_, _sample size_, _confidence level_, so your code would look like:

```ti-basic
:TInterval 63,6.2,30,95
you can also use
:TInterval 63,6.2,30,.95
```

Of course, the main use of the `TInterval` command is in a program. While you can enter the `TInterval` command on the home screen as well (just look in the catalog for it), it would probably be easier to select `TInterval`… from the STAT>TEST menu (see the sidebar).

One thing to note about using `TInterval` in a program is that it will not display data if there are lines of code after it. Either the command is on the last line of code, or it will not display anything. The way to work around this is to display the lower and upper variables, as that is where TInterval stores the results.

```ti-basic
:TInterval //some statistical data
:Disp lower,upper
```

## Advanced Uses

As with most other statistical commands, you can enter a second list after the data list, to add frequencies (only with the data list syntax, of course). The frequency list must contain non-negative integers, and can't be all 0.

## Optimization

Using the data list syntax, all the arguments are optional: the calculator will assume you want to use L<sub>1</sub> for your data unless another list is supplied, and that the confidence level you want is 95% unless you give another one. Using the summary stats syntax, the confidence level is also optional - again, the calculator will assume 95%. This means we can rewrite our code above in a simpler manner:

```ti-basic
:TInterval L1,95
can be just
:TInterval
```

```ti-basic
:TInterval 63,6.2,30,95
can be
:TInterval 63,6.2,30
```

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** occurs if complex numbers are used (in some cases, **[ERR:ARGUMENT](/errors#argument)** is thrown instead).
*   **[ERR:DIM MISMATCH](/errors#dimmismatch)** occurs if the data and frequency lists aren't the same size.
*   **[ERR:DOMAIN](/errors#domain)** occurs in any of the following cases:
    *   The confidence level isn't in the range (0 .. 100).
    *   The standard deviation isn't positive.
    *   The sample size isn't an integer greater than 1.
*   **[ERR:STAT](/errors#stat)** occurs if the frequency list's elements aren't integers.

## Related Commands

*   [2-SampTInt](/2-samptint)
*   [ZInterval](/zinterval)
*   [2-SampZInt(](/2-sampzint)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


