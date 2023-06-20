| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB46`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-CompTTest( `</li></ul> |

# `2-SampTTest `

## Description
Computes a two-sample `t` test. `alternative`=-`1` is `<`; `alternative`=`0` is ≠; `alternative`=`1` is `>`. `pooled`=`1` pools variances; `pooled`=`0` does not pool variances. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampTTest [listname1,listname2,freqlist1,freqlist2,alternative,pooled,drawflag,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>listname1</td><td>listName</td><td><b>No</b></td></tr>

<tr><td>listname2</td><td>listName</td><td><b>No</b></td></tr>

<tr><td>freqlist1</td><td>list</td><td><b>No</b></td></tr>

<tr><td>freqlist2</td><td>list</td><td><b>No</b></td></tr>

<tr><td>alternative</td><td></td><td><b>No</b></td></tr>

<tr><td>pooled</td><td></td><td><b>No</b></td></tr>

<tr><td>drawflag</td><td></td><td><b>No</b></td></tr>

<tr><td>color#</td><td>colorNum</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `4:2-SampTTest`
<hr>

## Description
Computes a two-sample `t` test. `alternative`=-`1` is `<`; `alternative`=`0` is ≠; `alternative`=`1` is `>`. `pooled`=`1` pools variances; `pooled`=`0` does not pool variances. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampTTestx̄1,Sx1,n1,v2,Sx2,n2[,alternative,pooled,drawflag,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x̄</b></td><td></td><td>Yes</td></tr>

<tr><td><b>1</b></td><td></td><td>Yes</td></tr>

<tr><td><b>Sx1</b></td><td></td><td>Yes</td></tr>

<tr><td><b>n1</b></td><td></td><td>Yes</td></tr>

<tr><td><b>v2</b></td><td></td><td>Yes</td></tr>

<tr><td><b>Sx2</b></td><td></td><td>Yes</td></tr>

<tr><td>n2</td><td></td><td><b>No</b></td></tr>

<tr><td>alternative</td><td></td><td><b>No</b></td></tr>

<tr><td>pooled</td><td></td><td><b>No</b></td></tr>

<tr><td>drawflag</td><td></td><td><b>No</b></td></tr>

<tr><td>color#</td><td>colorNum</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `4:2-SampTTest`
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

