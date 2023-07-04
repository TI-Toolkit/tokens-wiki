| Property      | Value |
|---------------|-------|
| Hex Value     | `$C5`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Keypad](<../categories/Keypad.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Arccos(`</li></ul> |

# `cos⁻¹(`

## Description
Returns arccosine of a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`cos⁻¹(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>⁻¹</b></td><td>real|expression|real[]</td><td></td></tr>

<tr><td><b>value</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>cos⁻¹</kbd>
<hr>

<tt>cosֿ¹(</tt> returns the [arccosine](https://mathworld.wolfram.com/InverseCosine.html) of its argument. It is the inverse of <tt><a href="cos(.md">cos(</a></tt>, which means that <tt>cosֿ¹(n)</tt> produces an angle θ such that <tt>cos(θ)</tt>=n.

Like <tt>cos(</tt>, the result of <tt>cosֿ¹(</tt> depends on whether the calculator is in [Radian](radian-mode) or [Degree](degree-mode) mode. However, unlike cosine, the result is in degrees or radians, not the argument. A full rotation around a circle is 2π radians, which is equal to 360°. The conversion of θ=<tt>cosֿ¹(n)</tt> from radians to degrees is θ*180/π and from degrees to radians is θ*π/180. The <tt>cosֿ¹(</tt> command also works on a list.

The <tt>cosֿ¹(</tt> function can be defined for all real and complex numbers, but assumes real values only in the closed interval [-1,1]. Because Z80 calculators have their trigonometric functions and inverses restricted only to real values, the calculator will throw [ERR:DOMAIN](errors#domain) if the argument is outside of this interval, no matter what the mode setting may be.

In radians:

```ti-basic
:cosֿ¹(-1)
    3.141592654
```

  
In degrees:

```ti-basic
:cosֿ¹(-1)
    180
```

## Advanced Uses

Since the function cosine itself doesn't have the restrictions that arccosine does, and since arccosine is the inverse of cosine, you can use <tt>cosֿ¹(cos(</tt> to keep a variable within a certain range (most useful for the [home screen](homescreen)). Here is an example for a game like [pong](pong.md). The ball travels between 0 and 12.

You could use a flag like this:

```ti-basic
:If X=12 or not(X     \\ X is the position
:-D→D        \\ D is the direction
:X+D→X        \\ new position
:Output(8,X,"=
```

An easier way to do this, without needing a flag or even an <tt><a href="If.md">If</a></tt> statement, is using <tt>cosֿ¹(cos(</tt>

```ti-basic
:X+1→X        \\ Note: the calculator is in Degree mode
:Output(8,cosֿ¹(cos(15X))/15,"=")    \\ I used 15 because cosֿ¹ ranges from [0,180]
                                        and X from [0,12],  so 180/12=15
```

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown if you supplied an argument outside the interval [-1,1]
*   **[ERR:DATA TYPE](errors#datatype)** is thrown if you input a complex value or a matrix.

## Related Commands

*   <tt><a href="sin(.md">sin(</a></tt>
*   <tt><a href="sinֿ¹(.md">sinֿ¹(</a></tt>
*   <tt><a href="cos(.md">cos(</a></tt>
*   <tt><a href="tan(.md">tan(</a></tt>
*   <tt><a href="tanֿ¹(.md">tanֿ¹(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `cos⁻¹ ` added |
| <b>TI-83</b> | 0.01013 | Renamed `cos⁻¹ ` to `cos⁻¹(`


