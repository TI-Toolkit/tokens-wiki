| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB11`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `FracNormale(`</li></ul> |

# `invNorm(`

## Overview
Computes the inverse cumulative normal distribution function for a given area under the normal distribution curve specified by μ and s.. The optional argument tail can be LEFT (-∞,-a), CENTER [-a,a] or RIGHT (a, ∞) for Real a.
The tokens LEFT, CENTER and RIGHT can be found in [catalog].


<b>Availability</b>: Token available everywhere.

## Syntax
`invNorm(area[,µ,σ,tail])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>area</b></td><td></td><td></td></tr>

<tr><td><b>µ</b></td><td></td><td></td></tr>

<tr><td><b>σ</b></td><td></td><td></td></tr>

<tr><td><b>tail</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `3:invNorm(`
<hr>

## Description

<tt>invNorm(</tt> is the inverse of the cumulative normal distribution function: given a probability, it will give you a z-score with that tail probability. The probability argument of <tt>invNorm(</tt> is between 0 and 1; 0 will give <tt>-1<span style="font-size:75%;">E</span>99</tt> instead of negative infinity, and 1 will give <tt>1<span style="font-size:75%;">E</span>99</tt> instead of positive infinity

There are two ways to use <tt>invNorm(</tt>. With three arguments, the inverse of the cumulative normal distribution for a probability with specified mean and standard deviation is calculated. With one argument, the standard normal distribution is assumed (zero mean and unit standard deviation). For example:

```ti-basic
for the standard normal distribution
:invNorm(.975

for the normal distribution with mean 10 and std. dev. 2.5
:invNorm(.975,10,2.5
```

## Advanced

This is the only inverse of a probability distribution function available (at least on the TI-83/84/+/SE calculators), so it makes sense to use it as an approximation for other distributions. Since the normal distribution is a good approximation for a binomial distribution with many trials, we can use <tt>invNorm(</tt> as an approximation for the nonexistent "invBinom(". The following code gives the number of trials out of <tt>N</tt> that will succeed with probability <tt>X</tt> if the probability of any trial succeeding is <tt>P</tt> (rounded to the nearest whole number):

```ti-basic
:int(.5+invNorm(X,NP,√(NP(1-P
```

You can also use <tt>invNorm()</tt> to approximate the [inverse of a t-distribution](invt). Since a normal distribution is a t-distribution with infinite degrees of freedom, this will be an overestimate for probabilities below 1/2, and an underestimate for probabilities above 1/2.

## Formulas

Unlike the <tt><a href="normalpdf(.md">normalpdf(</a></tt> and <tt><a href="normalcdf(.md">normalcdf(</a></tt> commands, the <tt>invNorm(</tt> command does not have a closed-form formula. It can however be expressed in terms of the [inverse error function](http://en.wikipedia.org/wiki/Error_function):

(1) $`\begin{align} \texttt{invNorm}(p) = \sqrt{2}\,\texttt{erf}^{-1}(2p-1) \end{align}`$ 

For the arbitrary normal distribution with mean μ and standard deviation σ:

(2) $`\begin{align} \texttt{invNorm}(p,\mu,\sigma)=\mu+\sigma\texttt{invNorm}(p) \end{align}`$ 

## Related Commands

*   <tt><a href="normalpdf(.md">normalpdf(</a></tt>
*   <tt><a href="normalcdf(.md">normalcdf(</a></tt>
*   <tt><a href="ShadeNorm(.md">ShadeNorm(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, kg583, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


