| Property      | Value |
|---------------|-------|
| Hex Value     | `$02`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `►Dec`</li></ul> |

# `►Dec`

## Description
Displays a real or complex number, expression, list, or matrix in decimal format.


<b>Availability</b>: Token available everywhere.

## Syntax
`value►Dec`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `MATH`, `2:Dec`
<hr>

This command is generally useless. Its supposed use is to convert numbers into decimal form, but any typed fractions are displayed as decimals anyway.

```ti-basic
1/3
     .3333333333
1/3►Dec
     .3333333333
```

In 2.53 MP or higher, typed fractions are displayed in fraction form. Therefore, the <tt>►Dec</tt> command is useful in this case.

## Related Commands

*   <tt><a href="►Frac.md">►Frac</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


