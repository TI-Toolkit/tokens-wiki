| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB42`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-CompZIntC(`</li></ul> |

# `2-SampZInt(`

## Description
Computes a two-sample `z` confidence interval.

<b>Comment</b>:Data list input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampZInt(σ1,σ2[,listname1,listname2,freqlist1,freqlist2,confidence level])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>σ</td><td></td><td>false</td></tr>

<tr><td>1</td><td></td><td>true</td></tr>

<tr><td>σ</td><td></td><td>true</td></tr>

<tr><td>2</td><td></td><td>true</td></tr>

<tr><td>listname1</td><td>listName</td><td>true</td></tr>

<tr><td>listname2</td><td>listName</td><td>true</td></tr>

<tr><td>freqlist1</td><td>list</td><td>true</td></tr>

<tr><td>freqlist2</td><td>list</td><td>true</td></tr>

<tr><td>confidence level</td><td></td><td>true</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `9:2-SampZInt(`
<hr>

## Description
Computes a two-sample `z` confidence interval.

<b>Comment</b>:Summary stats input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampZInt(σ1,σ2,x̄1,n1,x̄2,n2[,confidence level])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>σ</td><td></td><td>false</td></tr>

<tr><td>1</td><td></td><td>false</td></tr>

<tr><td>σ</td><td></td><td>false</td></tr>

<tr><td>2</td><td></td><td>false</td></tr>

<tr><td>x̄</td><td></td><td>false</td></tr>

<tr><td>1</td><td></td><td>false</td></tr>

<tr><td>n1</td><td></td><td>true</td></tr>

<tr><td>x̄</td><td></td><td>true</td></tr>

<tr><td>2</td><td></td><td>true</td></tr>

<tr><td>n2</td><td></td><td>true</td></tr>

<tr><td>confidence level</td><td></td><td>true</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `9:2-SampZInt(`
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
| <b>TI-83</b> | 0.01013 | Added |

## Related Commands

