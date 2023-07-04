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

The <tt>Func</tt> command enables the default [function](graphing-mode#function) graphing mode. This command is usually unnecessary in a program, but if you want to graph a Y= equation, you'd want to make sure the calculator is in function mode first.

In function mode, you can graph equations where _y_ (the vertical coordinate) is a function of _x_ (the horizontal coordinate). This mode is most commonly discussed in algebra and single-variable calculus courses. Many curves, such as a parabola, have simple expressions when written in the form _y=f(x)_.

However, in function mode, many expressions cannot be graphed at all. For example, a circle can't be easily graphed in function mode, since for some _x_-values, there are two _y_-values. Using two functions, you can achieve a circle, but it will still require a friendly graphing window to display perfectly.

Many calculator features are specifically targeted at function mode graphing. For example, two graphing styles (see <tt><a href="GraphStyle(.md">GraphStyle(</a></tt>) can be only used with function mode. The <tt><a href="DrawF.md">DrawF</a></tt> and <tt><a href="DrawInv.md">DrawInv</a></tt> commands draw functions as if in graphing mode.

## Advanced Uses

The [window variables](system-variables#window) that apply to function mode are:

*   <tt>Xmin</tt> — Determines the minimum X-value shown on the screen.
*   <tt>Xmax</tt> — Determines the maximum X-value shown on the screen.
*   <tt>Xscl</tt> — Determines the horizontal space between marks on the X-axis in <tt><a href="AxesOn.md">AxesOn</a></tt> mode or dots in <tt><a href="GridOn.md">GridOn</a></tt> mode.
*   <tt>Ymin</tt> — Determines the minimum Y-value shown on the screen.
*   <tt>Ymax</tt> — Determines the maximum Y-value shown on the screen.
*   <tt>Yscl</tt> — Determines the vertical space between marks on the Y-axis in <tt>AxesOn</tt> mode or dots in <tt>GridOn</tt> mode.
*   <tt>Xres</tt> — Determines the pixel distance between points used for graphing. This is a value 1-8: 1 for best quality, 8 for best speed.

## Related Commands

*   <tt><a href="Param.md">Param</a></tt>
*   <tt><a href="Polar.md">Polar</a></tt>
*   <tt><a href="Seq.md">Seq</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


