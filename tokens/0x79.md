| Property      | Value |
|---------------|-------|
| Hex Value     | `$79`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Suite`</li></ul> |

# `Seq`

## Overview
Sets sequence graphing mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Seq`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Seq`
<hr>

## Description

The Seq command enables [sequence](graphing-mode#sequential) graphing mode.

Sequential mode is used for graphing sequences, which can be thought of as functions from the positive (or non-negative) integers. The TI-83 calculators let _n_ be the independent variable in this situation, and the three sequences, instead of using subscripts, use the letters u, v, and w.

One of the main advantages of sequential mode is that it allows recursive definitions: u(_n_) can be defined in terms of u(_n_-1) and u(_n_-2). For recursive definitions to work, an initial case must be defined: this is done using the variables u(_n_Min), v(_n_Min), and w(_n_Min). The constant _n_Min is the initial case, for which the calculator will use a specific value rather than the formula.

For example, say a bunny population starts out at 100 and doubles each year. We can describe this situation using the recursive definition u(_n_)=2u(_n_-1) (this just says that the _n_th year population is twice the population of the previous year); then we set u(_n_Min)=100. Note that without u(_n_Min), the equation would be meaningless - without the initial population, we have no way to calculate any other population.

When you're using more than one previous value — both u(_n_-1) and u(_n_-2)) — you need more than one initial value, and then u(_n_Min) becomes a list.

## Advanced Uses

Sequence graphing mode has several submodes that can be selected from the 2nd FORMAT screen. They are [Time](Time.md), [Web](Web.md), [uvAxes](uvAxes.md), [uwAxes](uwAxes.md), and [vwAxes](vwAxes.md). Sequences are still defined in the same way, but these modes control the way that they're graphed.

The [window variables](system-variables#window) that apply to sequence mode are:

*   **_n_Min** — Determines the minimum _n_-value calculated for equations.
*   **_n_Max** — Determines the maximum _n_-value calculated for equations.
*   **PlotStart** — Determines the first value of _n_ that is actually graphed.
*   **PlotStep** — Determines the difference between consecutive _graphed_ values of _n_.
*   **Xmin** — Determines the minimum X-value shown on the screen.
*   **Xmax** — Determines the maximum X-value shown on the screen.
*   **Xscl** — Determines the horizontal space between marks on the X-axis in [AxesOn](AxesOn.md) mode or dots in [GridOn](GridOn.md) mode.
*   **Ymin** — Determines the minimum Y-value shown on the screen.
*   **Ymax** — Determines the maximum Y-value shown on the screen.
*   **Yscl** — Determines the vertical space between marks on the Y-axis in [AxesOn](AxesOn.md) mode or dots in [GridOn](GridOn.md) mode.

## Related Commands

*   [Func](Func.md)
*   [Param](Param.md)
*   [Polar](Polar.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


