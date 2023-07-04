| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB32`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `RegSin `</li></ul> |

# `SinReg `

## Description
Attempts `iterations` times to fit a sinusoidal regression model to `Xlistname` and `Ylistname` using a `period` guess, and stores the regression equation to `regequ`.


<b>Availability</b>: Token available everywhere.

## Syntax
`SinReg [iterations,Xlistname,Ylistname,period,regequ]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>iterations</td><td></td><td>Yes</td></tr>

<tr><td>Xlistname</td><td>list</td><td>Yes</td></tr>

<tr><td>Ylistname</td><td>list</td><td>Yes</td></tr>

<tr><td>period</td><td></td><td>Yes</td></tr>

<tr><td>regequ</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `CALC`, `C:SinReg`
<hr>

SinReg tries to fit a sine wave to a given list of points. To use it, you must first store the points to two lists: one of the x-coordinates and one of the y-coordinates, ordered so that the _i_<sup>th</sup> element of one list matches up with the _i_<sup>th</sup> element of the other list (i.e. the first element of the x-list and the first element of the y-list make up an ordered pair). L₁ and L₂ are the default lists used, and the List Editor (STAT > Edit…) is a useful window for entering the points.

___

SinReg requires that the lists contain at least 4 points. Also, if you do not provide two data points per cycle, the calculator may return a wrong answer. These conditions are an absolute minimum, and the command may fail to work even when they are met, and throw a [ERR:SINGULAR MAT](errors#singularmat) error. This is also likely to happen if the data are not actually periodic in nature.

In addition, to use SinReg in its simplest form, the x-coordinates must be sorted in increasing order, and the difference between consecutive x-coordinates must be the same throughout (i.e., _x_<sub>𝑖+1</sub>-_x_<sub>𝑖</sub> should be the same for all i). You can then call SinReg with no arguments, and it will attempt to fit a sine wave to the data in L₁ and L₂:

```ti-basic
:{1,2,3,4,5,6,7,8,9,10,11,12→L₁
:{21,24,34,46,58,67,72,70,61,50,40,27→L₂
:SinReg
```

On the home screen, or as the last line of a program, this will display the equation of the curve: you'll be shown the format, _y_=_a_*sin(_b__x_+_c_)+_d_, and the values of _a_, _b_, _c_ and _d_. It will also be stored in the RegEQ variable, but you will not be able to use this variable in a program - accessing it just pastes the equation wherever your cursor was. Finally, the statistical variables _a_, _b_, _c_, and _d_ will be set to the values computed as well. There are no correlation statistics available for SinReg even if Diagnostic Mode is turned on (see [DiagnosticOn](DiagnosticOn.md) and [DiagnosticOff](DiagnosticOff.md)).

A word of caution: the calculator assumes that [Radian](radian-mode) mode is enabled. If the calculator is set to [Degree](degree-mode) mode, the equation will still be in terms of radians: it will be correct, but values plugged in will give wrong answers. You will have to either switch to Radian mode, or multiply the values of _b_ and _c_ by 180/π.

You do not have to do the regression on L₁ and L₂, in which case you'll have to enter the names of the lists after the command. For example:

```ti-basic
:{1,2,3,4,5,6,7,8,9,10,11,12→MONTH
:{21,24,34,46,58,67,72,70,61,50,40,27→TEMP
:SinReg ʟMONTH,ʟTEMP
```

Unlike the other regression commands, SinReg does not allow you to use a frequency list for data. You can get around this by adding repeating coordinates multiple times.

The optional argument _iterations_ should come before the data lists, and if provided will change the amount of time and effort the calculator spends on the problem. The value should be an integer 1 to 16; larger numbers mean greater precision, but a longer calculation time. The default value is 3, and for good reason: with a high precision value, the calculation may take a minute to complete, or longer, depending on the complexity of the problem.

The optional argument _period_ should be given after the data lists - this is the length of a complete cycle in the data, if known. You might know the exact value of the period, for example, when the calculation involves time - a complete cycle could be a day, a month, or a year. Providing this argument is strongly recommended whenever it is available: this removes conditions on the x-coordinates' order and increment, and makes the calculation much faster and more accurate. If you have previously done a SinReg fit and desire a refined estimate, the value 2π_/b_ can be given as the period.

Finally, you can enter an equation variable (such as Y₁) after the command, so that the curve's equation is stored to this variable automatically. This does not require you to supply the names of the lists, but if you do, the equation variable must come last. You can use polar, parametric, or sequential variables as well, but since the equation will be in terms of X anyway, this does not make much sense.

An example of SinReg with all the optional arguments:

```ti-basic
:{1,2,3,4,5,6,7,8,9,10,11,12→MONTH
:{21,24,34,46,58,67,72,70,61,50,40,27→TEMP
:SinReg 16,ʟMONTH,ʟTEMP,12,Y₁
```

The [Levenberg-Marquardt](http://en.wikipedia.org/wiki/Levenberg-Marquardt_algorithm) nonlinear least-squares algorithm is used by SinReg.

## Error Conditions

*   **[ERR:SINGULAR MAT](errors#singularmat)** is thrown if you don't provide the calculator at least 4 points, or two data points per cycle.

## Related Commands

*   [LinReg(ax+b)](linreg-ax-b)
*   [ExpReg](ExpReg.md)
*   [Logistic](Logistic.md)

___

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


