| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E08`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `AxesAff `</li></ul> |

# `AxesOn `

## Overview
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

## Description

The <tt>AxesOn</tt> command enables the X and Y axes on the graph screen, so that they are drawn. They can be disabled with the <tt><a href="AxesOff.md">AxesOff</a></tt> command.

(the y=x line that is drawn when both <tt><a href="Seq.md">Seq</a></tt> and <tt><a href="Web.md">Web</a></tt> modes are enabled is also controlled by this command)

## Related Commands

*   <tt><a href="AxesOff.md">AxesOff</a></tt>
*   <tt><a href="LabelOn.md">LabelOn</a></tt>
*   <tt><a href="LabelOff.md">LabelOff</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `AxesOn` added |
| <b>TI-84+CSE</b> | 4.0 | Renamed `AxesOn` to `AxesOn `


