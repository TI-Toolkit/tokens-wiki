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

<tr><td>value</td><td></td><td>true</td></tr>

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

<tr><td>value</td><td></td><td>true</td></tr>

<tr><td>time</td><td></td><td>true</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `8:Pause`
<hr>

## Examples

Explanation 1
```ti-basic
code 1
```
---
Explanation 2
```ti-basic
code 2
```

## Error Conditions


## Advanced Notes


## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added

## Related Commands

    