| Property      | Value |
|---------------|-------|
| Hex Value     | `$1D`|
| Categories    | <ul><li>[Angle](<../categories/Angle.md>)</li><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `P►Rx(`</li></ul> |

# `P►Rx(`

## Overview
Returns `X`, given polar coordinates `r` and θ or a list of polar coordinates.


<b>Availability</b>: Token available everywhere.

## Syntax
`P►Rx(r,θ)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>r</b></td><td></td><td></td></tr>

<tr><td><b>θ</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>angle</kbd>, `ANGLE`, `7:P`, `Rx(`
<hr>

## Description

P►Rx( (polar►rectangular x-coordinate) calculates the x-coordinate of a polar point. Polar coordinates are of the form (r,θ), where θ is the counterclockwise angle made with the positive x-axis, and r is the distance away from the origin (the point (0,0)). The conversion identity x=r*cos(θ) is used to calculate P►Rx(.

The value returned depends on whether the calculator is in [radian](radian-mode) or [degree](degree-mode) mode. A full rotation around a circle is 2π radians, which is equal to 360°. The conversion from radians to degrees is angle*180/π and from degrees to radians is angle*π/180. The P►Rx( command also accepts a list of points.

```ti-basic
P►Rx(5,π/4)
    3.535533906
5*cos(π/4)
    3.535533906
P►Rx({1,2},{π/4,π/3})
    {.7071067812 1}
```

## Advanced Uses

You can bypass the mode setting by using the [°](°.md) (degree) and <sup><a href="ʳ.md">ʳ</a></sup> (radian) symbols. This next command will return the same values no matter if your calculator is in degrees or radians:

```ti-basic
P►Rx(1,{π/4^^r,60°})
    {.7071067812 .5}
```

## Optimization

In most cases P►Rx(r,θ) can be replaced by r*cos(θ) to save a byte:

```ti-basic
:P►Rx(5,π/12)
can be
:5cos(π/12)
```

Conversely, complicated expressions multiplied by a cosine factor can be simplified by using P►Rx(r,θ) instead.

```ti-basic
:(A+BX)cos(π/5)
can be
:P►Rx(A+BX,π/5)
```

## Error Conditions

*   **[ERR:DIM MISMATCH](errors#dimmismatch)** is thrown if two list arguments have different dimensions.
*   **[ERR:DATA TYPE](errors#datatype)** is thrown if you input a complex argument.

## Related Commands

*   [P►Ry(](P►Ry\(.md)
*   [R►Pr(](R►Pr\(.md)
*   [R►Pθ(](R►Pθ\(.md)
*   [cos(](cos\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: CloudVariable, DarkerLine, GoVegan, simplethinker, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


