| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB25`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Math](<../categories/Math.md>) > [Complex](<../categories/Math.md#Complex>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `conj(`</li></ul> |

# `conj(`

## Overview
Returns the complex conjugate of a complex number or list of complex numbers.


<b>Availability</b>: Token available everywhere.

## Syntax
`conj(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>complex|complex[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `CMPLX`, `1:conj(`
<hr>

## Description

<tt>conj(<em>z</em>)</tt> returns the complex conjugate of the complex number _z_. If _z_ is represented as _x_+i_y_ where _x_ and _y_ are both real, <tt>conj(<em>z</em>)</tt> returns _x_-i_y_. Also works on a list of complex numbers.

```ti-basic
conj(3+4i)
     3-4i
```

The conjugate of a number $z$ is often written $\overline{z}$, and is useful because it has the property that $z\overline{z}$ and $z+\overline{z}$ are real numbers.

## Related Commands

*   <tt><a href="abs(.md">abs(</a></tt>
*   <tt><a href="angle(.md">angle(</a></tt>
*   <tt><a href="real(.md">real(</a></tt>
*   <tt><a href="imag(.md">imag(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


