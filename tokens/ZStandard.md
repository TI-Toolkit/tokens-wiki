| Property      | Value |
|---------------|-------|
| Hex Value     | `$86`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ZStandard`</li></ul> |

# `ZStandard`

## Description
Replots the functions immediately, updating the window variables to the default values.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZStandard`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `6:ZStandard`
<hr>

The ZStandard command resets all [window variables](system-variables#window) found in the Window screen to their default values. This means that, unlike the other zoom commands, ZStandard can affect variables other than Xmin, Xmax, Ymin, and Ymax. However, it will only affect variables that have a purpose in the current [graphing mode](graphing-mode). Here are the default values set by ZStandard:

In all modes:

*   Xmin=-10
*   Xmax=10
*   Xscl=1
*   Ymin=-10
*   Ymax=10
*   Yscl=1

Only in [Func](Func.md) mode:

*   Xres=1

Only in [Param](Param.md) mode:

*   Tmin=0
*   Tmax=2π (in [Radian](radian-mode) mode) or 360 (in [Degree](degree-mode) mode)
*   Tstep=π/24 (in Radian mode) or 7.5 (in Degree mode)

Only in [Polar](polar-mode) mode:

*   θmin=0
*   θmax=2π (in Radian mode) or 360 (in Degree mode)
*   θstep=π/24 (in Radian mode) or 7.5 (in Degree mode)

Only in [Seq](seq-mode) mode:

*   _n_Min=1
*   _n_Max=10
*   PlotStart=1
*   PlotStep=1

These settings are often useful as a "lowest common denominator" that will work fairly well for all graphs.

## Advanced Uses

ZStandard is often used before commands such as [ZSquare](ZSquare.md) or [ZInteger](ZInteger.md) in programs. This serves two purposes: it makes sure that the center of the screen for ZSquare and ZInteger is (0,0), and it ensures that the graph screen is cleared without having to resort to [ClrDraw](ClrDraw.md) (because with two different zooms in a row, the window settings have to change at least once, which means the graph will have to be regraphed)

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this command is used outside a program.

## Related Commands

*   [ZSquare](ZSquare.md)
*   [ZInteger](ZInteger.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


