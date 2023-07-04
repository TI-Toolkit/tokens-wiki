| Property      | Value |
|---------------|-------|
| Hex Value     | `$E8`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [G](<../categories/Catalog.md#G>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Capt(`</li></ul> |

# `Get(`

## Description
Retrieves a value from a connected TI-Innovator™ Hub and stores the data to a variable on the receiving CE calculator.
Note: See also Send( and eval(


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Get(variable)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `A:Get(`
<hr>

## Description
Retrieves a value from a connected TI-Innovator™ Hub and stores the data to a variable on the receiving CE calculator.
Note: See also Send( and eval(


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Get(variable`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `HUB`, `5:Get`
## Special Category
Ti-Innovator™ Hub

<hr>

The <tt>Get(</tt> command is meant for use with the CBL (Calculator Based Laboratory) device, or other compatible devices. When the calculator is connected by a link cable to such a device, <tt>Get(<em>variable</em>)</tt> will read data from the device and store it to _variable_. Usually, this data is a list, and so you want to <tt>Get(L₁)</tt> or some other list variable.

## Advanced Uses

In fact, the <tt>Get(</tt> command can also be used for linking two calculators, in which case it functions precisely like <tt><a href="/getcalc">GetCalc(</a></tt>. This is probably for compatibility with the TI-82, which used <tt>Get(</tt> rather than <tt>GetCalc(</tt> for linking two calculators. However, since this isn't a documented feature (in fact, your TI-83+ manual will insist that <tt>Get(</tt> **cannot** be used in this way), it isn't guaranteed to work with future calculator versions.

## Optimization

Nevertheless, using <tt>Get(</tt> instead of <tt>GetCalc(</tt> will make your program smaller, and probably preserve functionality.

## Norland Robot

The <tt>Get(</tt> command is usually used after a <tt><a href="/send">Send</a></tt> command to confirm its transmission like this: <tt>Get(<em>var</em>)</tt>. The variable in the parentheses is where the time of the robot's movement is stored. You can display the time moved with a <tt><a href="/disp">Disp</a></tt> command.

## Related Commands

*   <tt><a href="/getcalc">GetCalc(</a></tt>
*   <tt><a href="/send">Send(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


