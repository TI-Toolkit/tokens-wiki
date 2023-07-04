| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB3E`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `1-PropZTest(`</li></ul> |

# `1-PropZTest(`

## Description
Computes a one-proportion `z` test. `alternative`=-`1` is <; `alternative`=`0` is ≠; `alternative`=`1` is >. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`1-PropZTest(p0,x,n[,alternative,drawflag, color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>p0</b></td><td></td><td></td></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>n</b></td><td></td><td></td></tr>

<tr><td>alternative</td><td></td><td>Yes</td></tr>

<tr><td>drawflag</td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `5:1-PropZTest(`
<hr>

1-PropZTest performs an _z_-test to compare a population proportion to a hypothesis value. This test is valid for sufficiently large samples: only when the number of successes (_x_ in the command syntax) and the number of failures (_n_-_x_) are both >5.

The logic behind the test is as follows: we want to test the hypothesis that the true proportion is equal to some value _p<sub>0</sub>_ (the null hypothesis). To do this, we assume that this "null hypothesis" is true, and calculate the probability that the (usually, somewhat different) actual proportion occurred, under this assumption. If this probability is sufficiently low (usually, 5% is the cutoff point), we conclude that since it's so unlikely that the data could have occurred under the null hypothesis, the null hypothesis must be false, and therefore the true proportion is not equal to _p<sub>0</sub>_. If, on the other hand, the probability is not too low, we conclude that the data may well have occurred under the null hypothesis, and therefore there's no reason to reject it.

Commonly used notation has the letter π being used for the true population proportion (making the null hypothesis be π=p<sub>0</sub>). TI must have been afraid that this would be confused with the real number π, so on the calculator, "prop" is used everywhere instead.

In addition to the null hypothesis, we must have an alternative hypothesis as well - usually this is simply that the proportion is not equal to _p<sub>0</sub>_. However, in certain cases, our alternative hypothesis may be that the proportion is greater or less than _p<sub>0</sub>_.

The arguments to 1-PropZTest( are as follows:

*   _p<sub>0</sub>_ - the value for the null hypothesis (the proportion you're testing for)
*   _x_ - the success count in the sample
*   _n_ - the total size of the sample (so the sample proportion would be _x__/n_)
*   _alternative_ (optional if you don't include _draw?_) - determines the alternative hypothesis
    *   0 (default value) - prop≠p<sub>0</sub>
    *   -1 (or any negative value) - prop<p<sub>0</sub>
    *   1 (or any positive value) - prop>p<sub>0</sub>
*   _draw?_ (optional) set this to 1 if you want a graphical rather than numeric result

Although you can access the 1-PropZTest command on the home screen, via the catalog, there's no need: the 1-PropZTest… interactive solver, found in the statistics menu, is much more intuitive to use - you don't have to memorize the syntax.

In either case, it's important to understand the output of 1-PropZTest. Here are the meanings of each line:

*   The first line, involving "prop" and _p<sub>0</sub>_, is the alternative hypothesis.
*   z is the test statistic. If the null hypothesis is true, it should be close to 0.
*   p is the probability that the difference between the proportion and _p<sub>0</sub>_ would occur if the null hypothesis is true. When the value is sufficiently small, we reject the null hypothesis and conclude that the alternative hypothesis is true. You should have a cutoff value ready, such as 5% or 1%. If p is lower, you "reject the null hypothesis on a 5% (or 1%) level" in technical terms.
*   p-hat is the sample proportion, _x__/n_.
*   n is the sample size.

## Advanced Uses

The final optional argument of 1-PropZTest, _draw?_, will display the results in a graphical manner if you put in "1" for it. The calculator will draw the standard normal distribution, and shade the area of the graph that corresponds to the probability p. In addition, the value of z and the value of p will be displayed. You would make your conclusions in the same way as for the regular output.

## Optimization

Some of the arguments of the 1-PropZTest command have default values, and the argument can be omitted if this value is used.

*   The _draw?_ argument can be omitted if you don't want graphical output, although you could put "0" in as well.
*   If the above argument is omitted, and you're doing a two sided test, you may omit the _alternative_ argument.

Example:

```ti-basic
:1-PropZTest(.5,22,50,0,0
can be
:1-PropZTest(.5,22,50
```

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown if _p<sub>0</sub>_ or _x__/n_ are not between 0 and 1, or _x_ is negative or greater than _n_ (however, any real value for _alternative_ and _draw?_ will work)

## Related Commands

*   [2-PropZTest(](2-PropZTest\(.md)
*   [Z-Test(](Z-Test\(.md)
*   [2-SampZTest(](2-SampZTest\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


