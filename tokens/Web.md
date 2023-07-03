| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E0E`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [W](<../categories/Catalog.md#W>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Toile`</li></ul> |

# `Web`

## Description
Sets sequence graphs to trace as webs.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Web`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `Web`
<hr>

In Web mode, sequence equations are graphed as [web diagrams](https://mathworld.wolfram.com/WebDiagram.html). This is a way of visualizing iterations of a function (that is, the sequence n, f(n), f(f(n)), f(f(f(n))), … for some function f and starting value n). For this mode to properly work, each sequence equation should be in terms of its previous value only: u(_n_) should be a function of u(_n_-1). Referencing other sequence equations, or u(_n_-2), will yield [ERR:INVALID](/errors#invalid); referencing the value _n_ is allowed by the calculator, but makes the result meaningless so you should avoid it.

When you go to the graph screen, the associated function y=f(x) will be graphed. That is, if you define u(_n_) = cos(u(_n_-1)), the function y=cos(x) will be graphed. If you have [AxesOn](/axeson) enabled, the line y=x will also be graphed. It's easy to see that the intersection points of the graphs y=f(x) and the line y=x represent the fixed points (points such that f(x)=x) of the function.

The web diagram itself will be drawn if you press TRACE or use the [Trace](/trace) command. First you will choose the equation (u, v, or w) to trace; then, by pressing RIGHT repeatedly, the web will be drawn, starting from the initial value _n_Min. In a web diagram, a point (n, f(n)) on the graph of y=f(x) is connected by a horizontal segment to the point (f(n), f(n)) on the graph of y=x, and then by a vertical segment to the point (f(n), f(f(n))) on the graph of y=f(x) again; this process is repeated. Each pair of a horizontal and vertical segment represents an added iteration of.

Web diagrams can be used to look at the attracting behavior of fixed points. For example:

1. Graph the equation u(_n_)=cos(u(_n_-1)), u(_n_Min)=1 in Web mode, with Xmin=0, Xmax=1, Ymin=0, Ymax=1 in the WINDOW menu. You'll see that it has a single fixed point. If you TRACE the graph, the line segments will spiral around into the fixed point, so appears to be attractive.

2. Graph the equation u(_n_)=π/2cos(u(_n_-1)), u(_n_Min)=1 in Web mode, with Xmin=0, Xmax=π/2, Ymin=0, Ymax=π/2 in the WINDOW menu. This equation looks a lot like the previous one, and also has a single fixed point. However, if you TRACE the graph, the line segments (which start out quite close to the fixed point) will spiral away from it. This intuitively shows that the fixed point of f(x)=π/2cos(x) is not attractive.

See "Related Commands" for other possibilities of graphing sequences.

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** is thrown if an equation being graphed references other sequence equations or the _n_-2 term.

## Related Commands

*   [Time](/time)
*   [uvAxes](/uvaxes)
*   [uwAxes](/uwaxes)
*   [vwAxes](/vwaxes)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


