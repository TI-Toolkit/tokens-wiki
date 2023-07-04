| Property      | Value |
|---------------|-------|
| Hex Value     | `$8D`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Zprécédent`</li></ul> |

# `ZPrevious`

## Description
Replots the graph using the window variables of the graph that was displayed before you executed the last ZOOM instruction.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZPrevious`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `MEMORY`, `1:ZPrevious`
<hr>

The ZPrevious command (and menu option) restore the [window variables](system-variables#window) Xmin, Xmax, Xscl, Ymin, Ymax, and Yscl to the values they had before the last [zoom](zoom.md) command. This means, of course, that using ZPrevious a second time will cancel its effects.

Since no variables that are specific to the current graphing mode are changed, ZPrevious doesn't always achieve the effect of reversing the previous zoom command. For example, in [Polar](polar-mode) graphing mode, [ZStandard](ZStandard.md) will set θmin and θmax to 0 and 2π respectively. However, even if they were different before ZStandard, ZPrevious will not restore these settings. Also, ZPrevious doesn't notice if you change the window settings directly (by storing to the window variables).

Unlike [ZoomSto](ZoomSto.md) and [ZoomRcl](ZoomRcl.md), the values that ZPrevious uses aren't made available in any sort of variable.

## Optimization

Using [StoreGDB](StoreGDB.md) and [RecallGDB](RecallGDB.md) is an excellent way to back up graph settings so a program doesn't modify them. However, if all you're doing is changing the window variables with one Zoom command, you can simply use ZPrevious at the end of the program instead.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this command is used outside a program (but not if the menu option is used, of course).

## Related Commands

*   [ZoomSto](ZoomSto.md)
*   [ZoomRcl](ZoomRcl.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


