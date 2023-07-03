| Property      | Value |
|---------------|-------|
| Hex Value     | `$76`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Fonct`</li></ul> |

# `Func`

## Description
Sets function graphing mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Func`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Func`
<hr>

The `Func` command enables the default [function](/graphing-mode#function) graphing mode. This command is usually unnecessary in a program, but if you want to graph a Y= equation, you'd want to make sure the calculator is in function mode first.

In function mode, you can graph equations where _y_ (the vertical coordinate) is a function of _x_ (the horizontal coordinate). This mode is most commonly discussed in algebra and single-variable calculus courses. Many curves, such as a parabola, have simple expressions when written in the form _y=f(x)_.

However, in function mode, many expressions cannot be graphed at all. For example, a circle can't be easily graphed in function mode, since for some _x_-values, there are two _y_-values. Using two functions, you can achieve a circle, but it will still require a friendly graphing window to display perfectly.

Many calculator features are specifically targeted at function mode graphing. For example, two graphing styles (see [GraphStyle(](/graphstyle)) can be only used with function mode. The [DrawF](/drawf) and [DrawInv](/drawinv) commands draw functions as if in graphing mode.

## Advanced Uses

The [window variables](/system-variables#window) that apply to function mode are:

*   `Xmin` — Determines the minimum X-value shown on the screen.
*   `Xmax` — Determines the maximum X-value shown on the screen.
*   `Xscl` — Determines the horizontal space between marks on the X-axis in [AxesOn](/axeson) mode or dots in [GridOn](/gridon) mode.
*   `Ymin` — Determines the minimum Y-value shown on the screen.
*   `Ymax` — Determines the maximum Y-value shown on the screen.
*   `Yscl` — Determines the vertical space between marks on the Y-axis in `AxesOn` mode or dots in `GridOn` mode.
*   `Xres` — Determines the pixel distance between points used for graphing. This is a value 1-8: 1 for best quality, 8 for best speed.

## Related Commands

*   [Param](/param)
*   [Polar](/polar-mode)
*   [Seq](/seq-mode)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


