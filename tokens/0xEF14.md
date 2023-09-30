| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF14`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `χ²GOF-Test(`</li></ul> |

# `χ²GOF-Test(`

## Overview
Performs a test to confirm that sample data is from a population that conforms to a specified distribution.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`χ²GOF-Test(observedlist,expectedlist,df [,drawflag,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>χ²</b></td><td></td><td></td></tr>

<tr><td><b>-</b></td><td></td><td></td></tr>

<tr><td><b>observedlist</b></td><td>list</td><td></td></tr>

<tr><td><b>expectedlist</b></td><td>list</td><td></td></tr>

<tr><td><b>df</b></td><td></td><td></td></tr>

<tr><td>drawflag</td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `D:`, `GOF`, `Test(`
<hr>

## Description

The <tt>χ²GOF-Test(</tt> command performs a <tt>χ²</tt> goodness-of-fit test. Given an expected ideal distribution of a variable across several categories, and a sample from this variable, it tests the hypothesis that the variable actually fits the ideal distribution. As a special case, you could take the ideal distribution to be evenly divided across all categories. Then, the goodness-of-fit test will test the hypothesis that the variable is independent of the category.

The command takes three arguments:

*   An _observed_ list with an element for each category: the element records the number of times this category appeared in the sample.
*   An _expected_ list with an element for each category: the element records the frequency with which the category was expected to appear.
*   The _degrees of freedom_ — usually taken to be one less than the number of categories.

The output is two-fold:

*   The test statistic, <tt>χ²</tt>. If the null hypothesis (that the variable fits the distribution) is true, this should be close to 1.
*   The probability, p, of the observed distribution assuming the null hypothesis. If this value is low (usually, if it's lower than .05, or lower than .01) this is sufficient evidence to reject the null hypothesis, and conclude that the variable fits a different distribution.

## Sample Problem

Working as a sales clerk, you're wondering if the number of customers depends on the day of week. You've taken a count of the number of customers every day for a week: 17 on Monday, 21 on Tuesday, 18 on Wednesday, 10 on Thursday, 24 on Friday, 28 on Saturday, and 24 on Sunday. Store this observed count: {17,21,18,10,24,28,24} to L1.

There were a total of sum(L1)=142 customers. So the expected number of customers on each day was 142/7. Store all the expected counts: {142/7,142/7,142/7,142/7,142/7,142/7,142/7} to L2 (as a shortcut, you can store 142/7{1,1,1,1,1,1,1}).

Since there are 7 days, there are 6 (one less) degrees of freedom. So the resulting command is <tt>χ²GOF-Test(L1,L2,6)</tt>.

The output will give a <tt>χ²</tt> of 10.32394366, and a p value of 0.1116563376. This is higher than 5%, so the test is not significant on a 95 percent level. It's perfectly possible, in other words, that the number of customers is independent of the day of week.

(Note that in this case, if you suspected the number of customers to be higher on weekends, you could use a more sensitive test for only two categories: <tt><a href="2-SampTTest.md">2-SampTTest</a></tt>)

## Advanced Uses

The <tt>χ²GOF-Test(</tt> command is only on TI-84 Plus and newer calculator models. However, it's possible to use the <tt><a href="χ²cdf(.md">χ²cdf(</a></tt> command to simulate it on the other calculators: see the [χ² Goodness-of-fit Test](goodness-of-fit) routine.

## Formulas

The formula for calculating the test statistic is as follows (O<sub>i</sub> is the observed count of the i<sup>th</sup> category, and E<sub>i</sub> is the expected count):

(1) $`\begin{align} \chi_{n-1}^2 = \sum_{i=1}^n \frac{(O_i-E_i)^2}{E_i} \end{align}`$ 

The p-value, then, is the probability that the <tt>χ²</tt> statistic would be this high, using the <tt><a href="χ²cdf(.md">χ²cdf(</a></tt> command with the appropriate value for degrees of freedom.

## Error Conditions

*   **[ERR:DIM MISMATCH](errors#dimmismatch)** is thrown if the two lists are of different length.
*   **[ERR:DOMAIN](errors#domain)** is thrown if they only have one element, or if _df_ is not a positive integer.

## Related Commands

*   <tt><a href="χ²-Test(.md">χ²-Test(</a></tt>

## See Also

*   [χ² Goodness-of-fit Test](χ² Goodness-of-fit Test.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 2.30 | Added |


