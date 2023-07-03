| Property      | Value |
|---------------|-------|
| Hex Value     | `$C2`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Keypad](<../categories/Keypad.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `sin(`</li></ul> |

# `sin(`

## Description
Returns the sine of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`sin(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>sin</b></kbd></tt>
<hr>

> **NOTE**: Due to the limitations of the wiki markup language, the <sup><a href="/wiki-limits#toc0">r</a></sup> command on this page does not appear as it would on the calculator. See [Wiki Markup Limitations](/wiki-limits) for more information.

sin(θ) returns the [sine](https://mathworld.wolfram.com/Sine.html) of θ, which is defined as the y-value of the point of intersection of the unit circle and a line containing the origin that makes an angle θ with the positive x-axis

The value returned depends on whether the calculator is in [Radian](/radian-mode) or [Degree](/degree-mode) mode. A full rotation around a circle is 2π radians, which is equal to 360°. The conversion from radians to degrees is angle*180/π and from degrees to radians is angle*π/180. The sin( command also works on a list of real numbers.

In radians:

```ti-basic
sin(π/6)
    .5
```

In degrees:

```ti-basic
sin(30)
    .5
```

## Advanced Uses

You can bypass the mode setting by using the [°](/degree-symbol) (degree) and <sup><a href="/radian-symbol">r</a></sup> (radian) symbols. These next two commands will return the same values no matter if your calculator is in degrees or radians:

```ti-basic
sin(30°)
    .5
```

```ti-basic
sin(π/6ֿ¹)
    .5
```

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if you supply a matrix or a complex argument.
*   **[ERR:DOMAIN](/errors#domain)** is thrown if you supply an input ≥1E12.

## Related Commands

*   [sinֿ¹(](/arcsin)
*   [cos(](/cos)
*   [cosֿ¹(](/arccos)
*   [tan(](/tan)
*   [tanֿ¹(](/arctan)

## See Also

*   [Look-Up Tables](/lookuptables)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `sin ` added |
| <b>TI-83</b> | 0.01013 | Renamed `sin ` to `sin(`


