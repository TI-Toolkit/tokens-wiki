| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB3C`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `T-Test `</li></ul> |

# `T-Test `

## Description
Performs a `t` test with frequency `freqlist`. `alternative`=-`1` is `<`; `alternative`=`0` is ≠; `alternative`=`1` is `>`. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.

<b>Comment</b>:Data list input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`T-Test μ0[,listname,freqlist,alternative,drawflag,color#]) `

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>μ</b></td><td></td><td>Yes</td></tr>

<tr><td>0</td><td></td><td><b>No</b></td></tr>

<tr><td>listname</td><td>list</td><td><b>No</b></td></tr>

<tr><td>freqlist</td><td>list</td><td><b>No</b></td></tr>

<tr><td>alternative</td><td></td><td><b>No</b></td></tr>

<tr><td>drawflag</td><td></td><td><b>No</b></td></tr>

<tr><td>color#</td><td>colorNum</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `2:T-Test`
<hr>

## Description
Performs a `t` test with frequency `freqlist`. `alternative`=-`1` is < ; `alternative`=`0` is Ä; `alternative`=`1` is >. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`T-Test μ0,x̄,Sx,n[,alternative,drawflag,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>μ</b></td><td></td><td>Yes</td></tr>

<tr><td><b>0</b></td><td></td><td>Yes</td></tr>

<tr><td><b>x̄</b></td><td></td><td>Yes</td></tr>

<tr><td><b>Sx</b></td><td></td><td>Yes</td></tr>

<tr><td>n</td><td></td><td><b>No</b></td></tr>

<tr><td>alternative</td><td></td><td><b>No</b></td></tr>

<tr><td>drawflag</td><td></td><td><b>No</b></td></tr>

<tr><td>color#</td><td>colorNum</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `2:T-Test`
<hr>

T-Test performs a _t_ significance test of a null hypothesis you supply. This test is valid for simple random samples from a population with an unknown standard deviation. In addition, either the population must be normally distributed, or the sample size has to be sufficiently large.

The logic behind a T-Test is as follows: we want to test the hypothesis that the true mean of a population is a certain value (_μ<sub>0</sub>_). To do this, we assume that this "null hypothesis" is true, and calculate the probability that the variation from this mean occurred, under this assumption. If this probability is sufficiently low (usually, 5% is the cutoff point), we conclude that since it's so unlikely that the data could have occurred under the null hypothesis, the null hypothesis must be false, and therefore the true mean _μ_ is not equal to _μ<sub>0</sub>_. If, on the other hand, the probability is not too low, we conclude that the data may well have occurred under the null hypothesis, and therefore there's no reason to reject it.

In addition to the null hypothesis, we must have an alternative hypothesis as well - usually this is simply that the true mean is **not** _μ<sub>0</sub>_. However, in certain cases when we have reason to suspect the true mean is less than or greater than _μ<sub>0</sub>_, we might use a "one-sided" alternative hypothesis, which will state that the true mean _μ_<_μ<sub>0</sub>_ or that _μ_>_μ<sub>0</sub>_.

As for the T-Test command itself, there are two ways of calling it: you may give it a list of all the sample data, or the necessary statistics about the list - its size, the mean, and the standard deviation. In either case, you can indicate what the alternate hypothesis is, by a value of 0, -1, or 1 for the _alternative_ argument. 0 indicates a two-sided hypothesis of _μ_≠_μ<sub>0</sub>_, -1 indicates _μ_<_μ<sub>0</sub>_, and 1 indicates _μ_>_μ<sub>0</sub>_. (in fact, any negative argument will be treated as -1, and any positive argument as 1)

Although you can access the T-Test command on the home screen, via the catalog, there's no need: the T-Test… interactive solver, found in the statistics menu, is much more intuitive to use - you don't have to memorize the syntax.

In either case, it's important to understand the output of T-Test. Here are the meanings of each line:

*   The first line, involving μ, is the alternative hypothesis.
*   t is the test statistic, the standardized difference between the sample mean and _μ<sub>0</sub>_. If the null hypothesis is true, it should be close to 0.
*   p is the probability that the difference between the sample mean and _μ<sub>0</sub>_ would occur if the null hypothesis is true. When the value is sufficiently small, we reject the null hypothesis and conclude that the alternative hypothesis is true. You should have a cutoff value ready, such as 5% or 1%. If p is lower, you "reject the null hypothesis on a 5% (or 1%) level" in technical terms.
*   x-bar is the sample mean.
*   Sx is the sample standard deviation.
*   n is the sample size (not included, but also important, is df, the degrees of freedom, defined as n-1)

## Sample Problem

According to M&M's advertising, each standard-size bag of M&M's contains an average of 10 blue M&M's. You think that this estimate is low, and that the true average is higher. You decide to test this hypothesis by buying thirty bags of M&M's. You count the number of blue M&M's in each, and store this number to L1.

The value of _μ<sub>0</sub>_ is 10, because you want to test the null hypothesis that there are on average 10 blue M&M's per bag. We want to test the values in L1. Because we want to test if there's actually more than 10 blue M&M's per bag, we have a one-sided alternate hypothesis: _μ_>_μ<sub>0</sub>_, which corresponds to an argument of 1. To solve the problem, you'd use this code:

```ti-basic
:T-Test 10,L1,1
```

Alternatively, you could calculate the mean, standard deviation, and size of your sample, and put those into the command instead. The sample size is 30; let's suppose that the mean was 11.2 and the standard deviation 1.3. The code you'd use is:

```ti-basic
:T-Test 10,11.2,1.3,30,1
```

You will see the following output:

```ti-basic
T-Test
 μ>10
 z=5.055900531
 p=1.0857768e-5
 x=11.2
 Sx=1.3
 n=30
```

The most important part of this output is "p=1.0857768e-5". This value of p is much smaller than 1% or 0.01; it's in fact around 0.00001. This is significant on the 1% level, so we reject the null hypothesis and conclude that the alternative hypothesis is true: μ>10, that is, the average number of blue M&M's in a bag is more than 10.

## Advanced Uses

The final argument of T-Test, _draw?_, will display the results in a graphical manner if you put in "1" for it. The calculator will draw the Student's _t_ distribution with the correct degrees of freedom, and shade the area of the graph beyond the t statistic. In addition, the value of t and the value of p will be displayed (the value of p corresponds to the shaded area). You would make your conclusions in the same way as for the regular output.

As with most other statistical commands, you may use a frequency list in your input (when using the data list syntax).

## Optimization

Most of the arguments of the T-Test command have default values, and the argument can be omitted if this value is accepted.

*   The _draw?_ argument can be omitted if you don't want graphical output, although you could put "0" in as well.
*   If the _draw?_ argument is omitted, you can omit the _alternative_ argument to use a two-sided test (_μ_≠_μ<sub>0</sub>_). If you include the _draw?_ argument, you have to include this - otherwise there will be confusion as to what the 5th argument means.
*   With data list input, you can always omit the frequency list if you won't be using it.
*   With data list input, if the _draw?_ and _alternative_ arguments are omitted, and your data is in L1, you may omit L1 as well. However, if _alternative_ or _draw?_ is present, you have to include it, or else the syntax may be confused with the syntax for summary stats input.

The code in the sample problem above can't be optimized, because the _alternative_ argument is 1:

```ti-basic
::T-Test 10,L1,1
```

However, if we were doing a two-sided test, we could omit the _alternative_ and the _list_ arguments (since we're testing L1):

```ti-basic
:T-Test 10,L1,0
can be
:T-Test 10
```

## Related Commands

*   [2-SampTTest](/2-sampttest)
*   [Z-Test(](/z-test)
*   [2-SampZTest(](/2-sampztest)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


