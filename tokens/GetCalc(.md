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

<tr><td>variable</td><td></td><td>false</td></tr>

<tr><td>portflag</td><td></td><td>true</td></tr>

</table>

## Location
<kbd>prgm</kbd>, `I/O`, `0:GetCalc(`
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
| <b>TI-83</b> | 1.010 | Added

## Related Commands

    