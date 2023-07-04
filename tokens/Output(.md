| Property      | Value |
|---------------|-------|
| Hex Value     | `$E0`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [O](<../categories/Catalog.md#O>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Output(`</li></ul> |

# `Output(`

## Overview
Displays `text` beginning at specified `row` and `column `of the home screen.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Output(row,column,"text")`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>row</b></td><td></td><td></td></tr>

<tr><td><b>column</b></td><td></td><td></td></tr>

<tr><td><b>text</b></td><td>string</td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `6:Output(`
<hr>

## Overview
Displays `value` beginning at specified `row` and `column `of the home screen.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Output(row,column,value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>row</b></td><td></td><td></td></tr>

<tr><td><b>column</b></td><td></td><td></td></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `6:Output(`
<hr>

## Description

The <tt>Output(</tt> command is the fastest way to display text on the [home screen](homescreen). It takes three arguments: the row (1-8) at which you want to display something, the column (1-16), and whatever it is you want to display. It allows for more freedom than the <tt><a href="Disp.md">Disp</a></tt> command.

Although off-screen values for the row and column values will cause an error, it's okay if part of the text displayed goes off the screen. When text goes past the last (16th on monochrome calculators, 26th on color calculators) column, it will wrap to the first column of the next row. If the text goes past the last column of the last row, the remainder will be truncated. <tt>Output(</tt> will never cause the screen to scroll.

When the horizontal screen split mode is activated, only the first four rows of the home screen are available for the <tt>Output(</tt> command, which may cause undesirable behavior, and trying to output to the last four rows will cause an error. It is advisable to use the <tt><a href="Full.md">Full</a></tt> command at the beginning of a program that relies on <tt>Output(</tt>.

Like other text display commands, you can display each function and command as text. However, this is not without problems as each function and command is counted as one character. The two characters that you can't display are quotation marks (") and the [store](store.md) command (→). However, you can mimic these respectively by using two apostrophes (' ' ), and two subtract signs and a greater than sign (—>).

## Advanced Uses

If the last text display command of a program is an <tt>Output(</tt> command, then "Done" will not be displayed as the program finishes. Some programmers use this to get rid of the Done message by using an empty <tt>Output(</tt> command at the end (there is no text after the quote):

```ti-basic
:Output(1,1,"
```

This trick does not work on recent "MathPrint" OSes.

You can also use <tt>Output(</tt> to get rid of the run indicator. Unfortunately, it only silences it for a moment and needs to be repeated in a loop to make it appear to be gone. In a game, it should be incorporated into the main loop. The run indicator is momentarily stopped every time that you output something to the upper right corner, it just needs to be repeated for it to appear to be gone. If you're on the graph screen, you can accomplish the same thing using the <tt><a href="Text(.md">Text(</a></tt> command.

```ti-basic
:Output(1,16," "
```

Since the text displayed by an <tt>Output(</tt> command wraps, a single command can be used to overwrite the entire screen by displaying 8*16=128 (10*26=260 for color calculators) characters of text starting from row 1, column 1. Since every space on the screen is overwritten, this does not require a <tt><a href="ClrHome.md">ClrHome</a></tt> to clear previously displayed characters. Keep in mind that exactly 16 (26 on color calculators) characters will be on each line.

## Optimization

<tt>Output(</tt> does not allow for more than one expression to be displayed by a single command. However, if several strings are going to be displayed next to each other by several commands they might be combined into one (keep in mind how wrapping works):

```ti-basic
:Output(3,3,"Some Text Here
:Output(4,3,"More Text Here
can be
:Output(3,3,"Some Text Here    More Text Here
```

In addition, if you are displaying text on the entire home screen, you can place the all the text in a string and then simply display the string. This is especially useful when combined with [movement](movement.md) because you can shift the screen quite easily.

```ti-basic
:Output(1,1,Str1
```

## Command Timings

The <tt>Output(</tt> command is the fastest possible way of displaying text (short of storing text to a picture and then recalling it). In particular, when going for speed, it should be preferred instead of <tt>Disp</tt>.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown when the starting row or column are not integers in the valid range (this is affected by split screen mode).
*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.
*   An error is **not** thrown when the argument is an empty list (unlike with [Disp](Disp.md) or pretty much anything else, really)

## Related Commands

*   <tt><a href="Disp.md">Disp</a></tt>
*   <tt><a href="Text(.md">Text(</a></tt>
*   <tt><a href="Pause.md">Pause</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, CloudVariable, DarkerLine, GoVegan, kg583, Myles_Zadok, persalteas, Sleight, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


