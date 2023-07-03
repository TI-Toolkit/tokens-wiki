| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB4F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `a+b𝑖`</li></ul> |

# `a+b𝑖`

## Description
Sets the mode to rectangular complex number format (a+b`i`).


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`a+bi`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>i</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>mode</b></kbd></tt>, `a+b`, `𝑖`
<hr>

The `a+b𝑖` command puts the calculator into rectangular complex number mode. This means that:

*   Taking square roots of negative numbers, and similar operations, no longer returns an error.
*   Complex results are displayed in the form `a+b𝑖` (hence the name of the command)

This is the standard way of displaying complex numbers, though they can also be displayed in polar form (see [re^θi](/re-thetai) for more details). To extract the coefficients a and b, use the [real(](/real-func) and [imag(](/imag) commands.

## Advanced Uses

Rather than switch to a+b𝑖 mode, you might want to force the calculations to use complex numbers by making the original argument complex. The general way to do this is by adding +0𝑖 to the number. However, there may be an optimization in any particular case. See the [quadratic formula](/quadratic-formula) routine for a good example of this.

```ti-basic
Real
        Done
√(-1)    
        (causes an error)
√(-1+0i)        
        i
```

## Related Commands

*   [Real](/real-mode)
*   [re^θi](/re-thetai)

## See Also

*   [Quadratic Formula](/quadratic-formula)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


