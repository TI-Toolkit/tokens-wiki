| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB45`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [G](<../categories/Catalog.md#G>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `GraphStyle(`</li></ul> |

# `GraphStyle(`

## Description
Sets a `graphstyle` for `function#`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`GraphStyle(function#,graphstyle#)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>function#</b></td><td></td><td></td></tr>

<tr><td><b>graphstyle#</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `H:GraphStyle(`
<hr>

The `GraphStyle(` command allows you to set the graphing style of an equation (line, thick line, dotted line, etc.) from within a program.

Its first argument, _equation #_, is the number of the equation whose graphing style you want to change - this depends on the mode you're in. For example, if you wanted to change the graphing style of Y<sub>1</sub>, you would need to be in [function](/func) mode and use the value 1 for this argument. If you wanted to change the graphing style of r<sub>4</sub>, you would need to be in [polar](/polar-mode) mode and use the value 4.

The second argument is a number from 1 to 7, which translates to a graphing style as follows:

*   1 - a normal line, usually the default graph style.
*   2 - a thick line (three pixels wide).
*   3 - a line, with everything above it shaded (only valid in function mode).
*   4 - a line, with everything below it shaded (only valid in function mode).
*   5 - a path: a line, with a ball moving along it as it is graphed (not valid in [sequential](/seq-mode) mode).
*   6 - animated: a ball moving along the graph (not valid in sequential mode).
*   7 - a dotted line.

Compare this to the effect of [Connected](/connected) or [Dot](/dot) mode. When either of these modes is set, all equations, from all graphing modes, are reverted to line style or dotted line style respectively; furthermore, it becomes the default graph style and clearing an equation will revert it to this graph style. The `GraphStyle(` command simply overrides these modes temporarily.

## Advanced

In shading modes (3 and 4), the shading style cycles as follows:

*   The first function graphed shades using vertical lines one pixel apart
*   The second function shades using horizontal lines one pixel apart
*   The third function shades using negatively sloping diagonal lines, two pixels apart.
*   The fourth function shades using positively sloping diagonal lines, two pixels apart.
*   After that, functions will cycle through these four styles in that order.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** if the _equation #_ is not a valid equation number in this mode, or if _style #_ is not an integer 1-7.
*   **[ERR:INVALID](/errors#invalid)** if the graphing style chosen is not valid for the current graphing mode.

## Related Commands

*   [FnOn](/fnon)
*   [FnOff](/fnoff)
*   [Connected](/connected)
*   [Dot](/dot)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


