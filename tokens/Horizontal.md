| Property      | Value |
|---------------|-------|
| Hex Value     | `$A6`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [H](<../categories/Catalog.md#H>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Horizontale `</li></ul> |

# `Horizontal `

## Description
Draws a horizontal line at `y` in a specified
Color#: 10 - 24 or color name pasted from [vars] COLOR.
line style #: 1-4.


<b>Availability</b>: Token available everywhere.

## Syntax
`Horizontal y[,color#,linestyle#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>y</b></td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td><b>No</b></td></tr>

<tr><td>linestyle#</td><td>integer</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `3:Horizontal`
<hr>

`Horizontal Y` draws a vertical line from the left of the graph screen to the right at _Y_. `Horizontal` is usually only used to replace a line that stretches the entire length of the graph screen, along with its counterpart [Vertical](/vertical).

`Horizontal` is affected by the window settings, unlike the [Pxl-](/pxl-on) commands.

```ti-basic
:Horizontal 5
```

## Advanced Uses

One of the fastest ways to make the entire screen black is by drawing horizontal lines from the bottom of the screen to the top.

```ti-basic
:For(A,Ymin,Ymax,ΔY
:Horizontal A
:End
```

If working with TI 84+C version calculators, the `Horizontal` command takes an additional color argument, as shown below:

```ti-basic
Horizontal 5,GRAY
```

## Related Commands

*   [Line(](/line)
*   [Vertical](/vertical)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


