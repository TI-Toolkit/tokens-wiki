| Property      | Value |
|---------------|-------|
| Hex Value     | `$9D`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [V](<../categories/Catalog.md#V>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Verticale `</li></ul> |

# `Vertical `

## Description
Draws a vertical line at `x `with specified color and line style.
Color#: 10 - 24 or color name pasted from [vars] COLOR.
line style #: 1-4.


<b>Availability</b>: Token available everywhere.

## Syntax
`Vertical x[,color#,linestyle#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

<tr><td>linestyle#</td><td>integer</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `4:Vertical`
<hr>

Vertical _X_ draws a vertical line from the top of the graph screen to the bottom at _X_. Vertical is usually only used to replace a line that stretches the entire length of the graph screen, along with its counterpart [Horizontal](/horizontal).

Vertical is affected by the window settings, unlike the [Pxl-](/pxl-on) commands.

```ti-basic
:Vertical 5
```

## Uses on TI 84+C Version Calculators

The Vertical command takes an additional color argument for TI 84+C version calculators, as shown below:

```ti-basic
Vertical 5,BLACK
```

## Related Commands

*   [Line(](/line)
*   [Horizontal](/horizontal)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


