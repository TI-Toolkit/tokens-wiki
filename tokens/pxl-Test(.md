| Property      | Value |
|---------------|-------|
| Hex Value     | `$13`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `pxl-Test(`</li></ul> |

# `pxl-Test(`

## Description
Returns 1 if pixel (`row`, `column`) is on, 0 if it is off;


<b>Availability</b>: Token available everywhere.

## Syntax
`pxl-Test(row,column)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>row</b></td><td></td><td>Yes</td></tr>

<tr><td><b>column</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `POINTS`, `7:pxl-Test(`
<hr>

The pxl-Test( command is used to test a pixel at the given (Y,X) coordinates of the graph screen, to see whether it is on or off. One is returned if the pixel is on and zero is returned if the pixel is off. Please note that the coordinates are switched around so that the row comes first and then the column — it's (Y,X) instead of (X,Y). This command's coordinates are independent of the window settings.

You can store the result of pxl-Test( to a variable for later use, or use the command in a [conditional](/if) or [loop](/controlflow).

```ti-basic
:Pxl-On(25,25
:If pxl-Test(25,25
:Disp "Pixel turned on!
```

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is triggered if the coordinates are not whole numbers or not in the right range ([0..62] for row, [0..94] for column). These bounds are also affected by split screen mode ([Horiz](http://tibasicdev.wikidot.com/horiz))

## Related Commands

*   [Pxl-On(](/pxl-on)
*   [Pxl-Off(](/pxl-off)
*   [Pxl-Change(](/pxl-change)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


