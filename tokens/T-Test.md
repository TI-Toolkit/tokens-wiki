| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB3C`|
| Categories    | <ul><li>Catalog\T</li><li>Statistics\Operations</li></ul> |
| Localizations | <ul><li><b>FR</b>: `T-Test `</li></ul> |

# `T-Test `

## Description
Performs a `t` test with frequency `freqlist`. `alternative`=-`1` is `<`; `alternative`=`0` is ; `alternative`=`1` is `>`. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.

<b>Comment</b>:Data list input

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`T-Test m0[,listname,freqlist,alternative,drawflag,color#]) `

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>m</td><td></td><td>false</td></tr>

<tr><td>0</td><td></td><td>true</td></tr>

<tr><td>listname</td><td>list</td><td>true</td></tr>

<tr><td>freqlist</td><td>list</td><td>true</td></tr>

<tr><td>alternative</td><td></td><td>true</td></tr>

<tr><td>drawflag</td><td></td><td>true</td></tr>

<tr><td>color#</td><td>colorNum</td><td>true</td></tr>

<tr><td>(Data list input</td><td>list</td><td>true</td></tr>

</table>

## Location
<kbd>stat</kbd>, `TESTS`, `2:T-Test`
<hr>

## Description
Performs a `t` test with frequency `freqlist`. `alternative`=-`1` is < ; `alternative`=`0` is Ä; `alternative`=`1` is >. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`T-Test m0,v,Sx,n[,alternative,drawflag,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>m</td><td></td><td>false</td></tr>

<tr><td>0</td><td></td><td>false</td></tr>

<tr><td>v</td><td></td><td>false</td></tr>

<tr><td>Sx</td><td></td><td>false</td></tr>

<tr><td>n</td><td></td><td>true</td></tr>

<tr><td>alternative</td><td></td><td>true</td></tr>

<tr><td>drawflag</td><td></td><td>true</td></tr>

<tr><td>color#</td><td>colorNum</td><td>true</td></tr>

</table>

## Location
<kbd>stat</kbd>, `TESTS`, `2:T-Test`
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

    