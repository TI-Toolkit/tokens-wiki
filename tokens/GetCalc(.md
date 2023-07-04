| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB53`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [G](<../categories/Catalog.md#G>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `GetCalc(`</li></ul> |

# `GetCalc(`

## Description
Gets contents of `variable` on another TI-84 Plus CE and stores it to `variable` on the receiving TI-84 Plus CE. By default, the TI-84 Plus CE uses the USB port if it is connected. If the USB cable is not connected, it uses the I/O port.`portflag`=0 use USB port if connected;`portflag`=1 use USB port;`portflag`=2 use I/O port.(Ignored when program runs on the TI-84 Plus CE.)


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`GetCalc(variable[,portflag])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

<tr><td>portflag</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `0:GetCalc(`
<hr>

The <tt>GetCalc(</tt> command allows you to make [multiplayer](/multiplayer) games, where two calculators communicate with each other across a link cable that is connected between them. The <tt>GetCalc(</tt> command can only receive one variable from another calculator, and the variable can be any variable (a real, list, matrix, string, etc.). The calculator doesn't exchange variable values when the variable is received, but instead replace the variable of the same name on the receiving calculator.

For the <tt>GetCalc(</tt> command to work correctly, the sending calculator must be in a preemptible state and it cannot be executing an [assembly](/assembly) program. (The sending calculator is the one which is _not_ executing the <tt>GetCalc(</tt> command.) The two main commands that you should use to ensure this are <tt><a href="/pause">Pause</a></tt> and <tt><a href="/menu">Menu(</a></tt>; however, any command that is waiting for user input will also work perfectly fine (such as <tt><a href="/prompt">Prompt</a></tt> and <tt><a href="/input">Input</a></tt>).

The <tt>GetCalc(</tt> command behaves a little differently in the older TI-83 models. If the sending calculator is idle with the <tt>Pause</tt> or <tt>Menu(</tt> command, it will automatically "press enter" when the receiving calculator executes <tt>GetCalc(</tt>. This can be frustrating when in a menu, because it prevents the user's opportunity to make a selection.

However, this can make real-time gaming more possible if used in conjunction with the Pause command. When the receiving calculator receives the variable, it could then execute the Pause command, while the sending calculator automatically exits the power-saving state and could then perform the <tt>GetCalc(</tt> command. All models after the TI-83 do not automatically exit their power-saving states.

## Advanced Uses

The TI-84+ and TI-84+SE will use the USB port if it is connected to a USB cable, otherwise they will use the I/O port. However, you can specify which port you want to use by putting a number after the variable as <tt>GetCalc(</tt>'s second argument: zero to use the USB port if connected to a USB cable, one to use the USB port without checking to see if it's connected, and two to use the I/O port.

## Related Commands

*   <tt><a href="/get">Get(</a></tt>
*   <tt><a href="/send">Send(</a></tt>

## See Also

*   [Multiplayer](/multiplayer)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


