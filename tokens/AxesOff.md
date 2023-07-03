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

The `AxesOff` command disables the X and Y axes on the graph screen, so that they aren't drawn. They can be enabled again with the [AxesOn](/axeson) command.

(the y=x line that is drawn when both [Seq](/seq-mode) and [Web](/web) modes are enabled is also controlled by this command)

Generally, the `AxesOff` command should be used at the beginning of the program to disable the axes if the program is going to use the graph screen, since the axes get in the way. However, you should consider using [StoreGDB](/storegdb) and [RecallGDB](/recallgdb) to save this setting if that's the case.

## Related Commands

*   [AxesOn](/axeson)
*   [LabelOn](/labelon)
*   [LabelOff](/labeloff)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


