| Property      | Value |
|---------------|-------|
| Hex Value     | `$1C`|
| Categories    | <ul><li>[Angle](<../categories/Angle.md>)</li><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `R►Pθ(`</li></ul> |

# `R►Pθ(`

## Description
Returns θ, given rectangular coordinates `x` and `y` or a list of rectangular coordinates.


<b>Availability</b>: Token available everywhere.

## Syntax
`R►Pθ(x,y)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>θ</b></td><td></td><td></td></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>y</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>angle</kbd>, `ANGLE`
<hr>

R►Pθ( (Rectangular to polar θ) takes the (_x_,_y_) (Cartesian) coordinate, and returns the angle that the ray from (0,0) to (_x_,_y_) makes with the positive x-axis. This is the θ-coordinate of the same point in (_r_,_θ_) (polar) mode. The identity used for this conversion is tan(_θ_)=_y__/x_, with the correct inverse being chosen depending on the quadrant that the point is in. The range of the angle returned is -π<_θ_≤π. R►Pθ( can also be used on lists.

R►Pθ( is equivalent to the atan2() instruction seen in C/++ and FORTRAN.

```ti-basic
R►Pθ(3,4)
    .927295218
tanֿ¹(4/3)
    .927295218
R►Pθ(0,{1,-1})
    {1.570796327, -1.57096327}
```

R►Pθ( is affected by [Degree](degree-mode) and [Radian](radian-mode) mode in its output, which is an angle measured in degrees or radians respectively.

## Advanced Uses

If you want the result to always be a radian angle, regardless of mode settings, you can divide the result by 1<sup><a href="ʳ.md">ʳ</a></sup>:

```ti-basic
R►Pθ(x,y)/1^^r
```

If you want the result to always be a degree angle, regardless of mode settings, you can divide the result by 1[°](°.md):

```ti-basic
R►Pθ(x,y)/1°
```

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown if you input a complex argument.
*   **[ERR:DIM MISMATCH](errors#dimmismatch)** is thrown if two list arguments have different dimensions.

## Related Commands

*   [P►Rx(](P►Rx\(.md)
*   [P►Ry(](P►Ry\(.md)
*   [R►Pr(](R►Pr\(.md)
*   [angle(](angle\(.md)
*   [tanֿ¹(](tanֿ¹\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


