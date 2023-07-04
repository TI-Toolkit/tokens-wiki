| Property      | Value |
|---------------|-------|
| Hex Value     | `$C3`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Keypad](<../categories/Keypad.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Arcsin(`</li></ul> |

# `sin⁻¹(`

## Description
Returns the arcsine of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`sin⁻¹(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>⁻¹</b></td><td>real|expression|real[]</td><td></td></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>sin⁻¹</kbd>
<hr>

sinֿ¹( returns the [arcsine](https://mathworld.wolfram.com/InverseSine.html) of its argument. It is the inverse of [sin(](sin\(.md), which means that sinֿ¹(z) produces an angle θ such that sin(θ)=z.

Like sin(, the result of sinֿ¹( depends on whether the calculator is in [Radian](radian-mode) or [Degree](degree-mode) mode. However, unlike sine, the result is in degrees or radians, not the argument. A full rotation around a circle is 2π radians, which is equal to 360°. The conversion of θ=sinֿ¹(n) from radians to degrees is θ*180/π and from degrees to radians is θ*π/180. The sinֿ¹( command also works on lists.

The sinֿ¹( function can be defined for all real and complex numbers; however, the function assumes real values only in the closed interval [-1,1]. Because the trigonometric functions and their inverses in the Z80 calculators are restricted only to real values, the calculator will throw [ERR:DOMAIN](errors#domain) if the argument is outside of this interval, no matter what the mode setting may be.

In radians:

```ti-basic
:sinֿ¹(1)
    1.570796327
```

  
In degrees:

```ti-basic
:sinֿ¹(1)
    90
```

## Advanced Uses

Since the function sine itself doesn't have the restrictions that arcsine does, and since arcsine is the inverse of sine, you can use sinֿ¹(sin( to keep a variable within a certain range (most useful on the [graph screen](graphscreen)). Here is an example for a game like [pong](pong.md). The ball travels between -6 and 6.

You could use a flag like this:

```ti-basic
:If 6=abs(X        \\ X is the position
:-D→D        \\ D is the direction
:X+D→X        \\ new position
:Pt-On(-54,X,"=")
```

An easier way to do this, without needing a flag or even an If statement, is using sinֿ¹(sin(

```ti-basic
:X+1→X        \\ Note: the calculator is in degree mode
:Pt-On(-54,sinֿ¹(sin(15X))/15,"=")    \\ 15 is used because sinֿ¹ ranges from [-90,90]
                                        and X from [-6,6],  so 90/6=15
```

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown if you input a complex value or a matrix.
*   **[ERR:DOMAIN](errors#domain)** is thrown if you supplied an argument outside the interval [-1,1]

## Related Commands

*   [sin(](sin\(.md)
*   [cos(](cos\(.md)
*   [cosֿ¹(](cosֿ¹\(.md)
*   [tan(](tan\(.md)
*   [tanֿ¹(](tanֿ¹\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, simplethinker, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `sin⁻¹ ` added |
| <b>TI-83</b> | 0.01013 | Renamed `sin⁻¹ ` to `sin⁻¹(`


