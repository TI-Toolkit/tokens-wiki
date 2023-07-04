| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E09`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Window](<../categories/Window.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `AxesNAff`</li></ul> |

# `AxesOff`

## Description
Turns off the graph axes.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`AxesOff`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `AxesOff`
<hr>

The <tt>AxesOff</tt> command disables the X and Y axes on the graph screen, so that they aren't drawn. They can be enabled again with the <tt><a href="AxesOn.md">AxesOn</a></tt> command.

(the y=x line that is drawn when both <tt><a href="Seq.md">Seq</a></tt> and <tt><a href="Web.md">Web</a></tt> modes are enabled is also controlled by this command)

Generally, the <tt>AxesOff</tt> command should be used at the beginning of the program to disable the axes if the program is going to use the graph screen, since the axes get in the way. However, you should consider using <tt><a href="StoreGDB.md">StoreGDB</a></tt> and <tt><a href="RecallGDB.md">RecallGDB</a></tt> to save this setting if that's the case.

## Related Commands

*   <tt><a href="AxesOn.md">AxesOn</a></tt>
*   <tt><a href="LabelOn.md">LabelOn</a></tt>
*   <tt><a href="LabelOff.md">LabelOff</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


