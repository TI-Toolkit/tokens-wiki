| Property      | Value |
|---------------|-------|
| Hex Value     | `$B1`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Math](<../categories/Math.md>) > [Number](<../categories/Math.md#Number>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `partEnt(`</li></ul> |

# `int(`

## Description
Returns the largest integer ≤ a real or complex number, expression, list, or matrix.


<b>Availability</b>: Token available everywhere.

## Syntax
`int(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `5:int(`
<hr>

<tt>int(X)</tt> is the [floor function](https://mathworld.wolfram.com/FloorFunction.html). It returns the greatest integer less than or equal to _X_, and also works on complex numbers, lists and matrices.

```ti-basic
int(5.32)
               5
int(4/5)
               0
int(‾5.32)
               ‾6
int(‾4/5)
               ‾1
```

The difference between <tt><a href="/ipart">iPart(</a></tt> and <tt>int(</tt> is subtle, and many people aren't even aware of it, but it exists. Whereas <tt>iPart(</tt> always truncates its parameters, simply removing the fractional part, <tt>int(</tt> always rounds down. This means that they return the same answers for positive numbers, but <tt>int(</tt> will return an answer 1 less than <tt>iPart(</tt> for (non-integer) negative numbers. For example, <tt>iPart(-5.32)</tt> is -5, while <tt>int(-5.32)</tt> is -6.

Most of the time, however, you're dealing with only positive numbers anyway. In this case, the decision to use <tt>iPart(</tt> or <tt>int(</tt> is mostly a matter of preference - some people use <tt>int(</tt> because it is shorter; some use <tt>iPart(</tt> when there is a corresponding <tt><a href="/fpart">fPart(</a></tt> taken. However, if speed is a consideration, one should check the Command Timings section.

## Advanced Uses

<tt>int(</tt>, along with <tt><a href="/ipart">iPart(</a></tt> and <tt><a href="/fpart">fPart(</a></tt>, can be used for integer [compression](/compression).

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

Conclusion: <tt>int(</tt> scales with the length of its input while <tt>iPart(</tt> does not. For fewer than 6 decimals, <tt>int(</tt> will most often be faster; for 6 or more decimals, consider using <tt>iPart(</tt>.

## Related Commands

*   <tt><a href="/ipart">iPart(</a></tt>
*   <tt><a href="/fpart">fPart(</a></tt>
*   <tt><a href="/round">round(</a></tt>

## See Also

*   [Compression](/compression)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `int ` added |
| <b>TI-83</b> | 0.01013 | Renamed `int ` to `int(`


