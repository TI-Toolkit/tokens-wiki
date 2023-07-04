| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB3F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-PropZTest(`</li></ul> |

# `2-PropZTest(`

## Description
Computes a two-proportion `z` test. `alternative`=-`1` is <; `alternative`=`0` is ≠; `alternative`=`1` is >. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-PropZTest(x1,n1,x2,n2[,alternative,drawflag, color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x1</b></td><td></td><td></td></tr>

<tr><td><b>n1</b></td><td></td><td></td></tr>

<tr><td><b>x2</b></td><td></td><td></td></tr>

<tr><td><b>n2</b></td><td></td><td></td></tr>

<tr><td>alternative</td><td></td><td>Yes</td></tr>

<tr><td>drawflag</td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `6:2-PropZTest(`
<hr>

<tt>2-PropZTest(</tt> performs a_z_-test to compare two population proportions. This test is valid for sufficiently large samples: only when the number of successes (_x_ in the command syntax) and the number of failures (_n_-_x_) are both >5, for both populations.

The logic behind the test is as follows: we want to test the hypothesis that the proportions are equal (the null hypothesis). To do this, we assume that this "null hypothesis" is true, and calculate the probability that the differences between the two proportions occurred, under this assumption. If this probability is sufficiently low (usually, 5% is the cutoff point), we conclude that since it's so unlikely that the data could have occurred under the null hypothesis, the null hypothesis must be false, and therefore the proportions are not equal. If, on the other hand, the probability is not too low, we conclude that the data may well have occurred under the null hypothesis, and therefore there's no reason to reject it.

Commonly used notation has the letters π<sub>1</sub> and π<sub>2</sub> being used for the true population proportions (making the null hypothesis be π<sub>1</sub>=π<sub>2</sub>). TI must have been afraid that this would be confused with the real number π, so on the calculator, "p1" and "p2" are used everywhere instead.

In addition to the null hypothesis, we must have an alternative hypothesis as well - usually, this is simply that the proportions are not equal. However, in certain cases, our alternative hypothesis may be that one proportion is greater or less than the other.

The arguments to <tt>2-PropZTest(</tt> (which must be integers, or the calculator will generate a domain error) are as follows:

*   _x<sub>1</sub>_ - the success count in the first sample
*   _n<sub>1</sub>_ - the total size of the first sample (so the sample proportion would be _x<sub>1</sub>__/n<sub>1</sub>_)
*   _x<sub>2</sub>_ - the success count in the second sample
*   _n<sub>2</sub>_ - the total size of the second sample (so the sample proportion would be _x<sub>2</sub>__/n<sub>2</sub>_)
*   _alternative_ (optional if you don't include _draw?_) - determines the alternative hypothesis
    *   0 (default value) - p1≠p2
    *   -1 (or any negative value) - p1<p2
    *   1 (or any positive value) - p1>p2
*   _draw?_ (optional) set this to 1 if you want a graphical rather than numeric result

Although you can access the <tt>2-PropZTest(</tt> command on the home screen, via the catalog, there's no need: the <tt>2-PropZTest(</tt>… interactive solver, found in the statistics menu, is much more intuitive to use - you don't have to memorize the syntax.

In either case, it's important to understand the output of <tt>2-PropZTest(</tt>. Here are the meanings of each line:

*   The first line, involving p1 and p2, is the alternative hypothesis.
*   z is the test statistic. If the null hypothesis is true, it should be close to 0.
*   p is the probability that the difference between the two proportions would occur if the null hypothesis is true. When the value is sufficiently small, we reject the null hypothesis and conclude that the alternative hypothesis is true. You should have a cutoff value ready, such as 5% or 1%. If p is lower, you "reject the null hypothesis on a 5% (or 1%) level" in technical terms.
*   p-hat<sub>1</sub> is the sample proportion _x<sub>1</sub>__/n<sub>1</sub>_.
*   p-hat<sub>2</sub> is the sample proportion _x<sub>2</sub>__/n<sub>2</sub>_.
*   p-hat is the total sample proportion
*   n<sub>1</sub> is the first sample size.
*   n<sub>2</sub> is the second sample size.

## Advanced Uses

The final optional argument of <tt>2-PropZTest(</tt>, _draw?_, will display the results in a graphical manner if you put in "1" for it. The calculator will draw the standard normal distribution, and shade the area of the graph that corresponds to the probability p. In addition, the value of z and the value of p will be displayed. You would make your conclusions in the same way as for the regular output.

## Optimization

Some of the arguments of the <tt>2-PropZTest(</tt> command have default values, and the argument can be omitted if this value is used.

*   The _draw?_ argument can be omitted if you don't want graphical output, although you could put "0" in as well.
*   If the above argument is omitted, and you're doing a two-sided test, you may omit the _alternative_ argument.

Example:

```ti-basic
:2-PropZTest(22,50,48,100,0,0
can be
:2-PropZTest(22,50,48,100
```

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if the values of the arguments entered are not integers.

## Related Commands

*   <tt><a href="/1-propztest">1-PropZTest(</a></tt>
*   <tt><a href="/z-test">Z-Test(</a></tt>
*   <tt><a href="/2-sampztest">2-SampZTest(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


