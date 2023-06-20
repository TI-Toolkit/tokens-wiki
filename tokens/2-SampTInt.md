| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB49`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-CompTIntC( `</li></ul> |

# `2-SampTInt `

## Description
Computes a two-sample `t` confidence interval. `pooled`=`1` pools variances; `pooled`=`0` does not pool variances.

<b>Comment</b>:Data list input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampTInt[listname1,listname2,freqlist1,freqlist2,confidence level,pooled]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>listname1</td><td>listName</td><td><b>No</b></td></tr>

<tr><td>listname2</td><td>listName</td><td><b>No</b></td></tr>

<tr><td>freqlist1</td><td>list</td><td><b>No</b></td></tr>

<tr><td>freqlist2</td><td>list</td><td><b>No</b></td></tr>

<tr><td>confidence level</td><td></td><td><b>No</b></td></tr>

<tr><td>pooled</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `0:2-SampTInt`
<hr>

## Description
Computes a two-sample `t` confidence interval. `pooled`=`1` pools variances; `pooled`=`0` does not pool variances.

<b>Comment</b>:Summary stats input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampTIntx̄1,Sx1,n1,x̄2,Sx2,n2[,confidence  level,pooled]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x̄</b></td><td></td><td>Yes</td></tr>

<tr><td><b>1</b></td><td></td><td>Yes</td></tr>

<tr><td><b>Sx1</b></td><td></td><td>Yes</td></tr>

<tr><td><b>n1</b></td><td></td><td>Yes</td></tr>

<tr><td><b>x̄</b></td><td></td><td>Yes</td></tr>

<tr><td><b>2</b></td><td></td><td>Yes</td></tr>

<tr><td><b>Sx2</b></td><td></td><td>Yes</td></tr>

<tr><td>n2</td><td></td><td><b>No</b></td></tr>

<tr><td>confidence</td><td></td><td><b>No</b></td></tr>

<tr><td>level</td><td></td><td><b>No</b></td></tr>

<tr><td>pooled</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `0:2-SampTInt`
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

