| Property      | Value |
|---------------|-------|
| Hex Value     | `$98`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `SauveImage `</li></ul> |

# `StorePic `

## Overview
Stores current picture in picture `Picn`.


<b>Availability</b>: Token available everywhere.

## Syntax
`StorePic n`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>n</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `STO`, `1:StorePic`
<hr>

## Description

<tt>StorePic</tt> saves the graph screen to a picture (to recall it later, use <tt>RecallPic</tt>). Every detail of the graph screen will be stored as it appears, with the sole exception of X and Y labels on the axes (if they are shown).

The number passed to <tt>StorePic</tt> must be one of 0 through 9. It has to be a number: <tt>StorePic X</tt> will not work, even if X contains a value 0 through 9.

## Advanced Uses

A combination of <tt>StorePic</tt> and <tt>RecallPic</tt> can be used to maintain a background over which another [sprite](glossary#s) moves:

First, draw the background, and save it to a picture file with <tt>StorePic</tt>.  
Next, draw the sprite to the screen.  
When you want to move the sprite, erase it, then use <tt>RecallPic</tt> to draw the background again.  
Then draw the sprite to its new location on the screen again (this can be done before or after using <tt>RecallPic</tt>).

Also, if a screen in your program takes more than a second to draw, and is displayed several times, you might want to consider storing it to a picture the first time it's drawn, and then recalling it every next time you want to draw it.

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown if the argument is not a **number** 0 through 9.

## Related Commands

*   <tt><a href="ClrDraw.md">ClrDraw</a></tt>
*   <tt><a href="RecallPic.md">RecallPic</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, kg583.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


