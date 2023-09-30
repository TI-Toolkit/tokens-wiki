| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB26`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Math](<../categories/Math.md>) > [Complex](<../categories/Math.md#Complex>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `reel(`</li></ul> |

# `real(`

## Overview
Returns the real part of a complex number or list of complex numbers.


<b>Availability</b>: Token available everywhere.

## Syntax
`real(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>complex|complex[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `CPLX`, `2:real(`
<hr>

## Description

real(_z_) returns the real part of the complex number _z_. If _z_ is represented as _x_+i_y_ where _x_ and _y_ are both real, real(_z_) returns _x_. Also works on a list of complex numbers.

```ti-basic
real(3+4i)
     3
```

## Advanced Uses

The real( command is expanded by several [assembly libraries](asmlibs) (such as [xLIB](xLIB.md) and [Omnicalc](Omnicalc.md)) to call their own routines. If xLib is installed, then real( will no longer work as intended even in programs that want to use it for its intended purpose.

If you actually want to take the real part of a complex number, and want the program to work with one of these assembly libraries, you could use the [imag(](imag\(.md) command instead - real(Z) is equivalent to imag(Z𝑖). Alternatively, you could tell people using your program to uninstall xLIB or Omnicalc first.

If a program you downloaded has an error and 2:Goto takes you to a line with real( and a bunch of arguments, this is probably because the program uses Omnicalc or xLIB which you don't have installed.

## Related Commands

*   [abs(](abs\(.md)
*   [angle(](angle\(.md)
*   [conj(](conj\(.md)
*   [imag(](imag\(.md)

## See Also

*   [Assembly Libraries](Assembly Libraries.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


