| Property      | Value |
|---------------|-------|
| Hex Value     | `$EA`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Stat Plot](<../categories/Stat Plot.md>) > [Plots](<../categories/Stat Plot.md#Plots>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `GraphNAff `</li></ul> |

# `PlotsOff `

## Overview
Deselects all stat plots or one or more specified stat plots (`1`, `2`, or `3`).


<b>Availability</b>: Token available everywhere.

## Syntax
`PlotsOff [1,2,3]`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>stat plot</kbd>, `STAT PLOTS`, `4:PlotsOff`
<hr>

## Description

By itself, the command will turn off all three stat plots.

If it is given arguments, there can be any number of them (actually, no more than 255, but this won't stop most people), but they must all be numbers 1 to 3. Then, the command will only turn off the specified plots. Unlike some commands, it is okay to give PlotsOff an expression as an argument (for example, PlotsOff X), as long as it has a value of 1, 2, or 3.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown if a plot that is not 1, 2, or 3 is specified.

## Related Commands

*   [Plot1(, Plot2(, Plot3(](plotn)
*   [PlotsOn](PlotsOn.md)
*   [Select(](Select\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


