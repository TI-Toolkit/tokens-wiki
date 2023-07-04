| Property      | Value |
|---------------|-------|
| Hex Value     | `$12`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Math](<../categories/Math.md>) > [Number](<../categories/Math.md#Number>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `arrondi(`</li></ul> |

# `round(`

## Overview
Returns a number, expression, list, or matrix rounded to `#decimals` ( 9).


<b>Availability</b>: Token available everywhere.

## Syntax
`round(value[,#decimals])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

<tr><td>#decimals</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `2:round(`
<hr>

## Description

round(_value_[,_#decimals_]) returns _value_ rounded to _#decimals_ decimal places. _#decimals_ must be < 10. The default value for _#decimals_ is 9. Also works on complex numbers, lists and matrices.

```ti-basic
round(5.45,0)
     5
round(5.65,0)
     6
round(‾5.65,0)
     ‾6
round(π)-π
     4.102e-10
round(π,4)
     3.1416
round({1.5,2.4,3.8},0)
     {2,2,4}
round([[1.8,3.5,120.3][3,‾1,0.2]],0)
     [[2  4   120]
     [3  ‾1  0   ]]
```

## Advanced Uses

Sometimes, round-off error will cause the result of an expression to be slightly off of the correct integer value — for example, a result may be 5.0000000013 instead of 5. If the error is small enough, it will not even be visible if you recall the variable on the home screen. However, this is enough to cause a [ERR:DOMAIN](errors#domain) error with commands such as [sub(](sub\(.md) and [Output(](Output\(.md), which require their arguments to be integers.

The easiest way to fix this problem is by wrapping the different arguments in a round( instruction. For example, you may replace Output(X,1,">") with Output(round(X),1,">"). The [int(](int\(.md) command will not work here because the round-off error may be negative, such as 4.9999999986 instead of 5, in which case the number will be rounded down to 4.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** if the number of places to round to is not an integer 0 through 9.

## Related Commands

*   [int(](int\(.md)
*   [iPart(](iPart\(.md)
*   [fPart(](fPart\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, CloudVariable, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


