| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB28`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Math](<../categories/Math.md>) > [Complex](<../categories/Math.md#Complex>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `argument(`</li></ul> |

# `angle(`

## Description
Returns the polar angle of a complex number or list of complex numbers.


<b>Availability</b>: Token available everywhere.

## Syntax
`angle(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td>complex|complex[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `CMPLX`, `4:angle(`
<hr>

<tt>angle(z)</tt> returns the [complex argument](https://mathworld.wolfram.com/ComplexArgument.html) (also known as the polar angle) of the complex number _z_. If _z_ is represented as _x_+i_y_ where _x_ and _y_ are both real, <tt>angle(z)</tt> returns R►Pθ(_x_,_y_) (which is equivalent to tanֿ¹(_y__/x_) if x is nonzero). Also works on a list of complex numbers.

```ti-basic
angle(3+4i)
     .927295218
R►Pθ(3,4)
     .927295218
```

When writing a complex number _z_ in the form $re^{i\theta}$ (or, equivalently, $r(\cos\theta+i\sin\theta)$), then $\theta$ is equal to the value of <tt>angle(z)</tt>, suitably reduced so that the result returned is in the interval $-\pi<\theta\leq\pi$.

The <tt>angle(</tt> command also works on [matrices](/matrices), though not in any useful way: <tt>angle(</tt>[A] will return a matrix of the same size as [A], but with all elements 0. If you plan to use this, **don't**: 0[A] does the same thing, but is smaller and not as questionable (because this behavior is clearly unintentional on TI's part, and may be changed in an OS update).

## Related Commands

*   <tt><a href="/abs">abs(</a></tt>
*   <tt><a href="/conj">conj(</a></tt>
*   <tt><a href="/real-func">real(</a></tt>
*   <tt><a href="/imag">imag(</a></tt>
*   <tt><a href="/r-ptheta">R►Pθ(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


