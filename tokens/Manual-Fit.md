| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF16`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `Manual-Fit `</li></ul> |

# `Manual-Fit `

## Description
Fits a linear equation to a scatter plot with specified color and line style.
Color#: 10 - 24 or color name pasted from [vars] COLOR.
line style #: 1-4.


<b>Availability</b>: Token available everywhere.

## Syntax
`Manual-Fit[equname,color#,line style#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>equname</td><td></td><td><b>No</b></td></tr>

<tr><td>color#</td><td>colorNum</td><td><b>No</b></td></tr>

<tr><td>line style#</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `CALC`, `D:Manual-Fit`
<hr>

This command will allow the user to create a line of best fit according to their judgment. Activate the command by just pasting it on the screen. Then, click on a point for the line to begin followed by an end point. The calculator will then draw your line and display its equation at the top left corner of the screen. You can modify it by selecting the equation part and pressing enter. Input your desired value for the calculator to change it. The equation is stored into Y₁. If you specify what equation you want to store it to, then it will store to that function.

```ti-basic
:Manual-Fit
(this activates the command and stores to Y₁
:Manual-Fit Y₃
(this stores to Y₃ instead)
```

  
One note about this is that it only graphs linear models. It is written in the form _y=mx+b_, and you can modify _m_ or _b_.  
Exit out by 2nd QUIT.

## Advanced Uses

This command is able to function in a program, but you cannot modify the values. This is a unique form of gathering user input that stores into the specified Y= function. Of course, this draws a line across the graph screen. You can then convert the function into a different form, like this:

```ti-basic
:Manual-Fit
:Equ▶String(Y₁,Str1
```

  
This will turn the equation the user drew into a string which can then be used for output or calculations.

## Related Commands

*   [LinReg(ax+b)](/linreg-ax-b)
*   [LinReg(a+bx)](/linreg-a-bx)
*   [LinRegTInt](/linregtint)
*   [LinRegTTest](/linregttest)
*   [Med-Med](/med-med)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.46 | Added |


