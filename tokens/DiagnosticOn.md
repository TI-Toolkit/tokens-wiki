| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB66`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `CorrelAff`</li></ul> |

# `DiagnosticOn`

## Description
Sets diagnostics-on mode; `r`, `r`², and `R`² are displayed as regression model results.


<b>Availability</b>: Token available everywhere.

## Syntax
`DiagnosticOn`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `DiagnosticOn`
<hr>

After the <tt>DiagnosticOn</tt> command is executed, all regression commands found in the STAT>CALC menu, as well as <tt><a href="LinRegTTest.md">LinRegTTest</a></tt>, will display the correlation statistics r and r² (or R<sup>2</sup> for regressions that are not linear). This is turned off by default, but there is no disadvantage whatsoever to turning it on. To reverse this command, execute the <tt><a href="DiagnosticOff.md">DiagnosticOff</a></tt> command.

The statistic r, known as the Pearson correlation coefficient, measures the strength and direction of any linear relationship in the data. If r is close to 1, then the relationship is strong and positive (that is, the variables increase and decrease together). If r is close to -1, then the relationship is strong and negative (that is, as one variable increases, the other decreases). If r is close to 0, there is no linear relationship.

The statistic r² or R², known as the coefficient of determination, is equal to the square of the above value (when it exists) and is also a measure of the strength of a relationship. Specifically, it represents the proportion of variance in the dependent variable that is accounted for by the regression model. If this value is close to 1, there is a strong relationship; if it's close to 0, there is either no relationship or the regression model is not appropriate for the data.

## Advanced

Although these statistics are a good indication of whether a regression curve is good or not, they are not infallible. For example, the initial portion of data that actually correlates exponentially may well appear linear and have a high correlation coefficient with a linear fit.

Another good way to check a regression curve is to look at the plot of the residuals vs. the x-values. If the regression curve is a good fit, then this plot should appear random in going from positive to negative. However, should you see a distinct pattern - say, if you tried a linear fit but the residual plot looks vaguely parabolic - you know you should try a different regression curve.

You should also consider what your regression line implies about the nature of the data and vice versa. For example, if you're comparing the height of release of a ball to the time it takes to fall, a natural assumption is that the regression curve should pass through (0,0), and a curve that doesn't do that may be incorrect. However, take this advice with a grain of salt: if your curve fits the data points you put in but not such natural-assumption points, that may simply mean that the curve works on a limited domain. Or, it may mean your assumptions are wrong.

## Command Timings

Although the correlation statistics are displayed with <tt>DiagnosticOn</tt>, they are calculated in either case. This means that <tt>DiagnosticOn</tt> and <tt><a href="DiagnosticOff.md">DiagnosticOff</a></tt> will not change how fast regressions are calculated.

## Related Commands

*   <tt><a href="DiagnosticOff.md">DiagnosticOff</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 1.010 | Added |


