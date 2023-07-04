| Property      | Value |
|---------------|-------|
| Hex Value     | `$D8`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Pause `</li></ul> |

# `Pause `

## Description
Suspends program execution until you press Í.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Pause`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `8:Pause`
<hr>

## Description
Displays `value`; suspends program execution until you press Í.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Pause [value]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>value</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `8:Pause`
<hr>

## Description
Displays value on the current home screen and execution of the program continues after the time period specified. For time only, use Pause `“”,time` where the value is a blank string. Time is in seconds.
Pause `value,time`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Pause [value, time]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>value</td><td></td><td>Yes</td></tr>

<tr><td>time</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `8:Pause`
<hr>

The <tt>Pause</tt> command is used for suspending the execution of a program at a certain point. This is useful when you have text or instructions on the home screen that you want the user to read before the program continues on to the next thing. While the program is paused, the pause indicator turns on in the top-right corner of the screen (it is the dotted line that moves around).

After the user is done reading the text or instructions, they must press ENTER to resume program execution. One place the <tt>Pause</tt> command is commonly used is right before clearing the screen with <tt><a href="ClrHome.md">ClrHome</a></tt>, because otherwise the text on the screen will show up for a split second before it is erased. The <tt>Pause</tt> command gives the user ample time to look at and read the text.

```ti-basic
:Pause
```

An alternative to the <tt>Pause</tt> command that is commonly used is a <tt><a href="Repeat.md">Repeat</a></tt> loop with a <tt><a href="getKey.md">getKey</a></tt> command as the condition. This is sometimes more appropriate in a program if you don't want to bring the program to a complete standstill, and you want the user to be able to resume program execution with any key instead of just ENTER (see [usability](usability.md) for more information).

```ti-basic
:Repeat getKey
:End
```

## Advanced Uses

The <tt>Pause</tt> command has an optional argument that can either be text, a number, a variable, or an expression. This argument will be displayed on the next available blank line on the home screen while the program is paused, and it can be scrolled if it is larger than the screen. Although the <tt>Pause</tt> command can be used with the graph screen, the argument will still be displayed on the home screen.

**Caution**: Unlike any other text command, or indeed any other command at all, this optional argument will be stored to <tt><a href="Ans.md">Ans</a></tt> after the pause! This could be used to your advantage, but most of the time, it's a nuisance, and if you use Ans for optimization, watch out for this side effect.

Displaying text with the <tt>Pause</tt> command follows the same pattern as the <tt><a href="Disp.md">Disp</a></tt> command, so text is displayed on the left and everything else is displayed on the right. It also means that if there is already text on the seventh row, it will automatically move everything up one row so it can display its text. In addition, the Pause command is affected by the <tt><a href="Output(.md">Output(</a></tt> command and its text.

```ti-basic
PROGRAM:PAUSE
:ClrHome
:"World!
:Disp " Hello "+Ans
:Output(2,2,"Goodbye
:Pause Ans
```

When the calculator is paused, it is possible for another linked calculator to use the <tt><a href="GetCalc(.md">GetCalc(</a></tt> command to transfer a variable.

[+ Show TI-84+CE specific information](javascript:;)

[- Hide TI-84+CE specific information](javascript:;)

The TI-84+CE also introduced an optional second argument to the Pause command. With this argument, you can specify the amount of time you wish to wait for in seconds:

```ti-basic
:Pause "HELLO",2
```

  
Using the empty string "" with the optional second argument will cause the Pause command to wait for the specified amount of time without displaying anything on the screen:

```ti-basic
:Pause "",3.5
```

  
The more recent <tt><a href="Wait.md">Wait</a></tt> command can do this as well. Here’s the first example, but using Wait:

```ti-basic
:Disp “HELLO
:Wait 2
```

## Optimization

When you have a <tt>Disp</tt> command before a <tt>Pause</tt> command, you can take the text or variable from the <tt>Disp</tt> command and place it after the Pause command as its optional argument. This allows you to remove the <tt>Disp</tt> command. If the <tt>Disp</tt> command has multiple arguments, you just take the last one off and put it as the optional argument.

```ti-basic
:Disp A
:Pause
can be
:Pause A
```

When using the optional argument of <tt>Pause</tt>, it is stored to <tt>Ans</tt>, and this can in rare cases be used for optimization. The most common one would probably be using <tt>Pause</tt> to show work for a calculation, as in the following program:

```ti-basic
:Disp "A+B=
:Pause A+B
:Disp "(A+B)²=
:Pause Ans²
:Disp "(A+B)²-C²=
:Pause Ans-C²
```

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   <tt><a href="Disp.md">Disp</a></tt>
*   <tt><a href="Output(.md">Output(</a></tt>
*   <tt><a href="Text(.md">Text(</a></tt>
*   <tt><a href="Wait.md">Wait</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: alexrudd, burr, CloudVariable, DarkerLine, GoVegan, iPhoenixOnTIBD, jonbush, kg583, Myles_Zadok, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


