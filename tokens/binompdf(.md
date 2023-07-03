| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB15`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [B](<../categories/Catalog.md#B>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `binomfdp(`</li></ul> |

# `binompdf(`

## Description
Computes a probability at `x` for the discrete binomial distribution with the specified `numtrials` and probability `p` of success on each trial.


<b>Availability</b>: Token available everywhere.

## Syntax
`binompdf(numtrials,p[,x])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>numtrials</b></td><td></td><td>Yes</td></tr>

<tr><td><b>p</b></td><td></td><td>Yes</td></tr>

<tr><td>x</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `A:binompdf(`
<hr>

This command is used to calculate the binomial probability. In plainer language, it solves a specific type of often-encountered probability problem, that occurs under the following conditions:

1.  A specific event has only two outcomes, which we will call "success" and "failure"
2.  This event is going to repeat a specific number of times, or "trials"
3.  Success or failure is determined randomly with the same probability of success each time the event occurs
4.  We're interested in the probability that there are exactly N successes

For example, consider a couple that intends to have 4 children. What is the probability that 3 of them are girls?

1.  The event here is a child being born. It has two outcomes "boy" or "girl". We can call either one a success, but we'll choose to be sexist towards guys and call a girl a success in this problem
2.  The event is going to repeat 4 times, so we have 4 trials
3.  The probability of a girl being born is 50% or 1/2 each time
4.  We're interested in the probability that there are exactly 3 successes (3 girls)

The syntax here is `binompdf(`_trials_, _probability_, _value_). In this case:

```ti-basic
:binompdf(4,.5,3
```

  
This will give .25 when you run it, so there's a .25 (1/4) probability out of 4 children, 3 will be girls.

An alternate syntax for `binompdf(` leaves off the last argument, _value_. This tells the calculator to compute a list of the results for all values. For example:

```ti-basic
:binompdf(4,.5
```

This will come to {.0625 .25 .375 .25 .0625} when you run it. These are the probabilities of all 5 outcomes (0 through 4 girls) for 4 children with an equal probability of being born. There's a .0625 probability of no girls, a .25 probability of 1 girl, etc.

## Advanced (for programmers)

The `binompdf(` and [binomcdf(](/binomcdf) commands are the only ones apart from [seq(](/seq-list) that can return a list of a given length, and they do it much more quickly. It therefore makes sense, in some situations, to use these commands as substitutes for `seq(`.

Here's how to do it:

1.  `cumSum(``binomcdf(`N,0 gives the list {1 2 … N+1}, and `cumSum(``not(``binompdf(`N,0 gives the list {0 1 2 … N}.
2.  With `seq(`, you normally do math inside the list: for example, `seq(`3I<sup>2</sup>,I,0,5
3.  With these commands, you do the same math outside the list: 3`Ans`<sup>2</sup> where `Ans` is the list {0 1 … 5}.

An example:

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

If the lower bound on I in the `seq(` statement is 0 and not 1, you can use `binompdf(` instead:

```ti-basic
:seq(f(I),I,0,N
can be
:cumSum(not(binompdf(N,0
:f(Ans
which can sometimes be
:f(cumSum(not(binompdf(N,0
```

This will not work if some command inside `seq(` can take only a number and not a list as an argument. For example, seq(L<sub>1</sub>(I),I,1,5 cannot be optimized this way.

## Formulas

The value of `binompdf(` is given by the formula

(1) $`\begin{align} \operatorname{binompdf}(n,p,k) = \binom{n}{k}\,p^k\,(1-p)^{n-k} = \frac{n!}{k!\,(n-k)!}\,p^k\,(1-p)^{n-k} \end{align}`$ 

This formula is fairly intuitive. We want to know the probability that out of n trials, exactly k will be successes, so we take the probability of k successes - $p^k$ - multiplied by the probability of (n-k) failures - $(1-p)^{n-k}$ - multiplied by the number of ways to choose which k trials will be successes - $\binom{n}{k}$.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if the number of trials is at least 1 000 000 (unless the other arguments make the problem trivial).
*   **[ERR:INVALID DIM](/errors#invaliddim)** is thrown if you try to generate a list of probabilities with at least 999 trials.

## Related Commands

*   [binomcdf(](/binomcdf)
*   [geometpdf(](/geometpdf)
*   [geometcdf(](/geometcdf)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


