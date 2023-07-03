| Property      | Value |
|---------------|-------|
| Hex Value     | `$F6`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `RegLn `</li></ul> |

# `LnReg `

## Description
Fits a logarithmic regression model to `Xlistname` and `Ylistname` with frequency `freqlist`, and stores the regression equation to `regequ`.


<b>Availability</b>: Token available everywhere.

## Syntax
`LnReg [Xlistname,Ylistname,freqlist,regequ]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>Xlistname</td><td>list</td><td>Yes</td></tr>

<tr><td>Ylistname</td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

<tr><td>regequ</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `CALC`, `9:LnReg`
<hr>

LnReg tries to fit a logarithmic curve (y=a+b*lnx) through a set of points. To use it, you must first store the points to two lists: one of the x-coordinates and one of the y-coordinates, ordered so that the nth element of one list matches up with the nth element of the other list. L₁ and L₂ are the default lists to use, and the List Editor (STAT > Edit…) is a useful window for entering the points.

The calculator does this regression by taking the natural log [ln(](/ln) of the x-coordinates (this isn't stored anywhere) and then doing a linear regression. This means that if any x-coordinates are negative or 0, the calculator will instantly quit with [ERR:DOMAIN](/errors#domain).

In its simplest form, LnReg takes no arguments, and fits a logarithmic curve through the points in L₁ and L₂:

```ti-basic
:{9,13,21,30,31,31,34→L₁
:{260,320,420,530,560,550,590→L₂
:LnReg
```

On the home screen, or as the last line of a program, this will display the equation of the curve: you'll be shown the format, y=a+b*ln(x), and the values of a and b. It will also be stored in the RegEQ variable, but you won't be able to use this variable in a program - accessing it just pastes the equation wherever your cursor was. Finally, the statistical variables a, b, r, and r² will be set as well. These latter two variables will be displayed only if "Diagnostic Mode" is turned on (see [DiagnosticOn](/diagnosticon) and [DiagnosticOff](/diagnosticoff)).

You don't have to do the regression on L₁ and L₂, but if you don't you'll have to enter the names of the lists after the command. For example:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:LnReg ʟFAT,ʟCALS
```

You can attach frequencies to points, for when a point occurs more than once, by supplying an additional argument - the frequency list. This list does not have to contain integer frequencies. If you add a frequency list, you must supply the names of the x-list and y-list as well, even when they're L₁ and L₂.

Finally, you can enter an equation variable (such as Y₁) after the command, so that the curve's equation is stored to this variable automatically. This doesn't require you to supply the names of the lists, but if you do, the equation variable must come last. You can use polar, parametric, or sequential variables as well, but since the equation will be in terms of X anyway, this doesn't make much sense.

An example of LnReg with all the optional arguments:

```ti-basic
:{9,13,21,30,31,31,34→FAT
:{260,320,420,530,560,550,590→CALS
:{2,1,1,1,2,1,1→FREQ
:LnReg ʟFAT,ʟCALS,ʟFREQ,Y₁
```

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if any x-coordinates are negative or 0.

## Related Commands

*   [ExpReg](/expreg)
*   [PwrReg](/pwrreg)
*   [SinReg](/sinreg)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


