| Property      | Value |
|---------------|-------|
| Hex Value     | `$65`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Degré`</li></ul> |

# `Degree`

## Overview
Sets degree angle mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Degree`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Degree`
<hr>

## Description

The <tt>Degree</tt> command puts the calculator into Degree mode, where the inputs and/or outputs to trig functions are assumed to be degree angles.

Angles measured in degrees range from 0 to 360, with 0 being an empty angle, 90 being a right angle, 180 being a straight angle, and 360 being a full angle all the way around a circle.

To convert from a radian angle to a degree angle, multiply by 180/π. To go the other way, and get a radian angle from a degree angle, multiply by π/180.

The following commands are affected by whether the calculator is in <tt><a href="Radian.md">Radian</a></tt> or <tt>Degree</tt> mode:

The input is differently interpreted:

*   <tt><a href="P►Rx(.md">P►Rx(</a></tt>, <tt><a href="P►Ry(.md">P►Ry(</a></tt>
*   <tt><a href="sin(.md">sin(</a></tt>, <tt><a href="cos(.md">cos(</a></tt>, <tt><a href="tan(.md">tan(</a></tt>

The output is differently expressed:

*   <tt><a href="angle(.md">angle(</a></tt>
*   <tt><a href="R►Pθ(.md">R►Pθ(</a></tt>
*   <tt><a href="sin⁻¹(.md">sin⁻¹(</a></tt>, <tt><a href="cos⁻¹(.md">cos⁻¹(</a></tt>, <tt><a href="tan⁻¹(.md">tan⁻¹(</a></tt>
*   <tt><a href="►Polar.md">►Polar</a></tt> (and complex numbers when in <tt><a href="r𝑒^θ𝑖.md">r𝑒^θ𝑖</a></tt> mode)
*   <tt><sup><a href="ʳ.md">ʳ</a></sup></tt>, <tt><a href="°.md">°</a></tt>

However, some commands are notably unaffected by angle mode, even though they involve angles, and this may cause confusion. This happens with the <tt><a href="SinReg.md">SinReg</a></tt> command, which assumes that the calculator is in <tt>Radian</tt> mode even when it's not. As a result, the regression model it generates will graph incorrectly in <tt>Degree</tt> mode.

Also, complex numbers in polar form are an endless source of confusion. The <tt>angle(</tt> command, as well as the polar display format, are affected by angle mode. However, complex exponentials (see the <tt><a href="𝑒^(.md">e^(</a></tt> command), defined as $e^{i\theta}=\cos\theta+i\sin\theta$, are evaluated as though in Radian mode, regardless of the angle mode. This gives mysterious results like the following:

```ti-basic
Degree:r𝑒^θ𝑖
        Done
e^(πi)
        1e^(180i)
Ans=e^(180i)
        0 (false)
```

Overall, it's better to put your calculator in <tt>Radian</tt> mode when dealing with polar form of complex numbers, especially since no mathematician would ever use degrees for the purpose anyway.

## Optimization

It's sometimes beneficial to use the <tt><a href="°.md">°</a></tt> symbol instead of switching to <tt>Degree</tt> mode. The ° symbol will make sure a number is interpreted as a degree angle, even in <tt>Radian</tt> mode, so that, for example:

```ti-basic
Radian
        Done
sin(90)
        -.8011526357
sin(90°)
        1
```

This is smaller when only one trig calculation needs to be done. Also, it doesn't change the user's settings, which are good to preserve whenever possible.

## Related Commands

*   <tt><a href="Radian.md">Radian</a></tt>
*   <tt><sup><a href="ʳ.md">ʳ</a></sup></tt>
*   <tt><a href="°.md">°</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Adriweb, burr, DarkerLine, GoVegan, kg583, pandather.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


