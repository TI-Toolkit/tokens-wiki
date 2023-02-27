| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB47`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `2-Comp𝐅Test( `</li></ul> |

# `2-Samp𝐅Test `

## Description
Performs a two-sample Û test. `alternative`=-`1` is `<`; `alternative`=`0` is ; `alternative`=`1` is `>`. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-Samp𝐅Test[listname1,listname2,freqlist1,freqlist2,alternative,drawflag,color#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>𝐅</td><td></td><td>true</td></tr>

<tr><td>listname1</td><td>listName</td><td>true</td></tr>

<tr><td>listname2</td><td>listName</td><td>true</td></tr>

<tr><td>freqlist1</td><td>list</td><td>true</td></tr>

<tr><td>freqlist2</td><td>list</td><td>true</td></tr>

<tr><td>alternative</td><td></td><td>true</td></tr>

<tr><td>drawflag</td><td></td><td>true</td></tr>

<tr><td>color#</td><td>colorNum</td><td>true</td></tr>

</table>

## Location
<kbd>stat</kbd>, `TESTS`, `E:2-Samp`, `Test`
<hr>

## Description
Performs a two-sample Û test. `alternative`=-`1` is `<`; `alternative`=`0` is ; `alternative`=`1` is `>`. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`2-Samp𝐅TestSx1,n1,Sx2,n2[,alternative,drawflag,color#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>𝐅</td><td></td><td>false</td></tr>

<tr><td>Sx1</td><td></td><td>false</td></tr>

<tr><td>n1</td><td></td><td>false</td></tr>

<tr><td>Sx2</td><td></td><td>false</td></tr>

<tr><td>n2</td><td></td><td>true</td></tr>

<tr><td>alternative</td><td></td><td>true</td></tr>

<tr><td>drawflag</td><td></td><td>true</td></tr>

<tr><td>color#</td><td>colorNum</td><td>true</td></tr>

</table>

## Location
<kbd>stat</kbd>, `TESTS`, `E:2-Samp`, `Test`
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

    