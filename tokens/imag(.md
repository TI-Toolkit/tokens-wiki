| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB27`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Math](<../categories/Math.md>) > [Complex](<../categories/Math.md#Complex>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `imag(`</li></ul> |

# `imag(`

## Description
Returns the imaginary (non-real) part of a complex number or list of complex numbers.


<b>Availability</b>: Token available everywhere.

## Syntax
`imag(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>complex|complex[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `CMPLX`, `3:imag(`
<hr>

<tt>imag(z)</tt> returns the imaginary part of the complex number _z_. If _z_ is represented as _x_+i_y_ where _x_ and _y_ are both real, <tt>imag(z)</tt> returns _y_. Also works on a list of complex numbers.

```ti-basic
imag(3+4i)
     4

imag({3+4i,-2i,17})
     {4,-2,0}
```

## Related Commands

*   <tt><a href="/real-func">real(</a></tt>
*   <tt><a href="/abs">abs(</a></tt>
*   <tt><a href="/angle">angle(</a></tt>
*   <tt><a href="/conj">conj(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


