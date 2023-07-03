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

`RecallPic` draws a saved picture to the graph screen (to save a picture, draw it on the graph screen, then save it with [StorePic](/storepic)). If something is already drawn on the graph screen, `RecallPic` will draw new pixels where needed, but it will not erase anything. As a result, you often want to [ClrDraw](/clrdraw) before recalling a picture.

The number passed to `RecallPic` must be one of 0 through 9. It has to be a number: `RecallPic X` will not work, even if X contains a value 0 through 9.

## Advanced Uses

A combination of `StorePic` and `RecallPic` can be used to maintain a background over which another [sprite](/glossary#s) moves:

1.  Draw the background, and save it to a picture file with `StorePic`.
2.  Next, draw the sprite to the screen.
3.  When you want to move the sprite, erase it, then use `RecallPic` to draw the background again.
4.  Then draw the sprite to its new location on the screen again (this can be done before or after using `RecallPic`).

Also, if a screen in your program takes more than a second to draw, and is displayed several times, you might want to consider storing it to a picture the first time it's drawn, and then recalling it every next time you want to draw it.

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if the argument is not a **number** 0 through 9.
*   **[ERR:UNDEFINED](/errors#undefined)** is thrown if the requested picture does not exist.

## Related Commands

*   [ClrDraw](/clrdraw)
*   [StorePic](/storepic)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


