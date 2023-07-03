| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB12`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Statistics](<../categories/Statistics.md>) > [Distributions](<../categories/Statistics.md#Distributions>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `studentFRép(`</li></ul> |

# `tcdf(`

## Description
Computes the Student-`t` distribution probability between `lowerbound` and` upperbound` for the specified degrees of freedom` df`.


<b>Availability</b>: Token available everywhere.

## Syntax
`tcdf(lowerbound,upperbound,df)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>lowerbound</b></td><td></td><td></td></tr>

<tr><td><b>upperbound</b></td><td></td><td></td></tr>

<tr><td><b>df</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `6:tcdf(`
<hr>

tcdf( is the Student's _t_ cumulative density function. If some random variable follows this distribution, you can use this command to find the probability that this variable will fall in the interval you supply.

Unlike [normalcdf(](/normalcdf), this command only works for the standardized distribution with mean 0 and standard deviation 1. To use it for non-standardized values you will have to standardize them by calculating (X-μ)/σ (where μ is the mean and σ the standard deviation). Do this for both _lower_ and _upper_.

## Advanced

Often, you want to find a "tail probability" - a special case for which the interval has no lower or no upper bound (the form frequently used in one-tailed tests). For example, "what is the probability x is greater than 2?". The TI-83+ has no special symbol for infinity, but you can use E99 to get a very large number that will work equally well in this case ([E](/e-ten) is the decimal exponent obtained by pressing [2nd] [EE]). Use E99 for +∞, and -E99 for -∞.

Alternatively, you can exploit the identity

(1) $`\begin{align} \texttt{tcdf}(-\infty,0,\nu)=\frac1{2} \end{align}`$ 

(similarly for the interval from 0 to ∞)

and thus

(2) $`\begin{align} \texttt{tcdf}(-\infty,x,\nu)=\frac1{2}+\texttt{tcdf}(0,x,\nu) \end{align}`$ 

For the form used in two-tailed tests, the following identity may be useful:

(3) $`\begin{align} \texttt{tcdf}(-x,x,\nu)=2\texttt{tcdf}(0,x,\nu) \end{align}`$ 

## Formulas

As with any other continuous distribution, tcdf( can be defined in terms of the probability density function, [tpdf(](/tpdf):

(4) $`\begin{align} \texttt{tcdf}(a,b,\nu)=\int_a^b \texttt{tpdf}(t,\nu)\mathrm{d}t \end{align}`$ 

The function can also be expressed in terms of an [incomplete beta function](https://mathworld.wolfram.com/IncompleteBetaFunction.html).

For one degree of freedom (ν=1), tcdf( is expressible in terms of simpler functions:

(5) $`\begin{align} \texttt{tcdf}(a,b,1)=\frac1{\pi}\left(\tan^{-1}\left(b\right)-\tan^{-1}\left(a\right)\right) \end{align}`$ 

This is the so-called Cauchy distribution.

## Related Commands

*   [tpdf(](/tpdf)
*   [invT(](/invt)
*   [Shade_t(](/shade-t)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


