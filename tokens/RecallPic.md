| Property      | Value |
|---------------|-------|
| Hex Value     | `$99`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `RappelImage `</li></ul> |

# `RecallPic `

## Description
Displays the graph and adds the picture stored in `Picn`.


<b>Availability</b>: Token available everywhere.

## Syntax
`RecallPic n`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>n</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `STO`, `2:RecallPic`
<hr>

<tt>RecallPic</tt> draws a saved picture to the graph screen (to save a picture, draw it on the graph screen, then save it with <tt><a href="/storepic">StorePic</a></tt>). If something is already drawn on the graph screen, <tt>RecallPic</tt> will draw new pixels where needed, but it will not erase anything. As a result, you often want to <tt><a href="/clrdraw">ClrDraw</a></tt> before recalling a picture.

The number passed to <tt>RecallPic</tt> must be one of 0 through 9. It has to be a number: <tt>RecallPic X</tt> will not work, even if X contains a value 0 through 9.

## Advanced Uses

A combination of <tt>StorePic</tt> and <tt>RecallPic</tt> can be used to maintain a background over which another [sprite](/glossary#s) moves:

1.  Draw the background, and save it to a picture file with <tt>StorePic</tt>.
2.  Next, draw the sprite to the screen.
3.  When you want to move the sprite, erase it, then use <tt>RecallPic</tt> to draw the background again.
4.  Then draw the sprite to its new location on the screen again (this can be done before or after using <tt>RecallPic</tt>).

Also, if a screen in your program takes more than a second to draw, and is displayed several times, you might want to consider storing it to a picture the first time it's drawn, and then recalling it every next time you want to draw it.

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if the argument is not a **number** 0 through 9.
*   **[ERR:UNDEFINED](/errors#undefined)** is thrown if the requested picture does not exist.

## Related Commands

*   <tt><a href="/clrdraw">ClrDraw</a></tt>
*   <tt><a href="/storepic">StorePic</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


