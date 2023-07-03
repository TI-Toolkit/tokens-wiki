| Property      | Value |
|---------------|-------|
| Hex Value     | `$1B`|
| Categories    | <ul><li>[Angle](<../categories/Angle.md>)</li><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `R►Pr(`</li></ul> |

# `R►Pr(`

## Description
Returns `R`, given rectangular coordinates `x` and `y` or a list of rectangular coordinates.


<b>Availability</b>: Token available everywhere.

## Syntax
`R►Pr(x,y)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

<tr><td><b>y</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>angle</kbd>, `ANGLE`, `5:R`, `Pr(`
<hr>

R►Pr( (Rectangular to polar radius) takes the (_x_,_y_) (Cartesian) coordinates, and gives the radius coordinate _r_ of the same point in (_r_,_θ_) (polar) mode. The identity used for this conversion is _r_² = _x_²+_y_²

```ti-basic
R►Pr(3,4)
    5
√(3²+4²)
    5
R►Pr({6,5},{8,12})
    {10 13}
```

The function works even when the equivalent √(_x_²+_y_²) fails due to overflow:

```ti-basic
R►Pr(3e99,4e99)
    5e99
```

## Optimization

R►Pr( is the smallest way to implement the distance formula $d=\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$. Just give the values x<sub>1</sub>-x<sub>2</sub> and y<sub>1</sub> - y<sub>2</sub> as arguments:

```ti-basic
:√((5-2)²+(4-0)²)
can be
:R►Pr(5-2,4-0)
```

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if you input a complex argument.
*   **[ERR:DIM MISMATCH](/errors#dimmismatch)** is thrown if two list arguments have different dimensions.

## Related Commands

*   [P►Rx(](/p-rx)
*   [P►Ry(](/p-ry)
*   [R►Pθ(](/r-ptheta)
*   [abs(](/abs)
*   [√(](/square-root)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


