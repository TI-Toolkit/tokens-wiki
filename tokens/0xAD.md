| Property      | Value |
|---------------|-------|
| Hex Value     | `$AD`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [G](<../categories/Catalog.md#G>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `codetouch(`</li></ul> |

# `getKey`

## Overview
Returns the key code for the current keystroke, or `0`, if no key is pressed.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`getKey`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `7:getKey`
<hr>

## Description

The <tt>getKey</tt> command returns the value of the last key pressed since the last time <tt>getKey</tt> was executed. Reading key presses with <tt>getKey</tt> allows a program to transfer control to the user, and you can combine <tt>getKey</tt> with other commands to create [menus](custommenus), [movement](movement.md), or whatever else you want.

Every key has a number assigned to it, except for ON (which is used for breaking out of programs). The numbering system consists of a row and column: the rows go from one to ten, starting at the top; and the columns go from one to six, starting from the left. You just put the row and column together to get the key's number — for example, the ENTER key is located in row 10, column 5, making its value 105. The arrow keys look like they would be numbered separately from the other keys, but they actually follow this pattern as well. See the [key codes](key-codes) page for a picture of the key codes on the calculator.

The value of <tt>getKey</tt> is cleared every time you read from it, until a new key is pressed. For this reason, except in very rare cases, you do not want to use the value of <tt>getKey</tt> in an expression directly, but store it to a [variable](variables) first. It is also common to use <tt>getKey</tt> inside of a <tt><a href="Repeat.md">Repeat</a></tt> loop, so that the program can wait for the user to press a key.

```ti-basic
:Repeat Ans
:getKey
:End
:Ans→K
```

## Advanced Uses

You can put <tt>getKey</tt> in the condition of a loop, to make the loop repeat until any key or a particular key is pressed by the user. The same thing can be done with conditionals as well. This is useful if you don't want to store <tt>getKey</tt> to a variable, but you still want to have the user press a key. This works because of the way 'true' and 'false' get interpreted in TI-Basic.

```ti-basic
:Repeat max(getKey={24,25,26,34
:End
```

* * *

Unlike the other keys, the arrow and DEL keys can actually be held down, which will cause the key to keep being repeated until it is unpressed. This functionality is very useful in games where the user needs to repeatedly press a key to move or shoot, although it does completely disable the other keys from being able to be pressed (which is important in multiplayer games, where everybody must share the keys).

* * *

Sometimes your program may do something for several seconds without user input (say, playing an [animation](animation.md)), then pause and wait for a key to be pressed. The problem is that if a key is pressed during the animation, the next <tt>getKey</tt> will return the value of that key, and any loop set up to wait for a key press will exit immediately. The solution is to run a "dummy" <tt>getKey</tt> just before the loop begins — its value won't be used for anything, and it will reset the value of <tt>getKey</tt> to 0. This can also be used to clear keypresses meant for loading programs from inside a [shell](asmshells).

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   <tt><a href="Input.md">Input</a></tt>
*   <tt><a href="Prompt.md">Prompt</a></tt>

## See Also

*   [Key Codes](Key Codes.md)
*   [Custom Menus](Custom Menus.md)
*   [Movement in Maps](Movement in Maps.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: basickevin, burr, DarkerLine, Edward H, GoVegan, iPhoenixOnTIBD, Myles_Zadok, Weregoose.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


