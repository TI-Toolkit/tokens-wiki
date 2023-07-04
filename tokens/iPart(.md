| Property      | Value |
|---------------|-------|
| Hex Value     | `$B9`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Math](<../categories/Math.md>) > [Number](<../categories/Math.md#Number>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ent(`</li></ul> |

# `iPart(`

## Description
Returns the integer part of a real or complex number, expression, list, or matrix.


<b>Availability</b>: Token available everywhere.

## Syntax
`iPart(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `3:iPart(`
<hr>

<tt>iPart(<em>value</em>)</tt> returns the integer part of _value_, and extends to complex numbers, lists, and matrices.

```ti-basic
iPart(5.32)
               5
iPart(4/5)
               0
iPart(‾5.32)
               ‾5
iPart(‾4/5)
               0
```

The difference between <tt>iPart(</tt> and <tt><a href="int(.md">int(</a></tt> is subtle; while <tt>iPart(</tt> always truncates its parameters, simply removing the integer part, <tt>int(</tt> always rounds down. This means that they return the same answers for positive numbers, but <tt>int(</tt> will return an answer 1 less than <tt>iPart(</tt> for (non-integer) negative numbers. For example, <tt>iPart(-5.32)</tt> is -5, while <tt>int(-5.32)</tt> is -6.

In this case of positive values, though, the decision to use <tt>iPart(</tt> or <tt>int(</tt> is mostly a matter of preference - some people only use <tt>int(</tt> because it is shorter, some people use <tt>iPart(</tt> when there is a corresponding <tt><a href="fPart(.md">fPart(</a></tt> taken. However, see the Command Timings section.

## Advanced Uses

<tt>iPart(</tt>, along with <tt>fPart(</tt> and <tt>int(</tt>, can be used for integer [compression](compression.md).

## Command Timings

The following table compares the speeds of <tt>int(</tt> and <tt>iPart(</tt>. Each command was timed over 2000 iterations to find a noticeable difference.

Format

Bars

Pixels

Total

iPart(1

10

1

81

iPart(1.643759

10

1

81

int(1

8

7

71

int(1.643759

10

2

82

Conclusion: With 5 or fewer decimal places, you should consider using <tt>int(</tt> because of its speed, but with more decimals, <tt>iPart(</tt> remains constant to eventually beat out its counterpart.

## Related Commands

*   <tt><a href="int(.md">int(</a></tt>
*   <tt><a href="fPart(.md">fPart(</a></tt>
*   <tt><a href="round(.md">round(</a></tt>

## See Also

*   [Compression](Compression.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `iPart ` added |
| <b>TI-83</b> | 0.01013 | Renamed `iPart ` to `iPart(`


