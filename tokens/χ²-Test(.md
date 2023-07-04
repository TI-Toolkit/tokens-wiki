| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB40`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `χ²-Test(`</li></ul> |

# `χ²-Test(`

## Overview
Performs a chi-square test. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`χ²-Test(observedmatrix,expectedmatrix[,drawflag,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>χ²-</b></td><td></td><td></td></tr>

<tr><td><b>observedmatrix</b></td><td>matrix</td><td></td></tr>

<tr><td>expectedmatrix</td><td>matrix</td><td>Yes</td></tr>

<tr><td>drawflag</td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `C:Test(`
<hr>

## Description

This command performs a <tt>χ²</tt> test of independence. This test is used to assess the independence of two categorical variables with known frequencies. The test is only valid for a simple random sample from the population, and only if all the frequencies are sufficiently large (greater than 5).

Note: this test is different from the <tt>χ²</tt> goodness of fit test, which the TI-83 calculators don't have a command for. For a program that will perform the <tt>χ²</tt> goodness-of-fit test, see the [goodness-of-fit test](goodness-of-fit) routine.

To use this test, you need a [matrix](matrices) containing a _contingency table_. This is a table in which every row corresponds to a value of the first variable, and every column to a value of the second. The number in each cell represents the frequency with which the corresponding values of the two variables occur together. For example: suppose that the two variables are sex (male and female) and eye color (blue, brown, and green). The contingency table would have two rows and three columns. The cell in the first row and column would be the number of blue-eyed men in the sample, the cell in the second row and first column would be the number of blue-eyed women, and so on.

The <tt>χ²-Test(</tt> command takes two arguments: the _observed_ matrix and _expected_ matrix. The first of these should be the contingency table you've already completed, presumably in the Matrix editor. The expected matrix does not need to already exist: the <tt>χ²-Test(</tt> command will calculate and store the expected frequencies (under the assumption that the variables are independent) to this matrix.

The command is primarily for use in a program. Although you can access the <tt>χ²-Test(</tt> command on the home screen, via the catalog, there's no need: you can use the <tt>χ²-Test…</tt> interactive solver found in the menu instead.

In either case, it's important to understand the output of <tt>χ²-Test(</tt>. Here are the meanings of each line:

*   <tt>χ²</tt> is the test statistic, calculated from the differences between the observed and the expected matrices.
*   p is the probability associated with the test statistic. We use p to test the null hypothesis that the two variables are independent. If p is low (usually, if it's <0.05) this means there's little chance that two independent variables would have a contingency table so different from the expected, and we reject the null hypothesis (so we'd conclude that the two variables are not independent).
*   df is the degrees of freedom, defined as (# of rows - 1)*(# of columns - 1), important for calculating p.

## Sample Problem

You want to compare the effectiveness of three treatments in curing a terminal disease. You have obtained data for 100 patients who had the disease, which contained information on the treatment used, and whether the patient lived or died. You put this information in a contingency table:

Lived

Died

Treatment A

40

10

Treatment B

27

6

Treatment C

11

6

To perform the test, you store this information to a matrix such as [A], either through the matrix editor or by hand:

```ti-basic
:[[40,10],[27,6],[11,6→[A]
```

You submit this matrix as the first argument, and some other matrix (such as [B]) for the second:

```ti-basic
:χ²-Test([A],[B]
```

The output looks something like this:

```ti-basic
χ²-Test
 χ²=2.14776311
 p=.3416796916
 df=2
```

The most important part of this output is the line p=.3416796916 - the probability of getting such results under the hypothesis that the treatments and survival rate are independent. This value is greater than .05, so the data is not significant on a 5% level. There is not enough evidence to reject the null hypothesis, so treatment and survival rate may very well be independent. In non-mathematical language, this means that there's no reason to believe the treatments vary in effectiveness.

## Advanced Uses

The final argument of <tt>χ²-Test(</tt>, _draw?_, will display the results in a graphical manner if you put in "1" for it. The calculator will draw the <tt>χ²</tt> distribution with the correct degrees of freedom, and shade the area of the graph beyond the <tt>χ²</tt> statistic. In addition, the same values as usually will be calculated and displayed. You would make your conclusions in the same way as for the regular output.

## Related Commands

*   <tt><a href="χ²GOF-Test(.md">χ²GOF-Test(</a></tt>
*   <tt><a href="χ²cdf(.md">χ²cdf(</a></tt>

## See Also

*   [Goodness-of-Fit Test](Goodness-of-Fit Test.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


