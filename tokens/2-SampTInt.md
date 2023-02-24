| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB49`|
| Categories    | <ul><li>Catalog\S</li><li>Statistics\Operations</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-CompTIntC( `</li></ul> |

# `2-SampTInt `

## Description
Computes a two-sample t confidence interval. pooled=1 pools variances; pooled=0 does not pool variances.

<b>Comment</b>:undefined

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampTInt[listname1,listname2,freqlist1,freqlist2,confidence level,pooled](Data list input)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>listname1</td><td>listName</td><td>true</td></tr>

<tr><td>listname2</td><td>listName</td><td>true</td></tr>

<tr><td>freqlist1</td><td>list</td><td>true</td></tr>

<tr><td>freqlist2</td><td>list</td><td>true</td></tr>

<tr><td>confidence level</td><td></td><td>true</td></tr>

<tr><td>pooled</td><td></td><td>true</td></tr>

<tr><td>(Data list input</td><td>list</td><td>true</td></tr>

</table>

## Location
<kbd>stat</kbd>, `TESTS`, `0:2-SampTInt`
<hr>

## Description
Computes a two-sample t confidence interval. pooled=1 pools variances; pooled=0 does not pool variances.

<b>Comment</b>:undefined

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampTIntv1,Sx1,n1,v2,Sx2,n2[,confidence  level,pooled](Summary stats input)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>v</td><td></td><td>false</td></tr>

<tr><td>1</td><td></td><td>false</td></tr>

<tr><td>Sx1</td><td></td><td>false</td></tr>

<tr><td>n1</td><td></td><td>false</td></tr>

<tr><td>v</td><td></td><td>false</td></tr>

<tr><td>2</td><td></td><td>false</td></tr>

<tr><td>Sx2</td><td></td><td>false</td></tr>

<tr><td>n2</td><td></td><td>true</td></tr>

<tr><td>confidence</td><td></td><td>true</td></tr>

<tr><td>level</td><td></td><td>true</td></tr>

<tr><td>pooled</td><td></td><td>true</td></tr>

<tr><td>(Summary stats input</td><td></td><td>true</td></tr>

</table>

## Location
<kbd>stat</kbd>, `TESTS`, `0:2-SampTInt`
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

    