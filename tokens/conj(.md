| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB25`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Math](<../categories/Math.md>) > [Complex](<../categories/Math.md#Complex>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `conj(`</li></ul> |

# `conj(`

## Description
Returns the complex conjugate of a complex number or list of complex numbers.


<b>Availability</b>: Token available everywhere.

## Syntax
`conj(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>complex|complex[]</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `CMPLX`, `1:conj(`
<hr>

`conj(` returns the complex conjugate of the complex number _z_. If _z_ is represented as _x_+i_y_ where _x_ and _y_ are both real, `conj(` returns _x_-i_y_. Also works on a list of complex numbers.

```ti-basic
conj(3+4i)
     3-4i
```

The conjugate of a number $z$ is often written $\overline{z}$, and is useful because it has the property that $z\overline{z}$ and $z+\overline{z}$ are real numbers.

## Related Commands

*   [abs(](/abs)
*   [angle(](/angle)
*   [real(](/real-func)
*   [imag(](/imag)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


