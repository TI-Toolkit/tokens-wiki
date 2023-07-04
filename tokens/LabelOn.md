| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E0C`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `EtiqAff`</li></ul> |

# `LabelOn`

## Description
Turns on axes labels.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`LabelOn`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `LabelOn`
<hr>

The <tt>LabelOn</tt> setting enables labels on the X and Y coordinate axes. If both <tt>LabelOn</tt>and <tt><a href="AxesOn.md">AxesOn</a></tt> are set, the axes will be displayed with an X next to the X (horizontal) axis, and a Y next to the Y (vertical) axis. To disable these labels, use the <tt><a href="LabelOff.md">LabelOff</a></tt> setting.

<tt>LabelOn</tt> and <tt>LabelOff</tt> have no effect if the coordinate axes aren't displayed; there's nothing to label.

A somewhat quirky behavior of the X and Y labels is that they aren't saved by <tt><a href="StorePic.md">StorePic</a></tt>. If you save a picture of the graph screen, it records every detail of the way it looks, including equations, drawn elements, axes, grid, everything — but not the labels.

One final comment: okay, so by the way the command works we know it was once _intended_ to label the axes. However, the command doesn't actually check where the axes _are_. It puts an "x" slightly above the bottom right corner, and a "y" slightly below the top left. Most of the time, including the default graphing window, that doesn't help you to distinguish the axes in the slightest. And in split-screen mode, as shown in the screenshot, they both seem to label the x-axis. Weird.

## Related Commands

*   [LabelOff](LabelOff.md)
*   [AxesOn](AxesOn.md)
*   [AxesOff](AxesOff.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Battlesquid, burr, DarkerLine, GoVegan, kg583, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


