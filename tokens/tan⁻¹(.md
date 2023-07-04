| Property      | Value |
|---------------|-------|
| Hex Value     | `$C7`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Keypad](<../categories/Keypad.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Arctan(`</li></ul> |

# `tan⁻¹(`

## Description
Returns the arctangent of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`tan⁻¹(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>⁻¹</b></td><td>real|expression|real[]</td><td></td></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>tan⁻¹</kbd>
<hr>

tanֿ¹( returns the [arctangent](https://mathworld.wolfram.com/InverseTangent.html) of its argument. It is the inverse of [tan(](tan\(.md), which means that tanֿ¹(n) produces an angle θ such that tan(θ)=n.

Like tan(, the result of tanֿ¹( depends on whether the calculator is in [Radian](radian-mode) or [Degree](degree-mode) mode. However, unlike tangent, the result is in degrees or radians, not the argument. A full rotation around a circle is 2π radians, which is equal to 360°. The conversion of θ=tanֿ¹(n) from radians to degrees is θ*180/π and from degrees to radians is θ*π/180. The tanֿ¹( command also works on a list.

tanֿ¹( will always return a value between -π/2 and π/2 (or -90° and 90°).

In radians:

```ti-basic
:tanֿ¹(1)
    .7853981634
```

  
In degrees:

```ti-basic
:tanֿ¹(1)
    45
```

## Optimization

Expressions of the form tanֿ¹(_y__/x_) are usually better recast as R►Pθ(_x_,_y_); the latter will not fail even if _x_ should happen to be equal to zero.

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown if you input a complex value or a matrix.

## Related Commands

*   [sin(](sin\(.md)
*   [sinֿ¹(](sinֿ¹\(.md)
*   [cos(](cos\(.md)
*   [cosֿ¹(](cosֿ¹\(.md)
*   [tan(](tan\(.md)
*   [R►Pθ(](R►Pθ\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `tan⁻¹ ` added |
| <b>TI-83</b> | 0.01013 | Renamed `tan⁻¹ ` to `tan⁻¹(`


