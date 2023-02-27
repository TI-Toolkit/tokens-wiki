| Property      | Value |
|---------------|-------|
| Hex Value     | `$CE`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `If `</li></ul> |

# `If `

## Description
If `condition` = 0 (false), skips `commandA`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`If condition:commandA:commands`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>condition</td><td></td><td>false</td></tr>

<tr><td>commandA</td><td></td><td>false</td></tr>

<tr><td>commands</td><td></td><td>false</td></tr>

</table>

## Location
<kbd>prgm</kbd>, `CTL`, `1:If`
<hr>

# `If Then End`

## Description
Executes `commands` from `Then` to `End` if `condition` = 1 (true).


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`If:conditionThen:commandsEnd:commands`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>:</td><td></td><td>false</td></tr>

<tr><td>condition</td><td></td><td>false</td></tr>

<tr><td>commands</td><td></td><td>false</td></tr>

<tr><td>commands</td><td></td><td>false</td></tr>

</table>

## Location
<kbd>prgm</kbd>, `CTL`, `2:Then`
<hr>

# `If Then Else End`

## Description
Executes `commands` from `Then` to `Else` if `condition` = 1 (true); from `Else` to `End` if `condition` = 0 (false).


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`If:conditionThen:commandsElse:commandsEnd:commands`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>condition</td><td></td><td>false</td></tr>

<tr><td>commands</td><td></td><td>false</td></tr>

<tr><td>commands</td><td></td><td>false</td></tr>

<tr><td>commands</td><td></td><td>false</td></tr>

</table>

## Location
<kbd>prgm</kbd>, `CTL`, `3:Else`
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

    