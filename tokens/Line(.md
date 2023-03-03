| Property      | Value |
|---------------|-------|
| Hex Value     | `$9C`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Ligne(`</li></ul> |

# `Line(`

## Description
Draws a line from (`X1`,`Y1`) to (`X2`,`Y2`) with the following options: erase #: 1,0, color #: 10-24, and line style #: 1-4.


<b>Availability</b>: Token available everywhere.

## Syntax
`Line(X1,Y1,X2,Y2[,erase#,color#,linestyle#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>X1</td><td></td><td>false</td></tr>

<tr><td>Y1</td><td></td><td>false</td></tr>

<tr><td>X2</td><td></td><td>false</td></tr>

<tr><td>Y2</td><td></td><td>false</td></tr>

<tr><td>erase#</td><td></td><td>true</td></tr>

<tr><td>color#</td><td>colorNum</td><td>true</td></tr>

<tr><td>linestyle#</td><td>integer</td><td>true</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `2:Line(`
<hr>

## Description
Erases a line (erase #: 1,0) from (`X1`,`Y1`) to (`X2`,`Y2`).


<b>Availability</b>: Token available everywhere.

## Syntax
`Line(X1,Y1,X2,Y2,0[,line#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>X1</td><td></td><td>false</td></tr>

<tr><td>Y1</td><td></td><td>false</td></tr>

<tr><td>X2</td><td></td><td>false</td></tr>

<tr><td>Y2</td><td></td><td>false</td></tr>

<tr><td>line#</td><td></td><td>true</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `2:Line(`
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
| <b>TI-82</b> | 1.0 | Added |

## Related Commands

