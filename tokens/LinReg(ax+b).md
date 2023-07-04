| Property      | Value |
|---------------|-------|
| Hex Value     | `$FF`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `RegLin(ax+b) `</li></ul> |

# `LinReg(ax+b) `

## Description
Fits a linear regression model to` Xlistname` and `Ylistname` with frequency `freqlist`, and stores the regression equation to `regequ`.


<b>Availability</b>: Token available everywhere.

## Syntax
`LinReg(ax+b) [Xlistname,Ylistname,freqlist,regequ]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>Xlistname</td><td>list</td><td>Yes</td></tr>

<tr><td>Ylistname</td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

<tr><td>regequ</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `CALC`, `4:LinReg(ax+b)`
<hr>

The LinReg(ax+b) is one of several commands that can calculate the line of best fit through a set of points. To use it, you must first store the points to two lists: one of the x-coordinates and one of the y-coordinates, ordered so that the nth element of one list matches up with the nth element of the other list. L₁ and L₂ are the default lists to use, and the List Editor (STAT > Edit…) is a useful window for entering the points.

In its simplest form, LinReg(ax+b) takes no arguments, and calculates a best fit line through the points in L₁ and L₂:

```ti-basic
:{9,13,21,30,31,31,34→L₁
:{260,320,420,530,560,550,590→L₂
:LinReg(ax+b)
```

On the home screen, or as the last line of a program, this will display the equation of the line of best fit: you'll be shown the format, y=ax+b, and the values of a and b. It will also be stored in the RegEQ variable, but you won't be able to use this variable in a program - accessing it just pastes the equation wherever your cursor was. Finally, the statistical variables a, b, r, and r² will be set as well. These latter two variables will be displayed only if "Diagnostic Mode" is turned on (see [DiagnosticOn](DiagnosticOn.md) and [DiagnosticOff](DiagnosticOff.md)).

You don't have to do the regression on L₁ and L₂, but if you don't you'll have to enter the names of the lists after the command. For example:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:LinReg(ax+b) ʟFAT,ʟCALS
```

You can attach frequencies to points, for when a point occurs more than once, by supplying an additional argument - the frequency list. This list does not have to contain integer frequencies. If you add a frequency list, you must supply the names of the x-list and y-list as well, even when they're L₁ and L₂.

Finally, you can enter an equation variable (such as Y₁) after the command, so that the line of best fit is stored to this equation automatically. This doesn't require you to supply the names of the lists, but if you do, the equation variable must come last. You can use polar, parametric, or sequential variables as well, but since the line of best fit will be in terms of X anyway, this doesn't make much sense.

An example of LinReg(ax+b) with all the optional arguments:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:{2,1,1,1,2,1,1→FREQ
:LinReg(ax+b) ʟFAT,ʟCALS,ʟFREQ,Y₁
```

## Advanced Uses (for programmers)

LinReg(ax+b), along with [LinReg(a+bx)](linreg-a-bx) and [Med-Med](Med-Med.md), can be used to [convert a number to a string](number-to-string).

## Related Commands

*   [LinReg(a+bx)](linreg-a-bx)
*   [LinRegTTest](LinRegTTest.md)
*   [LinRegTInt](LinRegTInt.md)
*   [Manual-Fit](Manual-Fit.md)
*   [Med-Med](Med-Med.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Apersoma, burr, DarkerLine, GoVegan, thornahawk, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


