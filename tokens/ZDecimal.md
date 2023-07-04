| Property      | Value |
|---------------|-------|
| Hex Value     | `$8E`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Zdécimal`</li></ul> |

# `ZDecimal`

## Description
Adjusts the viewing window so that `TraceStep=0.1`, Δ`X=0.5` and Δ`Y=0.5`, and displays the graph screen with the origin centered on the screen.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZDecimal`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `4:ZDecimal`
<hr>

The <tt>ZDecimal</tt> command makes the following changes to the [window variables](/system-variables#window):

*   Xmin=-4.7
*   Xmax=4.7
*   Xscl=1
*   Ymin=-3.1
*   Ymax=3.1
*   Yscl=1

If using a TI-84+CSE or CE, the window variables become:

*   Xmin=-6.6
*   Xmax=6.6
*   Xscl=1
*   Ymin=-4.1
*   Ymax=4.1
*   Yscl=1

Because of the dimensions of the graph screen, this has the useful effect that every pixel has round X- and Y-coordinates with at most one decimal digit. Also, the screen has correct proportions: a specific distance in the X direction is the same number of pixels in length as the same distance in the Y direction. This makes the window dimensions created by <tt>ZDecimal</tt> a [friendly window](/friendly-window) (the <tt><a href="/zinteger">ZInteger</a></tt> and <tt><a href="/zsquare">ZSquare</a></tt> commands also have this effect, but in slightly different ways)

## Advanced Uses

Using the <tt>ZDecimal</tt> command prevents gaps in certain graphs, and makes sure vertical asymptotes with integer coordinates are graphed correctly. Also, circles will be drawn as actual circles with this graphing window(unlike other windows, with which they might appear stretched).

The values given for <tt>Xmin</tt>, <tt>Xmax</tt>, etc. above are only correct for the <tt><a href="/full">Full</a></tt> mode setting (which is the default, and the most common setting). In <tt><a href="/horiz">Horiz</a></tt> and <tt><a href="/g-t">G-T</a></tt> modes, the values will be different, preserving the property that two pixels next to each other differ in coordinates by 0.1:

*   Ymin= -1.5 and Ymax= 1.5 in <tt>Horiz</tt> mode (Xmin and Xmax are the same)
*   Ymin= -2.5 and Ymax= 2.5 in <tt>G-T</tt> mode, while Xmin= -2.3 and Xmax= 2.3

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** occurs if this command is used outside a program.

## Related Commands

*   <tt><a href="/zinteger">ZInteger</a></tt>
*   <tt><a href="/zsquare">ZSquare</a></tt>
*   <tt><a href="/zstandard">ZStandard</a></tt>

## See Also

*   [Friendly Graphing Windows](/friendly-window)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


