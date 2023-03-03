| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB41`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Z](<../categories/Catalog.md#Z>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ZintConf `</li></ul> |

# `ZInterval `

## Description
Computes a `z` confidence interval.

<b>Comment</b>:Data list input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZIntervalσ[,listname,freqlist,confidence level]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>σ</td><td></td><td>false</td></tr>

<tr><td>listname</td><td>list</td><td>false</td></tr>

<tr><td>freqlist</td><td>list</td><td>false</td></tr>

<tr><td>confidence level</td><td></td><td>false</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `7:ZInterval`
<hr>

## Description
Computes a `z` confidence interval.

<b>Comment</b>:Summary stats input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ZIntervalσ,x̄,n[,confidence level]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>σ</td><td></td><td>false</td></tr>

<tr><td>x̄</td><td></td><td>false</td></tr>

<tr><td>n</td><td></td><td>true</td></tr>

<tr><td>confidence level</td><td></td><td>true</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `7:ZInterval`
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

    