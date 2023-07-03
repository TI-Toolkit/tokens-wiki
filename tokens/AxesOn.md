| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E08`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `AxesAff `</li></ul> |

# `AxesOn `

## Description
Turns on the graph axes with color. The `color `option allows the color of the axes to be specified.
Color#: 10 - 24 or color name pasted from [vars] COLOR..


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`AxesOn[color#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `AxesOn`
<hr>

The `AxesOn` command enables the X and Y axes on the graph screen, so that they are drawn. They can be disabled with the [AxesOff](/axesoff) command.

(the y=x line that is drawn when both [Seq](/seq-mode) and [Web](/web) modes are enabled is also controlled by this command)

## Related Commands

*   [AxesOff](/axesoff)
*   [LabelOn](/labelon)
*   [LabelOff](/labeloff)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `AxesOn` added |
| <b>TI-84+CSE</b> | 4.0 | Renamed `AxesOn` to `AxesOn `


