| Property      | Value |
|---------------|-------|
| Hex Value     | `$B2`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Math](<../categories/Math.md>) > [Number](<../categories/Math.md#Number>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `abs(`</li></ul> |

# `abs(`

## Description
Returns the absolute value of a real number, expression, list, or matrix.


<b>Availability</b>: Token available everywhere.

## Syntax
`abs(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>real|expression|real[]|matrix</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `1:abs(`
<hr>

## Description
Returns the magnitude of a complex number or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`abs(complex value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>complex value</b></td><td>complex|complex[]</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `CMPLX`, `5:abs(`
<hr>

`abs(` returns the absolute value of the real number _x_. Also works on a list or matrix of real numbers.

```ti-basic
abs(3)
     3

abs(‾3)
     3
```

For complex numbers, `abs(z)` returns the absolute value (also known as the complex modulus, norm, or a hundred other terms) of the complex number _z_. If _z_ is represented as _x_+i_y_ where x and y are both real, `abs(z)` returns √(_x_²+_y_²). Also works on a list of complex numbers.

```ti-basic
abs(3+4i)
     5
```

## Optimization

The `abs(` command, used properly, may be a smaller method of testing if a variable is in some range. For example:

```ti-basic
:If 10<X and X<20
can be
:If 5>abs(X-15
```

In general, the first number, A, in the expression `A>abs(X-B)` should be half the length of the range, half of 10 in this case, and the second number, B, should be the midpoint of the range (here, 15).

This can be taken to extreme degrees. For example, the following code uses abs( three times to test if X is the [getKey](/getkey) keycode of one of the keys 1, 2, 3, 4, 5, 6, 7, 8, or 9:

```ti-basic
:If 2>abs(5-abs(5-abs(X-83
```

* * *

For complex numbers given by a separate real and complex part, `abs(X+iY)` can be optimized to R►Pr(X,Y).

## Related Commands

*   [angle(](/angle)
*   [real(](/real-func)
*   [imag(](/imag)
*   [conj(](/conj)
*   [R►Pr(](/r-pr)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `abs ` added |
| <b>TI-83</b> | 0.01013 | Renamed `abs ` to `abs(`


