| Property      | Value |
|---------------|-------|
| Hex Value     | `$97`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Y= Functions](<../categories/Y= Functions.md>) > [On/Off](<../categories/Y= Functions.md#On/Off>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `FonctNAff `</li></ul> |

# `FnOff `

## Description
Deselects all `Y=` functions or specified `Y=` functions.


<b>Availability</b>: Token available everywhere.

## Syntax
`FnOff [function#,function#,...,function n]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>function#</td><td></td><td>Yes</td></tr>

<tr><td>function#</td><td></td><td>Yes</td></tr>

<tr><td>function n</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>vars</b></kbd></tt>, `Y-VARS`, `4:On/Off2:FnOff`
<hr>

The <tt>FnOff</tt> command is used to turn off equations in the current [graphing mode](/graphing-mode). When you turn off an equation, it's still defined, but isn't graphed; you can reverse this with the <tt><a href="/fnon">FnOn</a></tt> command. To turn functions on and off manually, put your cursor over the = symbol in the equation editor, and press enter.

When <tt>FnOff</tt> is used by itself, it will turn off all defined equations in the current graphing mode. You can also specify which equations to turn off, by writing their numbers after <tt>FnOff</tt>: for example, <tt>FnOff 1</tt> will turn off the first equation, and <tt>FnOff 2,3,4,5</tt> will off turn the second, third, fourth, and fifth. The numbers you give <tt>FnOff</tt> have to be valid equation numbers in the graphing mode. When turning equations on and off in [sequence](/seq-mode) mode, use 1 for <tt>u</tt>, 2 for <tt>v</tt>, and 3 for <tt>w</tt>.

The most common use for <tt><a href="/fnon">FnOn</a></tt> and <tt>FnOff</tt> is to disable functions when running a program, so that they won't interfere with what you're doing on the graph screen, then enable them again when you're done.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if an equation number isn't valid in the current graphing mode, or at all.

## Related Commands

*   <tt><a href="/fnon">FnOn</a></tt>
*   <tt><a href="/plotson">PlotsOn</a></tt>
*   <tt><a href="/plotsoff">PlotsOff</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


