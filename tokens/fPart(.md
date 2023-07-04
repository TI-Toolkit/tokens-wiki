| Property      | Value |
|---------------|-------|
| Hex Value     | `$BA`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Math](<../categories/Math.md>) > [Number](<../categories/Math.md#Number>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `partDéc(`</li></ul> |

# `fPart(`

## Description
Returns the fractional part or parts of a real or complex number, expression, list, or matrix.


<b>Availability</b>: Token available everywhere.

## Syntax
`fPart(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `4:fPart(`
<hr>

<tt>fPart(value)</tt> returns the fractional part of _value_, be it a variable, list, or matrix.

```ti-basic
fPart(5.32)
             .32
fPart(4/5)
              .8
fPart(‾5.32)
             ‾.32
fPart(‾4/5)
              ‾.8
```

## Advanced Uses

<tt>fPart(</tt>, along with <tt><a href="int(.md">int(</a></tt> or <tt><a href="iPart(.md">iPart(</a></tt>, can be used for integer [compression](compression.md).

* * *

Also, <tt>fPart(</tt> is an easy way to find A mod B (the positive remainder when A is divided by B).

```ti-basic
:B(A<0)+iPart(BfPart(A/B))
```

If A is guaranteed to be positive, the following shorter code can be used, omitting <tt>B(A&lt;0)</tt>:

```ti-basic
:iPart(BfPart(A/B))
```

* * *

Finally, the easiest way to check if a number is a whole number is <tt>not(fPart(X</tt>:

```ti-basic
:If not(fPart(X:Then
: // X is an integer
:Else
: // X is not an integer
:End
```

This can be used, for example, to check if a number is divisible by another: if X is divisible by N, then X/N is a whole number. This is useful for finding the [factors](factorization) of a number. Warning: when storing values with repeating decimals and later multiplying them to see if a number makes it an integer it can return a value of 1 or -1 instead of 0 even if it is an integer do rounding errors. Example: storing 1/3 to X and computing<tt>fPart(3X)</tt> will return 1 instead of 0. This is because <tt>fPart(.999…)</tt> results in .999… and then rounds to 1 when displaying rather than rounding to 1.0 and then displaying the <tt>fPart(</tt> as 0.

## Related Commands

*   <tt><a href="int(.md">int(</a></tt>
*   <tt><a href="iPart(.md">iPart(</a></tt>
*   <tt><a href="round(.md">round(</a></tt>

## See Also

*   [Compression](Compression.md)
*   [Number Factorization](Number Factorization.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, CloudVariable, DarkerLine, ePIi, GoVegan, kg583.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `fPart ` added |
| <b>TI-83</b> | 0.01013 | Renamed `fPart ` to `fPart(`


