| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB59`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ANUVA(`</li></ul> |

# `ANOVA(`

## Description
Performs a one-way analysis of variance for comparing the means of two to 20 populations.


<b>Availability</b>: Token available everywhere.

## Syntax
`ANOVA(list1,list2[,list3,...,list20])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list1</b></td><td>list</td><td></td></tr>

<tr><td><b>list2</b></td><td>list</td><td></td></tr>

<tr><td>list3</td><td>list</td><td>Yes</td></tr>

<tr><td>...</td><td></td><td>Yes</td></tr>

<tr><td>list20</td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `H:ANOVA(`
<hr>

The `ANOVA` (analysis of variance) command is used to test if there is a significant difference between the means of several populations (this is an extension of the [two-sample t-test](/2-sampttest) which compares only two populations). The calculator assumes the null hypothesis, that all means are equal, and returns a probability value, p, of the differences in the data occurring if the null hypothesis were true. If p is small (usually, if it's less than .05), then it's unlikely we'd get such differences just by chance if the null hypothesis were true, so we reject it and conclude that at least one of the means is different.

There are two reasons why we don't test the means in pairs using a simpler test. First of all, it would take a long time: there's so many pairs to compare. Second of all, when you're doing many tests, there's a high probability you'll get a low p-value by chance. Imagine that you're doing 10 tests. If the probability of getting a low p-value on one test is .05, then the probability that at least one test will return one is 1-.95<sup>10</sup>: about 0.4 - this is quite likely to happen. The `ANOVA` test avoids this by having only one null hypothesis to test.

If you're only interested in the result of the test, the only thing you'll need in the output is the second line: "p=…" This is your p-value, and determines whether you should reject the null hypothesis or not. If you need more detail, here are the meanings of the other variables:

*   **F** is the test statistic. If the null hypothesis is true, it should follow Snedecor's F distribution, and [Fcdf(](/fcdf) can be used to determine the p-value.
*   For both Factor and Error:
    *   MS is the mean squares (SS/df). If the null hypothesis is true, Factor MS should be roughly equal to Error MS
    *   SS is the sum of squares - see the TI-83+ Manual for formulas
    *   df is the number of degrees of freedom - for Factor, it's the df between the categorical variables, and for Error, it's the sum of df between each variable.
*   Sxp is the pooled variation.

## Advanced Uses

The statistics **F**, p, and Sxp will be stored to the appropriate variables after this test. The other six statistics do not have a normal variable associated with them. However, the [two-byte tokens](/statistics-tokens) 0x6237 through 0x623C are, in fact, used to store the values of Factor MS, Factor SS, Factor df, Error MS, Error SS, and Error df respectively. They can't be accessed through a menu, but if you use a hex editor to paste them into your program, you will be able to use them just like any other variable.

However, be careful because the Factor and Error tokens look exactly alike (even though they refer to different variables), and can be confused. Also, there is a chance that future OS versions will change the behavior of `ANOVA(`, though this is unlikely, and this trick will no longer work.

## Error Conditions

*   **[ERR:ARGUMENT](/errors#argument)** is thrown if one of the lists is blank, only one list is used, or the function is completely blank.
*   **[ERR:SYNTAX](/errors#syntax)** is thrown if you do not use lists (Matrixes, numbers,etc)
*   * **[ERR:INVALID DIM](/errors#invalid%20dim)** is thrown if you use a list that has 0 or a negative number.
*   * **[ERR:DATA TYPE](/errors#data%20type)** is thrown by using "l" or a list with a different set of data.

## Related Commands

*   [2-SampTTest](/2-sampttest)
*   [χ²-Test(](/chisquare-test)
*   [2-SampFTest](/2-sampftest)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


