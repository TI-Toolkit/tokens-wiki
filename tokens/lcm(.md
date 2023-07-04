| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB08`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Math](<../categories/Math.md>) > [Number](<../categories/Math.md#Number>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ppcm(`</li></ul> |

# `lcm(`

## Overview
Returns the least common multiple of `valueA` and `valueB`, which can be real numbers or lists.


<b>Availability</b>: Token available everywhere.

## Syntax
`lcm(valueA,valueB)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>valueA</b></td><td>real|expression|real[]</td><td></td></tr>

<tr><td><b>valueB</b></td><td>real|expression|real[]</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `8:lcm(`
<hr>

## Description

Returns the least common multiple (LCM) of two nonnegative integers; lcm(_a_,_b_) is equivalent to _a__b_/gcd(_a_,_b_). Also works on lists.

```ti-basic
lcm(8,6)
     24
lcm({9,12},6)
     {18 12}
lcm({14,12},{6,8})
     {42 24}
```

## Error Conditions

*   **[ERR:DIM MISMATCH](errors#dimmismatch)** is thrown if the arguments are two lists that don't have the same number of elements.
*   **[ERR:DOMAIN](errors#domain)** is thrown if the arguments aren't positive integers (or lists of positive integers) less than 1e12.

## Related Commands

*   [gcd(](gcd\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


