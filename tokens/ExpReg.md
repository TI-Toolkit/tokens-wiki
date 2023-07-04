| Property      | Value |
|---------------|-------|
| Hex Value     | `$F5`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [E](<../categories/Catalog.md#E>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `RegExp `</li></ul> |

# `ExpReg `

## Description
Fits an exponential regression model to `Xlistname` and `Ylistname` with frequency `freqlist`, and stores the regression equation to `regequ`.


<b>Availability</b>: Token available everywhere.

## Syntax
`ExpReg [Xlistname,Ylistname,freqlist,regequ]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>Xlistname</td><td>list</td><td>Yes</td></tr>

<tr><td>Ylistname</td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

<tr><td>regequ</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `CALC`, `0:ExpReg`
<hr>

<tt>ExpReg</tt> tries to fit an exponential curve (y=a*b<sup>x</sup>) through a set of points. To use it, you must first store the points to two lists: one of the x-coordinates and one of the y-coordinates ordered so that the Nth element of one list matches up with the Nth element of the other list. L₁ and L₂ are the default lists to use, and the List Editor (STAT > Edit…) is a useful window for entering the points.

The calculator does this regression by taking the natural log [ln(](ln\(.md) of the y-coordinates (this isn't stored anywhere) and then doing a linear regression. The result, ln(y)=ln(a)+x*ln(b), is transformed into y=e<sup>ln(a)</sup>(e<sup>ln(b)</sup>)<sup>x</sup>, which is an exponential curve. This algorithm shows that if any y-coordinates are negative or 0, the calculator will instantly quit with ERR:DOMAIN.

In its simplest form, <tt>ExpReg</tt> takes no arguments, and fits an exponential curve through the points in L₁ and L₂:

```ti-basic
:{9,13,21,30,31,31,34→L₁
:{260,320,420,530,560,550,590→L₂
:LnReg
```

On the home screen, or as the last line of a program, this will display the equation of the curve: you'll be shown the format, y=a*b^x, and the values of a and b. It will also be stored in the RegEQ variable, but you won't be able to use this variable in a program - accessing it just pastes the equation wherever your cursor was. Finally, the statistical variables a, b, r, and r² will be set as well. These latter two variables will be displayed only if "Diagnostic Mode" is turned on (see <tt><a href="DiagnosticOn.md">DiagnosticOn</a></tt> and <tt><a href="DiagnosticOff.md">DiagnosticOff</a></tt>).

You don't have to do the regression on L₁ and L₂, but if you don't you'll have to enter the names of the lists after the command. For example:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:ExpReg ʟFAT,ʟCALS
```

You can attach frequencies to points, for when a point occurs more than once, by supplying an additional argument - the frequency list. This list does not have to contain integer frequencies. If you add a frequency list, you must supply the names of the x-list and y-list as well, even when they're L₁ and L₂.

Finally, you can enter an equation variable (such as Y₁) after the command, so that the curve's equation is stored in this variable automatically. This doesn't require you to supply the names of the lists, but if you do, the equation variable must come last. You can use polar, parametric, or sequential variables as well, but since the equation will be in terms of X anyway, this doesn't make much sense.

An example of <tt>ExpReg</tt> with all the optional arguments:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:{2,1,1,1,2,1,1→FREQ
:ExpReg ʟFAT,ʟCALS,ʟFREQ,Y1
```

## Related Commands

*   <tt><a href="LnReg.md">LnReg</a></tt>
*   <tt><a href="PwrReg.md">PwrReg</a></tt>
*   <tt><a href="SinReg.md">SinReg</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Myles_Zadok, thornahawk, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


