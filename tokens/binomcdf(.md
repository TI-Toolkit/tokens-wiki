| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB16`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [B](<../categories/Catalog.md#B>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `binomFRép(`</li></ul> |

# `binomcdf(`

## Description
Computes a cumulative probability at `x` for the discrete binomial distribution with the specified `numtrials` and probability `p` of success on each trial.


<b>Availability</b>: Token available everywhere.

## Syntax
`binomcdf(numtrials,p[,x])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>numtrials</b></td><td></td><td></td></tr>

<tr><td><b>p</b></td><td></td><td></td></tr>

<tr><td>x</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `B:binomcdf(`
<hr>

This command is used to calculate the binomial cumulative probability function. In plainer language, it solves a specific type of often-encountered probability problem, that occurs under the following conditions:

1.  A specific event has only two outcomes, which we will call "success" and "failure"
2.  This event is going to repeat a specific number of times, or "trials"
3.  Success or failure is determined randomly with the same probability of success each time the event occurs
4.  We're interested in the probability that there are **at most** N successes

For example, consider a couple that intends to have 4 children. What is the probability that at most 2 are girls?

1.  The event here is a child being born. It has two outcomes "boy" or "girl". In this case, since the question is about girls, it's easier to call "girl" a success.
2.  The event is going to repeat 4 times, so we have 4 trials
3.  The probability of a girl being born is 50% or 1/2 each time
4.  We're interested in the probability that there are at most 2 successes (2 girls)

The syntax here is <tt>binomcdf(<em>trials</em>, <em>probability</em>, <em>value</em>)</tt>. In this case:

```ti-basic
:binomcdf(4,.5,2
```

  
This will give .6875 when you run it, so there's a .6875 probability out of 4 children, at most 2 will be girls.

An alternate syntax for <tt>binomcdf(</tt> leaves off the last argument, _value_. This tells the calculator to compute a list of the results for all values. For example:

```ti-basic
:binomcdf(4,.5
```

This will come to {.0625 .3125 .6875 .9375 1} when you run it. These are all the probabilities we get when you replace "at most 2 girls" with "at most 0", "at most 1", etc. Here, .0625 is the probability of "at most 0" girls (or just 0 girls), .3125 is the probability of at most 1 girl (1 or 0 girls), etc.

Several other probability problems actually are the same as this one. For example, "less than N" girls, just means "at most N-1" girls. "At least N" girls means "at most (total-N)" boys (here we switch our definition of what a success is). "No more than", of course, means the same as "at most".

## Advanced (for programmers)

The <tt><a href="binompdf(.md">binompdf(</a></tt> and <tt>binomcdf(</tt> commands are the only ones apart from <tt><a href="seq(.md">seq(</a></tt> that can return a list of a given length, and they do it much more quickly. It therefore makes sense, in some situations, to use these commands as substitutes for <tt><a href="seq(.md">seq(</a></tt>.

Here's how to do it:

1.  <tt>cumSum(</tt><tt>binomcdf(</tt>N,0 gives the list {1 2 … N+1}, and <tt>cumSum(</tt><tt>not(</tt><tt>binompdf(</tt>N,0 gives the list {0 1 2 … N}.
2.  With <tt>seq(</tt>, you normally do math inside the list: <tt>seq(</tt>3I<sup>2</sup>,I,0,5
3.  With these commands, you do the same math outside the list: 3<tt>Ans</tt><sup>2</sup> where <tt>Ans</tt> is the list {0 1 … 5}.

```ti-basic
:seq(2^I,I,1,5
can be
:cumSum(binomcdf(4,0
:2^Ans
which in turn can be
:2^cumSum(binomcdf(4,0
```

In general (where f() is some operation or even several operations):

```ti-basic
:seq(f(I),I,1,N
can be
:cumSum(binomcdf(N-1,0
:f(Ans
which can sometimes be
:f(cumSum(binomcdf(N-1,0
```

If the lower bound on I in the <tt>seq(</tt> statement is 0 and not 1, you can use <tt>binompdf(</tt> instead:

```ti-basic
:seq(f(I),I,0,N
can be
:cumSum(not(binompdf(N,0
:f(Ans
which can sometimes be
:f(cumSum(not(binompdf(N,0
```

This will not work if some command inside <tt>seq(</tt> can take only a number and not a list as an argument. For example, seq(L<sub>1</sub>(I),I,1,5 cannot be optimized this way.

## Formulas

Since "at most N" is equivalent to "0 or 1 or 2 or 3 or … N", and since we can combine these probabilities by adding them, we can come up with an expression for <tt>binomcdf(</tt> by adding up values of <tt><a href="binompdf(.md">binompdf(</a></tt>:

(1) $`\begin{align} \texttt{binomcdf}(n,p,k) = \sum_{i=0}^{k}\texttt{binompdf}(n,p,i) = \sum_{i=0}^{k}\binom{n}{i}\,p^i\,(1-p)^{n-i} \end{align}`$ 

(If you're not familiar with sigma notation, $\sum_{i=0}^{k}$ just means "add the following up for each value of i 0 through k")

## Error Conditions

*   **[ERR:DATATYPE](errors#datatype)** is thrown if you try to generate a list of probabilities with _p_ equal to 0 or 1, and at least 257 trials.
*   **[ERR:DOMAIN](errors#domain)** is thrown if the number of trials is at least 1 000 000 (unless the other arguments make the problem trivial).
*   **[ERR:INVALID DIM](errors#invaliddim)** is thrown if you try to generate a list of probabilities with at least 999 trials.

## Related Commands

*   <tt><a href="binompdf(.md">binompdf(</a></tt>
*   <tt><a href="geometpdf(.md">geometpdf(</a></tt>
*   <tt><a href="geometcdf(.md">geometcdf(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583, Myles_Zadok, Timothy Foster, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


