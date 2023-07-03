| Property      | Value |
|---------------|-------|
| Hex Value     | `$98`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `SauveImage `</li></ul> |

# `StorePic `

## Description
Stores current picture in picture `Picn`.


<b>Availability</b>: Token available everywhere.

## Syntax
`StorePic n`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>n</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `STO`, `1:StorePic`
<hr>

`StorePic` saves the graph screen to a picture (to recall it later, use `RecallPic`). Every detail of the graph screen will be stored as it appears, with the sole exception of X and Y labels on the axes (if they are shown).

The number passed to `StorePic` must be one of 0 through 9. It has to be a number: `StorePic X` will not work, even if X contains a value 0 through 9.

## Advanced Uses

A combination of `StorePic` and `RecallPic` can be used to maintain a background over which another [sprite](/glossary#s) moves:

First, draw the background, and save it to a picture file with `StorePic`.  
Next, draw the sprite to the screen.  
When you want to move the sprite, erase it, then use `RecallPic` to draw the background again.  
Then draw the sprite to its new location on the screen again (this can be done before or after using `RecallPic`).

Also, if a screen in your program takes more than a second to draw, and is displayed several times, you might want to consider storing it to a picture the first time it's drawn, and then recalling it every next time you want to draw it.

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if the argument is not a **number** 0 through 9.

## Related Commands

*   [ClrDraw](/clrdraw)
*   [RecallPic](/recallpic)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


