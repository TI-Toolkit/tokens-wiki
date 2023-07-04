| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB19`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [G](<../categories/Catalog.md#G>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `géomtFdp(`</li></ul> |

# `geometpdf(`

## Description
Computes a probability at `x`, the number of the trial on which the first success occurs, for the discrete geometric distribution with the specified probability of success `p.`


<b>Availability</b>: Token available everywhere.

## Syntax
`geometpdf(p,x)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>p</b></td><td></td><td></td></tr>

<tr><td><b>x</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `E:geometpdf(`
<hr>

This command is used to calculate geometric probability. In plainer language, it solves a specific type of often-encountered probability problem, that occurs under the following conditions:

1.  A specific event has only two outcomes, which we will call "success" and "failure"
2.  The event is going to keep happening until a success occurs
3.  Success or failure is determined randomly with the same probability of success each time the event occurs
4.  We're interested in the probability that it takes a specific amount of trials to get a success.

For example, consider a basketball player that always makes a shot with 1/3 probability. He will keep throwing the ball until he makes a shot. What is the probability that it takes him 3 shots?

1.  The event here is throwing the ball. A "success", obviously, is making the shot, and a "failure" is missing.
2.  The event is going to happen until he makes the shot: a success.
3.  The probability of a success - making a shot - is 1/3
4.  We're interested in the probability that it takes 3 trials to get a success

The syntax here is <tt>geometpdf(<em>probability</em>, <em>trials</em>)</tt>. In this case:

```ti-basic
:geometpdf(1/3,3
```

  
This will give about .148 when you run it, so there's a .148 probability that it will take him 3 shots until he makes one (he'll make it on the 3rd try).

## Formulas

The value of <tt>geometpdf(</tt> is given by the formula

(1) $`\begin{align} \texttt{geometpdf}(p,n) = p(1-p)^{n-1} \end{align}`$ 

This formula can be intuitively understood: the probability that the first success is the nth trial is the probability of getting a success - $p$ - times the probability of missing it the first n-1 times - $(1-p)^{n-1}$.

For the trivial value of n=0, however, the above formula gives the incorrect value of 1. It should actually be 0, since the first success can never be the 0th trial. However, since you're not likely to ever be interested in this probability, this drawback doesn't really matter.

## Related Commands

*   <tt><a href="binompdf(.md">binompdf(</a></tt>
*   <tt><a href="binomcdf(.md">binomcdf(</a></tt>
*   <tt><a href="geometcdf(.md">geometcdf(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, CloudVariable, DarkerLine, GoVegan, kg583, Timothy Foster, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


