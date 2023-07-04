| Property      | Value |
|---------------|-------|
| Hex Value     | `$93`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Texte(`</li></ul> |

# `Text(`

## Overview
Writes `text` on graph beginning at pixel (`row`,`column`), where 0 ≤ `row` ≤ 164 and 0 ≤ `column` ≤ 264.
Full mode, row must be <=148; column must be 256
Horiz mode, row must be row<=66 and column must be <=256
G-T mode, row must be row <=126; column must be 176


<b>Availability</b>: Token available everywhere.

## Syntax
`Text(row,column,text1,text2,...,text n)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>row</b></td><td></td><td></td></tr>

<tr><td><b>column</b></td><td></td><td></td></tr>

<tr><td><b>text1</b></td><td>string</td><td></td></tr>

<tr><td><b>text2</b></td><td>string</td><td></td></tr>

<tr><td><b>...</b></td><td></td><td></td></tr>

<tr><td><b>text n</b></td><td>string</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `0:Text(`
<hr>

## Description

The <tt>Text(</tt> command allows you to display text on the graph screen, using the small font. It takes three arguments: the row, which can range from 0 to the number of pixels tall the screen is (62 on grayscale, 164 on color) at which you want to display something, the column, which can range from 0 to the number of pixels wide the screen is (94 on grayscale, 264 on color), and whatever it is you want to display. Like the <tt><a href="Output(.md">Output(</a></tt> command, it is limited to numbers and strings. If part of what you want to display goes off the screen, it will not be displayed - the calculator will cut you off at the most characters that will fit on the screen entirely.

Unlike the large text used on the home screen, the small font this command uses varies in width from 2 pixels to as many as 6 (counting the blank space at the end of each character, which is 1 pixel). All characters are 6 pixels tall, but the top row of pixels is used very rarely (only in international characters such as ä). On the TI-84+/SE/CSE/CE, the <tt>Text(</tt> command may also erase a single row of pixels underneath the text: whether this occurs or not depends on whether it was the menu screen or the table that was visited last, of the two.  
Without storing them to a special string, the <tt>Text(</tt> command cannot be used to display quotation marks (") and the [STO](store) (→) command. However, you can mimic these respectively by using two apostrophes (' ' ), and two subtract signs and a greater than sign (—>).

Like many other drawing commands, if you're outside a program and on the graph screen, you can use this command directly, without going to the home screen. Just select Text( from the draw menu, and you will be able to type text at a cursor you control with arrow keys; press CLEAR or ENTER (among other things) to exit this mode.

## Advanced Uses

On the TI-83/84/+/SE/CSE/CE, <tt>Text(</tt> has an alternate syntax: put a -1 before the row and column to display the text using the large font instead of the small font. With this syntax, <tt>Text(</tt> becomes like an <tt>Output(</tt> for the graph screen, but with more features: you don't have to display text exactly aligned to one of the home screen's rows and columns, and you can display more than one string or number at a time. Also, text still won't wrap like <tt>Output(</tt>'s does.

This feature may be helpful in making programs more appealing, but remember that it does not work on the regular TI-83. If you want to maintain compatibility, don't use this syntax, or make an alternate version of your program without it.

* * *

The <tt>Text(</tt> command is also critical to the sprite technique known as [text sprites](graphics). Although they have limitations, they allow pure Basic programs to have high-quality graphics without taking up lots of space. This effect is not as good on the color calculators.

* * *

On the TI-84+ and TI-84+ SE, another compatibility issue occurs with <tt>Text(</tt>. On certain occasions, using Text( to display small text on the graph screen will erase a 1-pixel margin below the text itself. The cause is a system option which is turned on when accessing the new MODE menu, and turned off when accessing the table, matrix editor, or list editor. The 1-pixel margin may not seem like a big deal, but it's enough to stop certain games (such as Bryan Thomas's [Contra](Contra.md)) from working on the TI-84+/SE.

The situation can be detected quite easily: turn on a pixel, display text 6 rows above it, and test if the pixel is still turned on. Fixing the situation is slightly more difficult:

*   The hex code <tt><a href="AsmPrgm.md">AsmPrgm</a>FDCB058EC9</tt> will disable the option (but it requires having an additional subprogram).
*   <tt><a href="DispTable.md">DispTable</a></tt> will also do the trick, but of course it will display the table as well.
*   Switch the program to <tt><a href="G-T.md">G-T</a></tt> while it's on the graphscreen. Before doing this it's useful to have a <tt><a href="FnOff.md">FnOff</a></tt>.
    *   The above two don't work in resetting the flag on OSes 2.53 MP or higher, the hex code is required.
*   There's the option of telling users to access a certain screen before playing…

You can also try to get around the situation by storing and recalling pictures, to prevent anything from being erased when you don't want it to be.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown if the coordinates of <tt>Text(</tt> are not integers or are out of range. A few comments:
    *   **[ERR:DATA TYPE](errors#datatype)** can sometimes occur instead on the TI-83+ or higher because of confusion with the alternate syntax
    *   Similarly, <tt>Text(-1,0,0)</tt> will cause no error and display nothing whatsoever on the TI-83+ or higher.
    *   With <tt>Text(-1,…</tt> the upper bound on the row is one less of what it would be normally.
    *   In <tt><a href="Horiz.md">Horiz</a></tt> mode the upper bound on the row is 25 rather than 57. In <tt>G-T</tt> mode the upper bound on the column is 46.
*   **[ERR:ARGUMENT](errors#argument)** is thrown if the number of arguments given to <tt>Text(</tt> is 256 or more or if one of the arguments contains an imaginary part. The latter restriction can be bypassed with clever programming. One such method is displayed here: <tt>&lt;complex number&gt;:Text(x,y,real(Ans),sub(“+-“,1+(imag(Ans)&lt;0)),imag(Ans),”i</tt>

## Related Commands

*   <tt><a href="Disp.md">Disp</a></tt>
*   <tt><a href="Output(.md">Output(</a></tt>
*   <tt><a href="Pause.md">Pause</a></tt>
*   <tt><a href="TextColor(.md">TextColor(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, Edward H, GoVegan, iPhoenixOnTIBD, Ivoah, kg583, mattyjraps, Myles_Zadok, Timothy Foster, ztrumpet.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


