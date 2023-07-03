| Property      | Value |
|---------------|-------|
| Hex Value     | `$64`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Radian`</li></ul> |

# `Radian`

## Description
Sets radian angle mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Radian`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Radian`
<hr>

The Radian command puts the calculator into Radian mode, where the inputs and/or outputs to trig functions are assumed to be radian angles.

Angles measured in radians range from 0 to 2[π](/pi). They are defined as the arc length of the arc, on a unit circle (circle with radius 1), that corresponds to the angle when it is placed in the center. This definition actually only differs from [degree](/degree-mode) measurements by a constant factor.

To convert from a degree angle to a radian angle, multiply by 180/π. To go the other way, and get a radian angle from a degree angle, multiply by π/180.

The following commands are affected by whether the calculator is in Radian or [Degree](/degree-mode) mode:

The input is differently interpreted:

*   [P►Rx(](/p-rx), [P►Ry(](/p-ry)
*   [sin(](/sin), [cos(](/cos), [tan(](/tan)

The output is differently expressed:

*   [angle(](/angle)
*   [R►Pθ(](/r-ptheta)
*   [sinֿ¹(](/arcsin), [cosֿ¹(](/arccos), [tanֿ¹(](/arctan)
*   [►Polar](/polar-display) (and complex numbers when in [re^θi](/re-thetai) mode)
*   <sup><a href="/radian-symbol">r</a></sup>, [°](/degree-symbol)

However, some commands are notably unaffected by angle mode, even though they involve angles, and this may cause confusion. This happens with the [SinReg](/sinreg) command, which assumes that the calculator is in Radian mode even when it's not. As a result, the regression model it generates will graph incorrectly in Degree mode.

Also, complex numbers in polar form are an endless source of confusion. The angle( command, as well as the polar display format, are affected by angle mode. However, complex exponentials (see the [e^(](/e-exponent) command), defined as $e^{i\theta}=\cos\theta+i\sin\theta$, are evaluated as though in Radian mode, regardless of the angle mode. This gives mysterious results like the following:

```ti-basic
Degree:re^θi
        Done
e^(πi)
        1e^(180i)
Ans=e^(180i)
        0 (false)
```

Overall, it's better to put your calculator in Radian mode when dealing with polar form of complex numbers, especially since no mathematician would ever use degrees for the purpose anyway.

## Optimization

It's sometimes beneficial to use the <sup><a href="/radian-symbol">r</a></sup> command instead of switching to Radian mode. The <sup>r</sup> symbol will make sure a number is interpreted as a radian angle, even in degree mode, so that, for example:

Degree  
………………Done  
sin(π)  
……………….0548036651  
sin(π<sup>r</sup>)  
………………0

This is smaller when only one trig calculation needs to be done. Also, it doesn't change the user's settings, which are good to preserve whenever possible.

## Related Commands

*   [Degree](/degree-mode)
*   <sup><a href="/radian-symbol">r</a></sup>
*   [°](/degree-symbol)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


