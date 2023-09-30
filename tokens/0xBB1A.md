| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB1A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [G](<../categories/Catalog.md#G>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `géomtFRép(`</li></ul> |

# `geometcdf(`

## Overview
Computes a cumulative probability at `x`, the number of the trial on which the first success occurs, for the discrete geometric distribution with the specified probability of success `p.`


<b>Availability</b>: Token available everywhere.

## Syntax
`geometcdf(p,x)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>p</b></td><td></td><td></td></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `F:geometcdf(`
<hr>

## Description

This command is used to calculate cumulative geometric probability. In plainer language, it solves a specific type of often-encountered probability problem, that occurs under the following conditions:

1.  A specific event has only two outcomes, which we will call "success" and "failure"
2.  The event is going to keep happening until a success occurs
3.  Success or failure is determined randomly with the same probability of success each time the event occurs
4.  We're interested in the probability that it takes **at most** a specific amount of trials to get a success.

For example, consider a basketball player that always makes a shot with 1/4 probability. He will keep throwing the ball until he makes a shot. What is the probability that it takes him no more than 4 shots?

1.  The event here is throwing the ball. A "success", obviously, is making the shot, and a "failure" is missing.
2.  The event is going to happen until he makes the shot: a success.
3.  The probability of a success - making a shot - is 1/4
4.  We're interested in the probability that it takes at most 4 trials to get a success

The syntax here is <tt>geometcdf(<em>probability</em>, <em>trials</em>)</tt>. In this case:

```ti-basic
:geometcdf(1/4,4
```

  
This will give about .684 when you run it, so there's a .684 probability that he'll make a shot within 4 throws.

Note the relationship between <tt><a href="geometpdf(.md">geometpdf(</a></tt> and <tt>geometcdf(</tt>. Since <tt>geometpdf(</tt> is the probability it will take **exactly** N trials, we can write that <tt>geometcdf(1/4,4) = geometpdf(1/4,1) + geometpdf(1/4,2) + geometpdf(1/4,3) + geometpdf(1/4,4)</tt>.

## Formulas

Going off of the relationship between <tt>geometpdf(</tt> and <tt>geometcdf(</tt>, we can write a formula for <tt>geometcdf(</tt> in terms of <tt>geometpdf(</tt>:

(1) $`\begin{align} \texttt{geometcdf}(p,n) = \sum_{i=1}^{n} \texttt{geometpdf}(p,i) = \sum_{i=1}^{n} p\,(1-p)^{i-1} \end{align}`$ 

(If you're unfamiliar with sigma notation, $\sum_{i=1}^{n}$ just means "add up the following for all values of i from 1 to n")

However, we can take a shortcut to arrive at a much simpler expression for <tt>geometcdf(</tt>. Consider the opposite probability to the one we're interested in, the probability that it will **not** take "at most N trials", that is, the probability that it will take more than N trials. This means that the first N trials are failures. So <tt>geometcdf(p,N)</tt> = (1 - "probability that the first N trials are failures"), or:

(2) $`\begin{align} \texttt{geometcdf}(p,n) = 1-(1-p)^n \end{align}`$ 

## Related Commands

*   <tt><a href="binompdf(.md">binompdf(</a></tt>
*   <tt><a href="binomcdf(.md">binomcdf(</a></tt>
*   <tt><a href="geometpdf(.md">geometpdf(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, CloudVariable, DarkerLine, GoVegan, Joe_Young, kg583, Timothy Foster, Weregoose.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


