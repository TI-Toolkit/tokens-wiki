| Property      | Value |
|---------------|-------|
| Hex Value     | `$2E`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `RegCubique `</li></ul> |

# `CubicReg `

## Description
Fits a cubic regression model to `Xlistname` and `Ylistname` with frequency `freqlist`, and stores the regression equation to `regequ`.


<b>Availability</b>: Token available everywhere.

## Syntax
`CubicReg [Xlistname,Ylistname,freqlist,regequ]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>Xlistname</td><td>list</td><td>Yes</td></tr>

<tr><td>Ylistname</td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

<tr><td>regequ</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `CALC`, `6:CubicReg`
<hr>

The <tt>CubicReg</tt> command can calculate the best fit cubic function through a set of points. To use it, you must first store the points to two [lists](/lists): one of the x-coordinates and one of the y-coordinates, ordered so that the nth element of one list matches up with the nth element of the other list. L₁ and L₂ are the default lists to use, and the List Editor (STAT > Edit…) is a useful window for entering the points. You must have at least 4 points because there are infinitely many cubics that can go through 3 points or less.

In its simplest form, <tt>CubicReg</tt> takes no arguments, and calculates a cubic through the points in L₁ and L₂:

```ti-basic
:{9,13,21,30,31,31,34→L₁
:{260,320,420,530,560,550,590→L₂
:CubicReg
```

On the home screen, or as the last line of a program, this will display the equation of the quadratic: you'll be shown the format, y=ax³+bx²+cx+d, and the values of a, b, c, and d. It will also be stored in the RegEQ variable, but you won't be able to use this variable in a program — accessing it just pastes the equation wherever your cursor was. Finally, the statistical variables a, b, c, d, and R² will be set as well. This latter variable will be displayed only if "Diagnostic Mode" is turned on (see <tt><a href="/diagnosticon">DiagnosticOn</a></tt> and <tt><a href="/diagnosticoff">DiagnosticOff</a></tt>).

You don't have to do the regression on L₁ and L₂, but if you don't you'll have to enter the names of the lists after the command. For example:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:CubicReg ʟFAT,ʟCALS
```

You can attach frequencies to points, for when a point occurs more than once, by supplying an additional argument — the frequency list. This list does not have to contain integer frequencies. If you add a frequency list, you must supply the names of the x-list and y-list as well, even when they're L₁ and L₂.

Finally, you can enter an equation variable (such as Y₁) after the command, so that the equation is stored in this variable automatically. This doesn't require you to supply the names of the lists, but if you do, the equation variable must come last. You can use polar, parametric, or sequential variables as well, but since the quadratic will be in terms of X anyway, this doesn't make much sense.

An example of <tt>CubicReg</tt> with all the optional arguments:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:{2,1,1,1,2,1,1→FREQ
:CubicReg ʟFAT,ʟCALS,ʟFREQ,Y₁
```

## Advanced

Note that even if a relationship is actually linear or quadratic, since a cubic regression has all the freedom of a linear regression and more, it will produce a better R² value, especially if the number of points is small, and may lead you to (falsely) believe that a relationship is cubic when it actually isn't. Take the correlation constant with a grain of salt, and consider if the fit is really that much better at the expense of doubling the complexity and if there's any reason to believe the relationship between the variables may be cubic.

## Related Commands

*   <tt><a href="/linreg-ax-b">LinReg(ax+b)</a></tt>
*   <tt><a href="/quadreg">QuadReg</a></tt>
*   <tt><a href="/quartreg">QuartReg</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


