| Property      | Value |
|---------------|-------|
| Hex Value     | `$1E`|
| Categories    | <ul><li>[Angle](<../categories/Angle.md>)</li><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `P►Ry(`</li></ul> |

# `P►Ry(`

## Description
Returns `Y`, given polar coordinates `r` and θ or a list of polar coordinates.


<b>Availability</b>: Token available everywhere.

## Syntax
`P►Ry(r,θ)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>r</b></td><td></td><td></td></tr>

<tr><td><b>θ</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>angle</kbd>, `ANGLE`, `8:P`, `Ry(`
<hr>

P►Ry( (polar to rectangular y-coordinate) calculates the y-coordinate of a polar point. Polar coordinates are of the form (r,θ), where θ is the counterclockwise angle made with the positive x-axis, and r is the distance away from the origin (the point (0,0)). The conversion identity y=r*sin(θ) is used to calculate P►Ry(.

The value returned depends on whether the calculator is in [radian](/radian-mode) or [degree](/degree-mode) mode. A full rotation around a circle is 2π radians, which is equal to 360°. The conversion from radians to degrees is angle*180/π and from degrees to radians is angle*π/180. The P►Ry( command also accepts a list of points.

```ti-basic
P►Ry(5,π/4)
    3.535533906
5*sin(π/4)
    3.535533906
P►Ry({1,2},{π/4,π/3})
    {.7071067812 1.732050808}
```

## Advanced Uses

You can bypass the mode setting by using the [°](/degree-symbol) (degree) and <sup><a href="/radian-symbol">r</a></sup> (radian) symbols. This next command will return the same values no matter if your calculator is in degrees or radians:

```ti-basic
P►Ry(1,{π/4^^r,60°})
    {.7071067812 .8660254038}
```

## Optimization

In most cases P►Ry(r,θ) can be replaced by r*sin(θ) to save a byte:

```ti-basic
:P►Ry(5,π/12)
can be
:5sin(π/12)
```

Conversely, complicated expressions multiplied by a sine factor can be simplified by using P►Ry(r,θ) instead.

```ti-basic
:(A+BX)sin(π/5)
can be
:P►Ry(A+BX,π/5)
```

## Error Conditions

*   **[ERR:DIM MISMATCH](/errors#dimmismatch)** is thrown if two list arguments have different dimensions.
*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if you input a complex argument.

## Related Commands

*   [P►Rx(](/p-rx)
*   [R►Pr(](/r-pr)
*   [R►Pθ(](/r-ptheta)
*   [sin(](/sin)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


