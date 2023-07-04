| Property      | Value |
|---------------|-------|
| Hex Value     | `$78`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Polaire`</li></ul> |

# `Polar`

## Description
Sets polar graphing mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Polar`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Polar`
<hr>

The Polar command enables the [polar](graphing-mode#polar) graphing mode.

Unlike the previous modes, polar mode doesn't use the more common (x,y) coordinates. Instead, the coordinates (r,θ) are used, where θ is the counterclockwise angle made with the positive x-axis, and r is the distance away from the origin (the point (0,0)). Although it's possible to translate from one system to the other, polar coordinates are more useful for some expressions (and, of course, less useful for others).

In particular, they're very good at graphing anything circle-related. The equation for a circle in polar mode is just r=1 (or any other number, for a circle of different radius).

Like in parametric mode, the parameter θ uses the window variables θmin, θmax, and θstep to determine which points are graphed. A common situation is θmin=0, θmax=2π: in [Radian](radian-mode) mode, this corresponds to going all the way around the circle. Of course, you could use [Degree](degree-mode) mode and set θmax to be 360, but this is uncommon in mathematics.

## Advanced Uses

The [window variables](system-variables#window) that apply to polar mode are:

*   **θmin** — Determines the minimum θ-value graphed for equations.
*   **θmax** — Determines the maximum θ-value graphed for equations.
*   **θstep** — Determines the difference between consecutive θ-values.
*   **Xmin** — Determines the minimum X-value shown on the screen.
*   **Xmax** — Determines the maximum X-value shown on the screen.
*   **Xscl** — Determines the horizontal space between marks on the X-axis in [AxesOn](AxesOn.md) mode or dots in [GridOn](GridOn.md) mode.
*   **Ymin** — Determines the minimum Y-value shown on the screen.
*   **Ymax** — Determines the maximum Y-value shown on the screen.
*   **Yscl** — Determines the vertical space between marks on the Y-axis in [AxesOn](AxesOn.md) mode or dots in [GridOn](GridOn.md) mode.

## Related Commands

*   [Func](Func.md)
*   [Param](Param.md)
*   [Seq](Seq.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


