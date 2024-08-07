| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB4E`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `r𝑒^θ𝑖`</li></ul> |

# `r𝑒^θ𝑖`

## Overview
Sets the mode to polar complex number mode (`re``^`θ`i`).


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`re^θi`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>e</b></td><td></td><td></td></tr>

<tr><td><b>θ</b></td><td></td><td></td></tr>

<tr><td><b>i</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>mode</b></kbd></tt>
<hr>

## Description

The re^θ𝑖 command puts the calculator into polar complex number mode. This means that:

*   Taking square roots of negative numbers, and similar operations, no longer returns an error.
*   Complex results are displayed in the form re^(θ𝑖) (hence the name of the command)

The mathematical underpinning of this complex number format is due to the fact that if (x,y) is a point in the plane using the normal coordinates, it can also be represented using coordinates (r,θ) where r is the distance from the origin and θ is the angle that the line segment to the point from the origin makes to the positive x-axis (see [Polar](polar-mode) and [PolarGC](PolarGC.md) for more information on polar coordinates and graphing). What does this have to do with complex numbers? Simple: if x+y𝑖 is a complex number in normal (rectangular) form, and re^(θ𝑖) is the same number in polar form, then (x,y) and (r,θ) represent the same point in the plane.

Of course, that has a lot to do with how you define imaginary exponents, which isn't that obvious.

An equivalent form to polar form is the form r[cos(θ)+𝑖sin(θ)].

Unfortunately, the calculator seems to have some confusion about the use of [degree](degree-mode) and [radian](radian-mode) angle measures for θ in this mode (the answer is: you can only use radians — degrees make no sense with complex exponents). When calculating a value re^(θ𝑖) by using the [e^(](𝑒^\(.md) command and plugging in numbers, the calculator assumes θ is a radian angle, whether it's in Degree or Radian mode. However, when _displaying_ a complex number as re^(θ𝑖), the calculator will display θ in radian or degree measure, whichever is enabled. This may lead to such pathological output as:

```ti-basic
Degree:r𝑒^θ𝑖
        Done
𝑒^(πi)
        1𝑒^(180i)
Ans=𝑒^(180𝑖)
        0 (false)
```

It's recommended, then, to use [Radian](radian-mode) mode whenever you're in re^θ𝑖 mode.

## Related Commands

*   [Real](Real.md)
*   [a+b𝑖](a+b𝑖.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


