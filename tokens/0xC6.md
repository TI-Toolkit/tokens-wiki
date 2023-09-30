| Property      | Value |
|---------------|-------|
| Hex Value     | `$C6`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Keypad](<../categories/Keypad.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `tan(`</li></ul> |

# `tan(`

## Overview
Returns the tangent of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`tan(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>tan</b></kbd></tt>
<hr>

## Description

tan(θ) calculates the [tangent](https://mathworld.wolfram.com/tangent.html) of the angle θ, which is defined by $\tan \theta=\frac{\sin \theta}{\cos \theta}$

The value returned depends on whether the calculator is in [Radian](radian-mode) or [Degree](degree-mode) mode. A full rotation around a circle is 2π radians, which is equal to 360°. The conversion from radians to degrees is angle*180/π and from degrees to radians is angle*π/180. The tan( command also works on a list of real numbers.

Since tangent is defined as the quotient of sine divided by cosine, it is undefined for any angle such that cos(θ)=0.

In radians:

```ti-basic
tan(π/4)
    1
```

In degrees:

```ti-basic
tan(45)
    1
```

## Advanced Uses

You can bypass the mode setting by using the [°](°.md) (degree) and <sup><a href="ʳ.md">ʳ</a></sup> (radian) symbols. These next two commands will return the same values no matter if your calculator is in degrees or radians:

```ti-basic
tan(45°)
    1
```

```ti-basic
tan(π/4¹ )
    1
```

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown if you supply a matrix or a complex argument.
*   **[ERR:DOMAIN](errors#domain)** is thrown if you supply an angle of π/2±nπ (in radians, where n is an integer) or 90±180n (in degrees, where n is an integer), or when the input is ≥1E12.

## Related Commands

*   [sin(](sin\(.md)
*   [sinֿ¹(](sinֿ¹\(.md)
*   [cos(](cos\(.md)
*   [cosֿ¹(](cosֿ¹\(.md)
*   [tanֿ¹(](tanֿ¹\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Mr Dino, simplethinker, Timothy Foster, Weregoose, Xeda Elnara.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `tan ` added |
| <b>TI-83</b> | 0.01013 | Renamed `tan ` to `tan(`


