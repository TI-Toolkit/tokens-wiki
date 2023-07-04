| Property      | Value |
|---------------|-------|
| Hex Value     | `$2F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Q](<../categories/Catalog.md#Q>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `RegQuatre `</li></ul> |

# `QuartReg `

## Description
Fits a quartic regression model to` Xlistname` and `Ylistname` with frequency `freqlist`, and stores the regression equation to `regequ`.


<b>Availability</b>: Token available everywhere.

## Syntax
`QuartReg [Xlistname,Ylistname,freqlist,regequ]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>Xlistname</td><td>list</td><td>Yes</td></tr>

<tr><td>Ylistname</td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

<tr><td>regequ</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `CALC`, `7:QuartReg`
<hr>

The QuartReg command can calculate the best fit quartic equation through a set of points. To use it, you must first store the points to two lists: one of the x-coordinates and one of the y-coordinates, ordered so that the Nth element of one list matches up with the Nth element of the other list. L1 and L2 are the default lists to use, and the List Editor (STAT > Edit…) is a useful window for entering the points. You must have at least 5 points, because there's infinitely many quadratics that can go through 4 points or less

In its simplest form, QuartReg takes no arguments, and calculates a quartic through the points in L1 and L2:

```ti-basic
:{9,13,21,30,31,31,34→L1
:{260,320,420,530,560,550,590→L2
:QuartReg
```

On the home screen, or as the last line of a program, this will display the equation of the quartic: you'll be shown the format, y=ax<sup>4</sup>+bx<sup>3</sup>+cx<sup>2</sup>+dx+e, and the values of a, b, c, d, and e. It will also be stored in the RegEQ variable, but you won't be able to use this variable in a program - accessing it just pastes the equation wherever your cursor was. Finally, the statistical variables a, b, c, d, e, and R<sup>2</sup> will be set as well. This latter variable will be displayed only if "Diagnostic Mode" is turned on (see [DiagnosticOn](DiagnosticOn.md) and [DiagnosticOff](DiagnosticOff.md)).

You don't have to do the regression on L1 and L2, but if you don't you'll have to enter the names of the lists after the command. For example:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:QuartReg ʟFAT,ʟCALS
```

You can attach frequencies to points, for when a point occurs more than once, by supplying an additional argument - the frequency list. This list does not have to contain integer frequencies. If you add a frequency list, you must supply the names of the x-list and y-list as well, even when they're L1 and L2.

Finally, you can enter an equation variable (such as Y<sub>1</sub>) after the command, so that the quartic equation is stored to this variable automatically. This doesn't require you to supply the names of the lists, but if you do, the equation variable must come last. You can use polar, parametric, or sequential variables as well, but since the quadratic will be in terms of X anyway, this doesn't make much sense.

An example of QuartReg with all the optional arguments:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:{2,1,1,1,2,1,1→FREQ
:QuartReg ʟFAT,ʟCALS,ʟFREQ,Y1
```

## Advanced

Note that even if a relationship is actually linear, since a quartic regression has all the freedom of a linear regression and much more, it will produce a better R<sup>2</sup> value, especially if the number of points is small, and may lead you to (falsely) believe that a relationship is quartic when it actually isn't. An extreme example is the case of 5 points which are close to being on a line. The linear regression will be very good, but the quartic will seem even better - it will go through all 5 points and have an R<sup>2</sup> value of 1. However, this doesn't make the 5 points special - any 5 (that don't have repeating x-values) will do! Take the correlation constant with a grain of salt, and consider if the fit is really that much better at the expense of much added complexity, and if there's any reason to believe the relationship between the variables may be quartic.

## Related Commands

*   [LinReg(ax+b)](linreg-ax-b)
*   [QuadReg](QuadReg.md)
*   [CubicReg](CubicReg.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


