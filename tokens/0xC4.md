| Property      | Value |
|---------------|-------|
| Hex Value     | `$C4`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Keypad](<../categories/Keypad.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `cos(`</li></ul> |

# `cos(`

## Overview
Returns cosine of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`cos(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>cos</b></kbd></tt>
<hr>

## Description

<tt>cos(θ)</tt> returns the [cosine](https://mathworld.wolfram.com/Cosine.html) of θ, which is defined as the x-value of the point of intersection of the unit circle and a line containing the origin that makes an angle θ with the positive x-axis

The value returned depends on whether the calculator is in <tt><a href="Radian.md">Radian</a></tt> or <tt><a href="Degree.md">Degree</a></tt> mode. A full rotation around a circle is 2π radians, which is equal to 360°. The conversion from radians to degrees is angle*180/π and from degrees to radians is angle*π/180. The <tt>cos(</tt> command also works on a list of real numbers.

In radians:

```ti-basic
cos(π/3)
    .5
```

In degrees:

```ti-basic
cos(60)
    .5
```

## Advanced Uses

You can bypass the mode setting by using the <tt><a href="°.md">°</a></tt> (degree) and <tt><sup><a href="ʳ.md">ʳ</a></sup></tt> (radian) symbols. These next two commands will return the same values no matter if your calculator is in degrees or radians:

```ti-basic
cos(60°)
    .5
```

```ti-basic
cos(π/3ֿ¹ )
    .5
```

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown if you supply a matrix or a complex argument.
*   **[ERR:ARGUMENT](errors#argument)** is thrown if you use more than one number.
*   **[ERR:DOMAIN](errors#domain)** is thrown if you supply an input ≥1E12.

## Related Commands

*   <tt><a href="sin(.md">sin(</a></tt>
*   <tt><a href="sin⁻¹(.md">sin⁻¹(</a></tt>
*   <tt><a href="cos⁻¹(.md">cos⁻¹(</a></tt>
*   <tt><a href="tan(.md">tan(</a></tt>
*   <tt><a href="tan⁻¹(.md">tan⁻¹(</a></tt>

## See Also

*   [Look-Up Tables](Look-Up Tables.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Myles_Zadok, nap386, simplethinker, Xeda Elnara.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `cos ` added |
| <b>TI-83</b> | 0.01013 | Renamed `cos ` to `cos(`


