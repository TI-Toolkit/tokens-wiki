| Property      | Value |
|---------------|-------|
| Hex Value     | `$77`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Param`</li></ul> |

# `Param`

## Overview
Sets parametric graphing mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Param`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Par`
<hr>

## Description

The Param command enables [parametric](graphing-mode#parametric) graphing mode.

Parametric mode is in many ways a generalization of function mode. Instead of writing y as a function of x, both x and y are written as a function of a parameter t (hence the name, parametric mode). You can easily see that equations in function mode are just a special case of equations in parametric mode: if you set x equal to t, then writing y=f(t) is equivalent to writing y=f(x). Of course, graphing a function this way on a calculator will be slightly slower than doing it in function mode directly, because of the overhead.

Parametric mode allows you the greatest freedom of all the possible graphing modes - nearly every curve you could encounter can be expressed in parametric form.

In mathematics, the parameter t is commonly allowed to take on all values from negative to positive infinity. However, this would be impossible to do on a calculator, since the equation would never stop graphing (unlike function mode, there's no easy way to check for which values of t the equation will go off the screen and there's no need to graph it). Instead, the calculator has [window variables](system-variables) Tmin, Tmax, and Tstep: it will evaluate the parameter at every value from Tmin to Tmax, increasing by Tstep each time, and 'connect the dots'.

Polar mode, which you'll read about in the next section, is also a special case of parametric mode: To graph r=f(θ), you can instead graph x=f(t)cos(t) and y=f(t)sin(t), with t graphed over the same interval as θ.

## Advanced Uses

The [window variables](system-variables#window) that apply to parametric mode are:

*   **Tmin** — Determines the minimum T-value graphed for equations.
*   **Tmax** — Determines the maximum T-value graphed for equations.
*   **Tstep** — Determines the difference between consecutive T-values.
*   **Xmin** — Determines the minimum X-value shown on the screen.
*   **Xmax** — Determines the maximum X-value shown on the screen.
*   **Xscl** — Determines the horizontal space between marks on the X-axis in [AxesOn](AxesOn.md) mode or dots in [GridOn](GridOn.md) mode.
*   **Ymin** — Determines the minimum Y-value shown on the screen.
*   **Ymax** — Determines the maximum Y-value shown on the screen.
*   **Yscl** — Determines the vertical space between marks on the Y-axis in [AxesOn](AxesOn.md) mode or dots in [GridOn](GridOn.md) mode.

## Related Commands

*   [Func](Func.md)
*   [Polar](Polar.md)
*   [Seq](Seq.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


