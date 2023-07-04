| Property      | Value |
|---------------|-------|
| Hex Value     | `$E7`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Envoi(`</li></ul> |

# `Send(`

## Description
Sends one or more TI-Innovator™ Hub commands to a connected hub.
Notes:
See also eval( and Get( command related to the Send( command.
TI-Innovator™ Hub commands are supported in the HUB submenu in the CE OS v.5.2 program editor.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Send(string)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>string</b></td><td>string</td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `B:Send(`
<hr>

## Description
Sends one or more TI-Innovator™ Hub commands to a connected hub.
Notes:
See also eval( and Get( command related to the Send( command.
TI-Innovator™ Hub commands are supported in the HUB submenu in the CE OS v.5.2 program editor.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Send(string)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>string</b></td><td>string</td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `HUB`
<hr>

The Send( command is used for sending data to a CBL (Calculator Based Laboratory) device (or another compatible device) via a link cable. With some exceptions, Send('s argument must be a variable: a real number, list, matrix, string, equation, picture, or GDB. An expression or a number will not work — Send(5) or Send([A][B]) is invalid.

The exceptions are list or matrix elements (that is, you can do Send([A](1,1)) or Send(L1(2)) without an error) and non-variable lists typed out with { } brackets and commas.

## Norland Robot

You can use Send( with a Get( for a Norland calculator robot. The format called CLR format. C stands for command number, L stands for left axle, and R stands for right axle. If the command number is 1, it makes the robot moves in a direction for the time specified later in the command. If it is 2, the robot moves until the bumper hits a wall. If it is 3, it moves for a specified amount of time and stops when the robot when the bumper hits a wall. For example, send({122,100}) will make the robot move forward for 100 centiseconds, send({222}) makes it go forward until the bumper hits the wall, and send({322,100}) makes the robot move forward for 100 centiseconds and stops it when the bumper is pressed. The last two axle control numbers are like this:  
0=backwards  
1=stop  
2=forwards

## Related Commands

*   [Get(](Get\(.md)
*   [GetCalc(](GetCalc\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


