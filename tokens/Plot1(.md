| Property      | Value |
|---------------|-------|
| Hex Value     | `$EC`|
| Categories    | <ul><li>Stat Plot\Plots</li><li>Catalog\P</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Graph1(`</li></ul> |

# `Plot1(`

## Description
Defines `Plot``#` (`1`, `2`, or `3`) of `type` `Scatter` or `xyLine` for `Xlist` and `Ylist` using `mark `and `color. `
Color#: 10 - 24 or color name pasted from [vars] COLOR.
Note: `Xlist `and `Ylist `represent the Xlist and Ylist names.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Plot#(type,Xlist,Ylist[,mark,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>#</td><td></td><td>false</td></tr>

<tr><td>type</td><td></td><td>false</td></tr>

<tr><td>Xlist</td><td>list</td><td>false</td></tr>

<tr><td>Ylist</td><td>list</td><td>false</td></tr>

<tr><td>mark</td><td></td><td>true</td></tr>

<tr><td>color#</td><td></td><td>true</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>stat plot</kbd>, `STAT PLOTS`, `1:Plot12:Plot23:Plot3`
<hr>

## Description
Defines `Plot``#` (`1`, `2`, or `3`) of `type` ` Histogram` or `Boxplot` for `Xlist` with frequency `freqlist `and color #.
Color#: 10 - 24 or color name pasted from [vars] COLOR.
Note: `Xlist `represents the Xlist name.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Plot#(type,Xlist[,freqlist,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>#</td><td></td><td>false</td></tr>

<tr><td>type</td><td></td><td>false</td></tr>

<tr><td>Xlist</td><td>list</td><td>false</td></tr>

<tr><td>freqlist</td><td>list</td><td>true</td></tr>

<tr><td>color#</td><td></td><td>true</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>stat plot</kbd>, `STAT PLOTS`, `1:Plot12:Plot23:Plot3`
<hr>

## Description
Defines `Plot``#` (`1`, `2`, or `3`) of `type` ` ModBoxplot` for `Xlist` with frequency `freqlist` using `mark `and `color #`.
Color#: 10 - 24 or color name pasted from [vars] COLOR.
Note: `Xlist `represents the Xlist name.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Plot#(type,Xlist[,freqlist,mark,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>#</td><td></td><td>false</td></tr>

<tr><td>type</td><td></td><td>false</td></tr>

<tr><td>Xlist</td><td>list</td><td>false</td></tr>

<tr><td>freqlist</td><td>list</td><td>true</td></tr>

<tr><td>mark</td><td></td><td>true</td></tr>

<tr><td>color#</td><td></td><td>true</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>stat plot</kbd>, `STAT PLOTS`, `1:Plot12:Plot23:Plot3`
<hr>

## Description
Defines `Plot``#` (`1`, `2`, or `3`) of `type` ` NormProbPlot` for `datalist` on `data axis` using `mark `and `color #` `data axis` can be `X` or `Y`.
Color#: 10 - 24 or color name pasted from [vars] COLOR.
Note: `datalist `represents the datalist name.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Plot#(type,datalist[,data axis,mark,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>#</td><td></td><td>false</td></tr>

<tr><td>type</td><td></td><td>false</td></tr>

<tr><td>datalist</td><td>list</td><td>false</td></tr>

<tr><td>data axis</td><td></td><td>true</td></tr>

<tr><td>mark</td><td></td><td>true</td></tr>

<tr><td>color#</td><td></td><td>true</td></tr>

</table>

## Location
<kbd>2nd</kbd>, <kbd>stat plot</kbd>, `STAT PLOTS`, `1:Plot12:Plot23:Plot3`
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
| <b>TI-82</b> | 1.0 | Added

## Related Commands

    