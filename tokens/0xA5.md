| Property      | Value |
|---------------|-------|
| Hex Value     | `$A5`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Cercle(`</li></ul> |

# `Circle(`

## Overview
Draws a circle with center (`X`,`Y`) and `radius` with specified
Color#: 10 - 24 or color name pasted from [vars] COLOR.
linestyle#: 1-2.


<b>Availability</b>: Token available everywhere.

## Syntax
`Circle(X,Y,radius[,color#,linestyle#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>X</b></td><td></td><td></td></tr>

<tr><td><b>Y</b></td><td></td><td></td></tr>

<tr><td><b>radius</b></td><td></td><td></td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

<tr><td>linestyle#</td><td>integer</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `9:Circle(`
<hr>

## Description

<tt>Circle(<em>X</em>,<em>Y</em>,<em>r</em>)</tt> will draw a circle at (_X_,_Y_) with radius _r_. _X_ and _Y_ will be affected by the window settings. The radius will also be affected by the window settings.

```ti-basic
:Circle(5,5,5)
```

## Advanced Uses

The radius of a circle is affected by the window settings. This means that if the x- and y-increment is two, the radius will be two pixels. However, there is another way to take advantage of this to draw ellipses. If the x- and y-increment are different, then the shape will not be a circle. For instance, with Xmin=0, Xmax=20, Ymin=0, and Ymax=31, <tt>Circle(10,10,2)</tt> will draw an ellipse, where the width is greater than the height.

## Optimization

If a complex list such as {𝑖} is passed to <tt>Circle(</tt> as the fourth argument, the "fast circle" routine is used instead, which uses the symmetries of the circle to only do 1/8 of the trig calculations. For example:

```ti-basic
:Circle(0,0,5
can be
:Circle(0,0,5,{i
```

Any list of complex numbers will work as the fourth argument in the same way, but there's no benefit to using any other list.

Note: The "fast circle" routine is not available on the TI-84+CSE or TI-84+CE calculators.

## Command Timings

The ordinary <tt>Circle(</tt> is extremely slow. The fast circle trick discussed above cuts the time down to only about 30% of the "slow <tt>Circle(</tt>" time! While still not instant, this is faster than any replacement routine that can be written in TI-Basic.

For small radii, replace <tt>Circle(</tt> with <tt>Pt-On(</tt> instead.

## Related Commands

*   <tt><a href="Line(.md">Line(</a></tt>
*   <tt><a href="Pt-On(.md">Pt-On(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: 15274, burr, CloudVariable, DarkerLine, GoVegan, jonbush, Myles_Zadok, Xphoenix, Zaphod Beeblebrox.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


