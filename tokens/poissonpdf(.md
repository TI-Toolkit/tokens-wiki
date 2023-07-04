| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB17`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `poissonFdp(`</li></ul> |

# `poissonpdf(`

## Description
Computes a probability at `x` for the discrete Poisson distribution with the specified mean μ.


<b>Availability</b>: Token available everywhere.

## Syntax
`poissonpdf(μ,x)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>μ</b></td><td></td><td></td></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `C:poissonpdf(`
<hr>

This command is used to calculate Poisson distribution probability. In plainer language, it solves a specific type of often-encountered probability problem, that occurs under the following conditions:

1.  A specific event happens at a known average rate (X occurrences per time interval)
2.  Each occurrence is independent of the time since the last occurrence
3.  We're interested in the probability that the event occurs a specific number of times in a given time.

The <tt>poissonpdf(</tt> command takes two arguments: The _mean_ is the average number of times the event will happen during the time interval we're interested in. The _value_ is the number of times we're interested in the event happening (so the output is the probability that the event happens _value_ times in the interval).

For example, consider point on a city street where an average of 5 cars pass by each minute. What is the probability that in a given minute, 8 cars will drive by?

1.  The event is a car passing by, which happens at an average rate of 5 occurrences per time interval (a minute)
2.  Each occurrence is independent of the time since the last occurrence (we'll assume this is true, though traffic might imply a correlation here)
3.  We're interested in the probability that the event occurs 8 times in the time interval

The syntax in this case is:

```ti-basic
:poissonpdf(5,8
```

  
This will give about .065 when you run it, so there's a .065 probability that in a given minute, 8 cars will drive by.

## Formulas

The value of <tt>poissonpdf(</tt> is given by the formula

(1) $`\begin{align} \texttt{poissonpdf}(\lambda,k) = \frac{e^{-\lambda}\lambda^k}{k!} \end{align}`$ 

## Related Commands

*   <tt><a href="/binompdf">binompdf(</a></tt>
*   <tt><a href="/binomcdf">binomcdf(</a></tt>
*   <tt><a href="/poissoncdf">poissoncdf(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


