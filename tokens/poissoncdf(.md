| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB18`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `poissonFRép(`</li></ul> |

# `poissoncdf(`

## Description
Computes a cumulative probability at `x` for the discrete Poisson distribution with specified mean μ.


<b>Availability</b>: Token available everywhere.

## Syntax
`poissoncdf(μ,x)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>μ</b></td><td></td><td></td></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `D:poissoncdf(`
<hr>

This command is used to calculate Poisson distribution cumulative probability. In plainer language, it solves a specific type of often-encountered probability problem, that occurs under the following conditions:

1.  A specific event happens at a known average rate (X occurrences per time interval)
2.  Each occurrence is independent of the time since the last occurrence
3.  We're interested in the probability that the event occurs at most a specific number of times in a given time interval.

The <tt>poissoncdf(</tt> command takes two arguments: The _mean_ is the average number of times the event will happen during the time interval we're interested in. The _value_ is the number of times we're interested in the event happening (so the output is the probability that the event happens at most _value_ times in the interval). Note that you may need to convert the mean so that the time intervals in both cases match up. This is done by a simple proportion: if the event happens 10 times per minute, it happens 20 times per two minutes.

For example, consider point on a city street where an average of 5 cars pass by each minute. What is the probability that in a given minute, no more than 3 cars will drive by?

1.  The event is a car passing by, which happens at an average rate of 5 occurences per time interval (a minute)
2.  Each occurrence is independent of the time since the last occurrence (we'll assume this is true, though traffic might imply a correlation here)
3.  We're interested in the probability that the event occurs at most 3 times in the time interval.

The syntax in this case is:

```ti-basic
:poissoncdf(5,3
```

  
This will give about .265 when you run it, so there's a .265 probability that in a given minute, no more than 3 cars will drive by.

## Formulas

The <tt>poissoncdf(</tt> command can be seen as a sum of <tt><a href="poissonpdf(.md">poissonpdf(</a></tt> commands:

(1) $`\begin{align} \texttt{poissoncdf}(\lambda,k)=\sum_{i=0}^k \texttt{poissonpdf}(\lambda,i) = \sum_{i=0}^k \frac {e^{-\lambda} \lambda^i}{i!} \end{align}`$ 

We can also write the <tt>poissoncdf(</tt> command in terms of the [incomplete gamma function](http://en.wikipedia.org/wiki/Incomplete_gamma_function):

(2) $`\begin{align} \texttt{poissoncdf}(\lambda,k)=\frac{\Gamma(k+1,\lambda)}{k!} \end{align}`$ 

## Related Commands

*   <tt><a href="binompdf(.md">binompdf(</a></tt>
*   <tt><a href="binomcdf(.md">binomcdf(</a></tt>
*   <tt><a href="poissonpdf(.md">poissonpdf(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


