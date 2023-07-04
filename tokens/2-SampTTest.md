| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB46`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-CompTTest( `</li></ul> |

# `2-SampTTest `

## Description
Computes a two-sample `t` test. `alternative`=-`1` is `<`; `alternative`=`0` is ≠; `alternative`=`1` is `>`. `pooled`=`1` pools variances; `pooled`=`0` does not pool variances. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampTTest [listname1,listname2,freqlist1,freqlist2,alternative,pooled,drawflag,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>listname1</td><td>listName</td><td>Yes</td></tr>

<tr><td>listname2</td><td>listName</td><td>Yes</td></tr>

<tr><td>freqlist1</td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist2</td><td>list</td><td>Yes</td></tr>

<tr><td>alternative</td><td></td><td>Yes</td></tr>

<tr><td>pooled</td><td></td><td>Yes</td></tr>

<tr><td>drawflag</td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `4:2-SampTTest`
<hr>

## Description
Computes a two-sample `t` test. `alternative`=-`1` is `<`; `alternative`=`0` is ≠; `alternative`=`1` is `>`. `pooled`=`1` pools variances; `pooled`=`0` does not pool variances. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampTTestx̄1,Sx1,n1,v2,Sx2,n2[,alternative,pooled,drawflag,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x̄</b></td><td></td><td></td></tr>

<tr><td><b>1</b></td><td></td><td></td></tr>

<tr><td><b>Sx1</b></td><td></td><td></td></tr>

<tr><td><b>n1</b></td><td></td><td></td></tr>

<tr><td><b>v2</b></td><td></td><td></td></tr>

<tr><td><b>Sx2</b></td><td></td><td></td></tr>

<tr><td>n2</td><td></td><td>Yes</td></tr>

<tr><td>alternative</td><td></td><td>Yes</td></tr>

<tr><td>pooled</td><td></td><td>Yes</td></tr>

<tr><td>drawflag</td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `4:2-SampTTest`
<hr>

2-SampTTest performs a _t_ significance test to compare the means of two populations. This test is valid for simple random samples from populations with unknown standard deviations. In addition, either the populations must be normally distributed, or the sample sizes have to be sufficiently large (usually, greater than 10).

The logic behind the test is as follows: we want to test the hypothesis that the true means of the two populations are equal (the null hypothesis). The letter μ is used for a population mean, so this is usually written as μ<sub>1</sub>=μ<sub>2</sub>. To do this, we assume that this "null hypothesis" is true, and calculate the probability that the difference between the two means occurred, under this assumption. If this probability is sufficiently low (usually, 5% is the cutoff point), we conclude that since it's so unlikely that the data could have occurred under the null hypothesis, the null hypothesis must be false, and therefore the means are not equal. If, on the other hand, the probability is not too low, we conclude that the data may well have occurred under the null hypothesis, and therefore there's no reason to reject it.

In addition to the null hypothesis, we must have an alternative hypothesis as well - usually this is simply that the two means are not equal. However, in certain cases when we have reason to suspect that one mean is greater than the other (such as when we are trying to verify a claim that one mean is greater), our alternative hypothesis may be that the first mean is greater than the second (μ<sub>1</sub>>μ<sub>2</sub>) or less (μ<sub>1</sub><μ<sub>2</sub>).

As for the 2-SampTTest command itself, there are two ways of calling it: you may give it a list of all the sample data, or the necessary statistics about the list (_x<sub>1</sub>_ and _x<sub>2</sub>_ are the sample means, _s<sub>1</sub>_ and _s<sub>2</sub>_ the sample standard deviations, and _n<sub>1</sub>_ and _n<sub>2</sub>_ the sample sizes). In either case, you can indicate what the alternate hypothesis is, by a value of 0, -1, or 1 for the _alternative_ argument. 0 indicates a two-sided hypothesis of _μ<sub>1</sub>_≠_μ<sub>2</sub>_, -1 indicates _μ<sub>1</sub>_<_μ<sub>2</sub>_, and 1 indicates _μ<sub>1</sub>_>_μ<sub>2</sub>_. (In fact, the calculator will treat any negative value as -1, and any positive value as 1).

Although you can access the 2-SampTTest command on the home screen, via the catalog, there's no need: the 2-SampTTest… interactive solver, found in the statistics menu, is much more intuitive to use - you don't have to memorize the syntax.

In either case, it's important to understand the output of 2-SampTTest. Here are the meanings of each line:

*   The first line, involving μ<sub>1</sub> and μ<sub>2</sub>, is the alternative hypothesis.
*   t is the test statistic, the standardized difference between the means. If the null hypothesis is true, it should be close to 0.
*   p is the probability that the difference between μ<sub>1</sub> and μ<sub>2</sub> (the two means) would occur if the null hypothesis is true. When the value is sufficiently small, we reject the null hypothesis and conclude that the alternative hypothesis is true. You should have a cutoff value ready, such as 5% or 1%. If p is lower, you "reject the null hypothesis on a 5% (or 1%) level" in technical terms.
*   x-bar<sub>1</sub> and x-bar<sub>2</sub> are the two sample means.
*   Sx<sub>1</sub> and Sx<sub>2</sub> are the two sample standard deviations.
*   n<sub>1</sub> and n<sub>2</sub> are the sample sizes.

## Sample Problem

Your school claims that the average SAT score of students at the school is higher than at a rival school. You took samples of SAT scores from students at both schools (and stored them to L1 and L2).  
Since the school's claim is that your school's score is higher, that will be your alternative hypothesis (_μ<sub>1</sub>_>_μ<sub>2</sub>_), which corresponds to a value of 1. The code you'd use is:

```ti-basic
:2-SampTTest L1,L2,1
```

Alternatively, you could calculate the mean, standard deviation, and size of your samples, and put those into the command instead. Suppose you obtained SAT scores from 60 students at your school and 40 students at the rival school, the means were 1737 and 1623, and the standard deviation 211 and 218. Then your code is:

```ti-basic
:2-SampTTest 1737,211,60,1623,218,40,1
```

You will see the following output:

```ti-basic
2-SampTTest
 μ1>μ2
 z=2.594854858
 p=.0056059824
 x1=1737
 x2=1623
 Sx1=211
 Sx2=218
 n1=60
 n2=40
```

The most important part of this output is "p=.0056059824". This value of p is smaller than 1% or 0.01. This is significant on the 1% level, so we reject the null hypothesis and conclude that the alternative hypothesis is true: μ<sub>1</sub>>μ<sub>2</sub>, that is, your school's average SAT score is indeed higher.

## Advanced Uses

The final optional argument of 2-SampTTest, _draw?_, will display the results in a graphical manner if you put in "1" for it. The calculator will draw the distribution, and shade the area of the graph beyound the t statistic. In addition, the value of t and the value of p will be displayed (the value of p corresponds to the shaded area). You would make your conclusions in the same way as for the regular output.

The optional argument _pooled?_, if given a nonzero value, will pool the standard deviations to find a combined value which will then be used for both populations. Use this feature if you have reason to believe that the two populations have the same standard deviation.

As with most other statistical commands, you may use a frequency list in your input (when using the data list syntax). If you do, then both lists must have frequencies, and the order of the arguments would be _list1_, _list2_, _frequency1_, _frequency2_.

## Optimization

Some of the arguments of the 2-SampTTest command have default values, and the argument can be omitted if this value is accepted.

*   The _draw?_ argument can be omitted if you don't want graphical output, although you could put "0" in as well.
*   If the _draw?_ argument is omitted, you can omit the _pooled?_ argument if you do not want your standard deviations pooled.
*   If both the above arguments are omitted, and you're doing a two sided test, you may omit the _alternative_ argument.
*   With data list input, you can always omit the frequency lists if you won't be using them.
*   With data list input, if the flags that go at the end are omitted, and you're using the default lists L1 and L2, you may omit those as well.

The code in the sample problem above can't be optimized, because the _alternative_ argument is 1:

```ti-basic
:2-SampTTest L1,L2,1
```

However, if we were doing a two-sided test, we could omit the _alternative_ argument as well as the lists:

```ti-basic
:2-SampTTest L1,L2,0
can be just
:2-SampTTest
```

## Related Commands

*   [T-Test](T-Test.md)
*   [Z-Test(](Z-Test\(.md)
*   [2-SampZTest(](2-SampZTest\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


