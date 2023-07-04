| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB33`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Logistique `</li></ul> |

# `Logistic `

## Description
Fits a logistic regression model to` Xlistname `and `Ylistname` with frequency `freqlist`, and stores the regression equation to `regequ`.


<b>Availability</b>: Token available everywhere.

## Syntax
`Logistic [Xlistname,Ylistname,freqlist,regequ]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>Xlistname</td><td>list</td><td>Yes</td></tr>

<tr><td>Ylistname</td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

<tr><td>regequ</td><td></td><td>Yes</td></tr>

</table>

## Location
`CALC`, `B:Logistic`
<hr>

Logistic tries to fit a logistic curve (y=_c_/(1+_a_*_e_<sup>-<em>b</em>*x</sup>)) through a set of points. To use it, you must first store the points to two lists: one of the x-coordinates and one of the y-coordinates, ordered so that the _i_<sup>th</sup> element of one list matches up with the _i_<sup>th</sup> element of the other list. L₁ and L₂ are the default lists used, and the List Editor (STAT > Edit…) is a useful window for entering the points.

___

The explanation for the odd format of a logistic curve is that it is the [solution to a differential equation](https://mathworld.wolfram.com/LogisticEquation.html) that models population growth with a limiting factor: a population that grows according to a logistic curve will start out growing exponentially, but will slow down before reaching a carrying capacity and approach this critical value without reaching it. The logistic curve also has applications, for example, in physics.

In its simplest form, Logistic takes no arguments, and fits a logistic curve through the points in L₁ and L₂:

```ti-basic
:{9,13,21,30,31,31,34→L₁
:{260,320,420,530,560,550,590→L₂
:Logistic
```

On the home screen, or as the last line of a program, this will display the equation of the curve: you'll be shown the format, y=_c_/(1+_a__e_^(-_b_x)), and the values of _a_, _b_ and _c_. It will also be stored in the RegEQ variable, but you won't be able to use this variable in a program - accessing it just pastes the equation wherever your cursor was. Finally, the statistical variables _a_, _b_, and _c_ will be set as well. There are no correlation statistics available for Logistic even if Diagnostic Mode is turned on (see [DiagnosticOn](DiagnosticOn.md) and [DiagnosticOff](DiagnosticOff.md)).

You do not have to do the regression on L₁ and L₂, in which case you will have to enter the names of the lists after the command. For example:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:Logistic ʟFAT,ʟCALS
```

You can attach frequencies to points, for when a point occurs more than once, by supplying an additional argument - the frequency list. This list does not have to contain integer frequencies. If you add a frequency list, you must supply the names of the x-list and y-list as well, even when they're L₁ and L₂.

Finally, you can enter an equation variable (such as Y₁) after the command, so that the curve's equation is stored to this variable automatically. This does not require you to supply the names of the lists, but if you do, the equation variable must come last. You can use polar, parametric, or sequential variables as well, but since the equation will be in terms of X anyway, this doesn't make much sense.

An example of Logistic with all the optional arguments:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:{2,1,1,1,2,1,1→FREQ
:Logistic ʟFAT,ʟCALS,ʟFREQ,Y₁
```

Warning: if your data is not even slightly logistic in nature, then the calculator may return an error such as ERR:OVERFLOW. This happens when the calculator tries to calculate a carrying capacity, _c_, for the data, but since the rate of change in data doesn't seem to be slowing down, it assumes that the carrying capacity is still very far off, and tries large values for it. These values may get so large as to cause an overflow.

The [Levenberg-Marquardt](http://en.wikipedia.org/wiki/Levenberg-Marquardt_algorithm) nonlinear least-squares algorithm is used by Logistic.

## Error Conditions

*   **[ERR:ARGUMENT](errors#argument)** is thrown by using only one list.
*   **[ERR:DIM MISMATCH](errors#dimmismatch)** is thrown if the dimensions of two lists do not match.
*   **[ERR:DOMAIN](errors#domain)** is thrown if Logistic is left without using lists or enough instructions.
*   **[ERR:DATA TYPE](errors#datatype)** is thrown if lists are not used, or a list contains a number like "4i".

## Related Commands

*   [LinReg(ax+b)](linreg-ax-b)
*   [ExpReg](ExpReg.md)
*   [SinReg](SinReg.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, nap386, thornahawk, Timothy Foster.___

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


