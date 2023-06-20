| Property      | Value |
|---------------|-------|
| Hex Value     | `$93`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Texte(`</li></ul> |

# `Text(`

## Description
Writes `text` on graph beginning at pixel (`row`,`column`), where 0 ≤ `row` ≤ 164 and 0 ≤ `column` ≤ 264.
Full mode, row must be <=148; column must be 256
Horiz mode, row must be row<=66 and column must be <=256
G-T mode, row must be row <=126; column must be 176


<b>Availability</b>: Token available everywhere.

## Syntax
`Text(row,column,text1,text2,...,text n)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>row</b></td><td></td><td>Yes</td></tr>

<tr><td><b>column</b></td><td></td><td>Yes</td></tr>

<tr><td><b>text1</b></td><td>string</td><td>Yes</td></tr>

<tr><td><b>text2</b></td><td>string</td><td>Yes</td></tr>

<tr><td><b>...</b></td><td></td><td>Yes</td></tr>

<tr><td><b>text n</b></td><td>string</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `0:Text(`
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

