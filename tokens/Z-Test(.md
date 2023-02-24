| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB3B`|
| Categories    | <ul><li>Catalog\Z</li><li>Statistics\Operations</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Z-Test(`</li></ul> |

# `Z-Test(`

## Description
Performs a `z` test with frequency `freqlist`. `alternative`= -`1` is `<`; `alternative`=`0` is ; `alternative`=`1` is `>`. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.

<b>Comment</b>:(Data list input)

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Z-Test(m0,s[,listname,freqlist,alternative,drawflag,color#])(Data list input)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>m</td><td></td><td>false</td></tr>

<tr><td>0</td><td></td><td>false</td></tr>

<tr><td>s</td><td></td><td>true</td></tr>

<tr><td>listname</td><td>list</td><td>true</td></tr>

<tr><td>freqlist</td><td>list</td><td>true</td></tr>

<tr><td>alternative</td><td></td><td>true</td></tr>

<tr><td>drawflag</td><td></td><td>true</td></tr>

<tr><td>color#</td><td></td><td>true</td></tr>

<tr><td>(Data list input</td><td>list</td><td>true</td></tr>

</table>

## Location
<kbd>stat</kbd>, `TESTS`, `1:Z-Test(`
<hr>

## Description
Performs a `z` test. `alternative`=-`1` is `<`; `alternative`=`0` is ; `alternative`=`1` is `>`. `drawflag`=`1` draws results; `drawflag`=`0` calculates results.
Color#: 10 - 24 or color name pasted from [vars] COLOR.

<b>Comment</b>:(Summary stats input)

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Z-Test(m0,s,v,n[,alternative,drawflag,color#])(Summary stats input)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>m</td><td></td><td>false</td></tr>

<tr><td>0</td><td></td><td>false</td></tr>

<tr><td>s</td><td></td><td>false</td></tr>

<tr><td>v</td><td></td><td>true</td></tr>

<tr><td>n</td><td></td><td>true</td></tr>

<tr><td>alternative</td><td></td><td>true</td></tr>

<tr><td>drawflag</td><td></td><td>true</td></tr>

<tr><td>color#</td><td></td><td>true</td></tr>

<tr><td>(Summary stats input</td><td></td><td>true</td></tr>

</table>

## Location
<kbd>stat</kbd>, `TESTS`, `1:Z-Test(`
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

    