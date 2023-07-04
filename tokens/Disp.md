| Property      | Value |
|---------------|-------|
| Hex Value     | `$DE`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Disp `</li></ul> |

# `Disp `

## Overview
Displays the home screen.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Disp`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `3:Disp`
<hr>

## Overview
Displays each value.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Disp [valueA,valueB,valueC,...,value n]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>valueA</td><td></td><td>Yes</td></tr>

<tr><td>valueB</td><td></td><td>Yes</td></tr>

<tr><td>valueC</td><td></td><td>Yes</td></tr>

<tr><td>...</td><td></td><td>Yes</td></tr>

<tr><td>value n</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `3:Disp`
<hr>

## Description

The first, and easiest, way to display text is using the <tt>Disp</tt> command. You can display whatever combination of text and values that you want. Text is displayed on the left side of the screen, while numbers, variables and expressions are displayed on the right side. Text can be moved over to the right by padding it with spaces, but there is no equivalent for numbers, variables, and expressions.

When displaying a matrix or a list, and the matrix or list is too large to display in its entirety, an ellipsis (…) is displayed at the boundaries of the screen. The matrix or list, unfortunately, cannot be scrolled so the rest of it can be seen (use the <tt><a href="Pause.md">Pause</a></tt> command instead).

With the small screen size, you have to keep formatting in mind when displaying text. Because the text does not wrap to the next line if it is longer than sixteen characters, the text gets cut off and an ellipsis is displayed at the end of the line. When the text you want to display is longer than sixteen characters, you should break the text up and display each part with its own <tt>Disp</tt> command.

```ti-basic
:Disp "Just Saying Hello
Break the text up
:Disp "Just Saying
:Disp "Hello
```

The <tt>Disp</tt> command displays text line by line, giving each argument its own blank line. If the screen is clear, the arguments are displayed beginning at the first line. But if there is text on the first line, the arguments are displayed beginning at the first available blank line. When all the lines have text on them including the last, the screen will automatically scroll up until every line is blank.

This means that, while a <tt>Disp</tt> command can technically display an unlimited amount of lines of text, you should not display more than seven consecutive lines of text at any one time (because of the screen height). If there are too many arguments, the arguments that were displayed will be pushed up out of sight, to allow the other arguments to be displayed. This is usually not desired, but it can be used to create some cool scrolling effects by messing with the text that you display.

The result is that you can never display text on the last line of the screen using the <tt>Disp</tt> command; you need to use the <tt><a href="Output(.md">Output(</a></tt> command. (Using <tt><a href="Output(.md">Output(</a></tt> does not have any affect on <tt>Disp</tt> and its text.) Also, if you have more than seven lines of text to display, you will need to place the <tt><a href="Pause.md">Pause</a></tt> command after every seven lines to prevent the screen from scrolling. These two scenarios come up fairly often, so it is good to know how to deal with them.

```ti-basic
PROGRAM:DISP
:ClrHome
:Disp A,B,C,D,E,F,G
:Pause
:Disp A,B,C,D,E,F,G
:Output(8,16,H
```

Like other text display commands, you can display each function and command as text. However, this is not without problems as each function and command is counted as one character. The two characters that you can't display are quotation marks (") and the store command (→). However, you can mimic these respectively by using two apostrophes (''), and two subtract signs and a greater than sign (—>).

## Advanced Uses

You can use the <tt>Disp</tt> command by itself, which simply displays the home screen.

```ti-basic
:Disp
```

When you use an empty string with no text (i.e., two quotes side by side — ""), a blank line is displayed.

```ti-basic
:Disp ""
```

## Optimization

When you have a list of <tt>Disp</tt> commands (and each one has its own argument), you can just use the first <tt>Disp</tt> command and combine the rest of the other <tt>Disp</tt> commands with it. You remove the <tt>Disp</tt> commands and combine the arguments, separating each argument with a comma. The arguments can be composed of whatever combination of text, numbers, variables, or expressions is desired.

The advantages of combining <tt>Disp</tt> commands are that it makes scrolling through code faster, and it is smaller when just displaying numbers, variables, or expressions. The disadvantages are that it can hinder readability (make the code harder to read) when you have lots of varied arguments, and it is easier to accidentally erase a <tt>Disp</tt> command with multiple arguments.

```ti-basic
:Disp A
:Disp B
Combine the Disp commands
:Disp A,B
```

If you have a string of numbers that you are displaying, you do not need to put quotes around the numbers. This causes the numbers to be displayed on the right side of the screen, and they cease being a string. You may want to keep the numbers in a string, though, if they have any leading zeros. Because the numbers are no longer in a string, the leading zeros are truncated (taken off).

```ti-basic
:Disp "2345
Remove the Quotes
:Disp 2345
```

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   <tt><a href="Output(.md">Output(</a></tt>
*   <tt><a href="Text(.md">Text(</a></tt>
*   <tt><a href="Pause.md">Pause</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, CloudVariable, DarkerLine, GoVegan, Myles_Zadok, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


