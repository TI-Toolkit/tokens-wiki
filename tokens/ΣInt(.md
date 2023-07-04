| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB04`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ΣInt(`</li></ul> |

# `ΣInt(`

## Description
Computes the sum, rounded to `roundvalue`, of the interest amount between `pmt1` and `pmt2` for an amortization schedule.


<b>Availability</b>: Token available everywhere.

## Syntax
`ΣInt(pmt1,pmt2[,roundvalue])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>Σ</b></td><td></td><td></td></tr>

<tr><td><b>pmt1</b></td><td></td><td></td></tr>

<tr><td>pmt2</td><td></td><td>Yes</td></tr>

<tr><td>roundvalue</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `A:Int(`
<hr>

The <tt>ΣInt(</tt> command calculates, for an [amortization schedule](http://en.wikipedia.org/wiki/Amortization_schedule), the interest over a range of payments: the portion of those payments that went toward paying interest. Its two required arguments are _payment1_ and _payment2_, which define the range of payments we're interested in. However, it also uses the values of the finance variables <tt>PV</tt>, <tt>PMT</tt>, and <tt>I%</tt> in its calculations.

The optional argument, _roundvalue_, is the number of digits to which the calculator will round all internal calculations. Since this rounding affects further steps, this isn't the same as using <tt><a href="/round">round(</a></tt> to round the result of <tt>ΣInt(</tt> to the same number of digits.

Usually, you will know the values of **N**, <tt>PV</tt>, and <tt>I%</tt>, but not <tt>PMT</tt>. This means you'll have to use the finance solver to solve for <tt>PMT</tt> before calculating <tt>ΣInt(</tt>; virtually always, <tt>FV</tt> will equal 0.

## Sample Problem

_Imagine that you have taken out a 30-year fixed-rate mortgage. The loan amount is $100000, and the annual interest rate (APR) is 8%. Payments will be made monthly. How much of the amount that was paid in the first five years went towards interest?_

We know the values of **N**, <tt>I%</tt>, and <tt>PV</tt>, though we still need to convert them to monthly values (since payments are made monthly). **N** is 30*12, and <tt>I%</tt> is 8/12. <tt>PV</tt> is just 100000.

Now, we use the finance solver to solve for <tt>PMT</tt>. Since you intend to pay out the entire loan, <tt>FV</tt> is 0. Using either the interactive TVM solver, or the <tt><a href="/tvm">tvm_Pmt</a></tt> command, we get a value of about -$733.76 for <tt>PMT</tt>.

We are ready to use <tt>ΣInt(</tt>. We are interested in the payments made during the first five years; that is, between the 1<sup>st</sup> payment and the 5*12=60<sup>th</sup> payment. <tt>ΣInt(1,60)</tt> gives us the answer: -$39095.73 (the negative sign simply indicates the direction of cash flow)

## Formulas

<tt>ΣInt(</tt> is calculated in terms of <tt><a href="/sigmaprn">ΣPrn(</a></tt>, for which a recurrence exists. Since the total amount paid during an interval is known (it's the payment size, multiplied by the number of payments), we can subtract <tt>ΣPrn(</tt> from this total to get <tt>ΣInt(</tt>:

(1) $`\begin{align} \texttt{\Sigma Int}(n_1,n_2)=(n_2-n_1+1)\texttt{PMT}-\texttt{\Sigma Prn}(n_1,n_2) \end{align}`$ 

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if either payment number is negative or a decimal.

## Related Commands

*   <tt><a href="/bal">bal(</a></tt>
*   <tt><a href="/sigmaprn">ΣPrn(</a></tt>
*   <tt><a href="/tvm">tvm_Pmt</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


