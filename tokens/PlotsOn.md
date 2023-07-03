| Property      | Value |
|---------------|-------|
| Hex Value     | `$E9`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Stat Plot](<../categories/Stat Plot.md>) > [Plots](<../categories/Stat Plot.md#Plots>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `GraphAff `</li></ul> |

# `PlotsOn `

## Description
Selects all stat plots or one or more specified stat plots (`1`, `2`, or `3`).


<b>Availability</b>: Token available everywhere.

## Syntax
`PlotsOn [1,2,3]`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>stat plot</kbd>, `STAT PLOTS`, `5:PlotsOn`
<hr>

By itself, the command will turn on all three stat plots.

If it is given arguments, there can be any number of them (actually, no more than 255, but this won't stop most people), but they must all be numbers 1 to 3. Then, the command will only turn on the specified plots. Unlike some commands, it is okay to give PlotsOn an expression as an argument (for example, PlotsOn X), as long as it has a value of 1, 2, or 3.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if a plot that is not 1, 2, or 3 is specified.

## Related Commands

*   [Plot1(, Plot2(, Plot3(](/plotn)
*   [PlotsOff](/plotsoff)
*   [Select(](/select)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


