| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB3D`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-CompZTest(`</li></ul> |

# `2-SampZTest(`

## Description
Computes a two-sample `z` test. `alternative`=-`1` is `<`; `alternative`=`0` is ≠; `alternative`=`1` is `>`. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampZTest( σ1,σ2[,listname1,listname2,freqlist1,freqlist2,alternative,drawflag,color#])`

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

<tr><td>alternative</td><td></td><td>true</td></tr>

<tr><td>drawflag</td><td></td><td>true</td></tr>

<tr><td>color#</td><td>colorNum</td><td>true</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `3:2-SampZTest(`
<hr>

## Description
Computes a two-sample `z` test. `alternative`=-`1` is `<`; `alternative`=`0` is ≠; `alternative`=`1` is `>`. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-SampZTest(σ1,σ2,x̄1,n1,x̄2,n2[,alternative,drawflag,color#])`

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

<tr><td>alternative</td><td></td><td>true</td></tr>

<tr><td>drawflag</td><td></td><td>true</td></tr>

<tr><td>color#</td><td>colorNum</td><td>true</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `TESTS`, `3:2-SampZTest(`
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
| <b>TI-83</b> | 1.010 | Added |

## Related Commands

