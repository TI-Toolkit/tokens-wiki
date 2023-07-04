| Property      | Value |
|---------------|-------|
| Hex Value     | `$A4`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Ombre(`</li></ul> |

# `Shade(`

## Description
Draws `lowerfunc` and `upperfunc` in terms of `X` on the current graph and uses `pattern` and `patres` to shade and color the area bounded by `lowerfunc`, `upperfunc`, `Xleft`, and `Xright`. `lowerfunc `and `upperfunc `are shaded in the same specified color.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Shade(lowerfunc,upperfunc[,Xleft,Xright,pattern,patres,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>lowerfunc</b></td><td></td><td></td></tr>

<tr><td><b>upperfunc</b></td><td></td><td></td></tr>

<tr><td>Xleft</td><td></td><td>Yes</td></tr>

<tr><td>Xright</td><td></td><td>Yes</td></tr>

<tr><td>pattern</td><td></td><td>Yes</td></tr>

<tr><td>patres</td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `7:Shade(`
<hr>

The Shade( command draws two functions and shades the area between them.

Shade(_lower func_, _upper func_, [_xmin_, _xmax_, _pattern #_, _resolution_])

*   _lowerfunc_ and _upperfunc_ are the two functions (whenever _lowerfunc_<_upperfunc_, the area between them will be shaded)
*   _xmin_ and _xmax_ (optional) are left and right boundaries on where to shade.
*   _pattern #_ (optional) is an integer 1-4 determining which pattern to use:
    *   1 — vertical shading (default)
    *   2 — horizontal shading
    *   3 — diagonal shading (negative slope)
    *   4 — diagonal shading (positive slope)
*   _resolution_ (optional) is an integer 1-8 determining the spacing between shading lines. When it's 1 (default), everything is shaded, when it's 2, one pixel is skipped between lines, and so on - when it's 8, seven pixels are skipped.

Note that if you don't supply the _resolution_ argument, it defaults to 1 and everything gets shaded regardless of the pattern.

## Advanced Uses

Shade(Ymin,Ymax) is the smallest (though not the fastest) way to shade the entire screen.

## Related Commands

*   [DrawF](DrawF.md)
*   [DrawInv](DrawInv.md)
*   [Tangent(](Tangent\(.md)

## See Also

*   [Shading Circles](Shading Circles.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


