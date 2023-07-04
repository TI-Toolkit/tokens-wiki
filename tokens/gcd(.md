| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB09`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [G](<../categories/Catalog.md#G>)</li><li>[Math](<../categories/Math.md>) > [Number](<../categories/Math.md#Number>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `pgcd(`</li></ul> |

# `gcd(`

## Description
Returns the greatest common divisor of `valueA` and `valueB`, which can be real numbers or lists.


<b>Availability</b>: Token available everywhere.

## Syntax
`gcd(valueA,valueB)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>valueA</b></td><td>real|expression|real[]</td><td></td></tr>

<tr><td><b>valueB</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `9:gcd(`
<hr>

The <tt>gcd(</tt> command returns the [greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor) (GCD) of two nonnegative integers. It also works on lists.

```ti-basic
gcd(8,6)
     2
gcd({9,12},6)
     {3 6}
gcd({14,12},{6,8})
     {2 4}
```

## Advanced Uses

A <tt>gcd(</tt> command can be nested inside another <tt>gcd(</tt> command to compare up to four numbers.

## Error Conditions

*   **[ERR:DIM MISMATCH](errors#dimmismatch)** is thrown if the arguments are two lists that don't have the same number of elements.
*   **[ERR:DOMAIN](errors#domain)** is thrown if the arguments aren't positive integers (or lists of positive integers) less than <tt>1E12</tt>.

## Related Commands

*   <tt><a href="lcm(.md">lcm(</a></tt>

## See Also

*   [Extended Euclidean Algorithm](Extended Euclidean Algorithm.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, CloudVariable, DarkerLine, GoVegan, kg583, Myles_Zadok, thornahawk, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


