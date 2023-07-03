| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF15`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `LinRegTInt `</li></ul> |

# `LinRegTInt `

## Description
Performs a linear regression and computes the t confidence interval for the slope coefficient b.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`LinRegTInt [Xlistname,Ylistname,freqlist,confidence level, regequ]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>Xlistname</td><td>list</td><td><b>No</b></td></tr>

<tr><td>Ylistname</td><td>list</td><td><b>No</b></td></tr>

<tr><td>freqlist</td><td>list</td><td><b>No</b></td></tr>

<tr><td>confidence level</td><td></td><td><b>No</b></td></tr>

<tr><td>regequ</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `G:LinRegTInt`
<hr>

Like [LinReg(ax+b)](/linreg-ax-b) and similar commands, LinRegTInt finds the best fit line through a set of points. However, LinRegTInt adds another method of checking the quality of the fit, by calculating a t confidence interval for the slope b. If the confidence interval calculated contains zero, the data supplied is insufficient to conclude a linear relation between the variables.

To use LinRegTInt, you must first store the points to two lists: one of the x-coordinates and one of the y-coordinates, ordered so that the nth element of one list matches up with the nth element of the other list. L₁ and L₂ are the default lists to use, and the List Editor (STAT > Edit…) is a useful window for entering the points. You do not have to do the regression on L₁ and L₂, but if you don't you'll have to enter the names of the lists after the command.

You can attach frequencies to points, for when a point occurs more than once, by supplying an additional argument - the frequency list. This list does not have to contain integer frequencies. If you add a frequency list, you must supply the names of the x-list and y-list as well, even when they are L₁ and L₂.

You can supply a confidence level probability as the fourth argument. It should be a real number between zero and one. If not supplied, the default value is .95. (95% confidence level) If you need to specify a different confidence level, you must enter the names of the lists as well, even if they're L₁ and L₂.

Finally, you can enter an equation variable (such as Y₁) after the command, so that the line of best fit is stored to this equation automatically. This doesn't require you to supply the names of the lists, but if you do, the equation variable must come last.

For example, both

```ti-basic
:{4,5,6,7,8→L₁
:{1,2,3,3.5,4.5→L₂
:LinRegTInt
```

and

```ti-basic
:{4,5,6,7,8→X
:{1,2,3,3.5,4.5→Y
:{1,1,1,1,1→FREQ
:LinRegTTest ʟX,ʟY,ʟFREQ,.95,Y₁
```

will give the following output:

```ti-basic
LinRegTInt
    y=a+bx
    (.69088,1.0091)
    b=.85
    df=3
    s=.158113883
    a=-2.3
    r²=.9897260274
    r=.9948497512
```

(the last two lines will only appear if diagnostics have been turned on - see [DiagnosticOn](/diagnosticon))

*   The first line shows the confidence interval containing the slope of the fitted line; as mentioned above, if the interval contains 0, it cannot be concluded that the two variables have a linear relationship. Also, the smaller the difference between the two numbers, the more precision that can be attributed to the calculated slope.
*   df is the degrees of freedom, equal to the number of points minus two.
*   a and b are the parameters of the equation y=a+bx, the regression line we've calculated
*   s is the standard error about the line, a measure of the typical size of a residual (the numbers stored in ʟRESID). It is the square root of the sum of squares of the residuals divided by the degrees of freedom. Smaller values indicate that the points tend to be close to the fitted line, while large values indicate scattering.
*   r² and r are respectively the coefficients of determination and correlation: a value near 1 or -1 for the former, and near 1 for the latter, indicates a good fit.

## Related Commands

*   [LinReg(ax+b)](/linreg-ax-b)
*   [LinReg(a+bx)](/linreg-a-bx)
*   [LinRegTTest](/linregttest)
*   [Manual-Fit](/manual-fit)
*   [Med-Med](/med-med)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 2.30 | Added |


