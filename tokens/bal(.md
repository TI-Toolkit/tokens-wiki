| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB02`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [B](<../categories/Catalog.md#B>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `paSolde(`</li></ul> |

# `bal(`

## Description
Computes the balance at `npmt `for an amortization schedule using stored values for `PV`, I%, and `PMT` and rounds the computation to `roundvalue.`


<b>Availability</b>: Token available everywhere.

## Syntax
`bal(npmt[,roundvalue])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>npmt</b></td><td></td><td></td></tr>

<tr><td>roundvalue</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `9:bal(`
<hr>

The `bal(` command calculates the remaining balance after _n_ payments in an [amortization schedule](http://en.wikipedia.org/wiki/Amortization_schedule). It has only one required argument: _n_, the payment number. However, it also uses the values of the finance variables PV, PMT, and I% in its calculations.

The optional argument, _roundvalue_, is the number of digits to which the calculator will round all internal calculations. Since this rounding affects further steps, this isn't the same as using [round(](/round) to round the result of `bal(` to the same number of digits.

Usually, you will know the values of **N**, PV, and I%, but not PMT. This means you'll have to use the finance solver to solve for PMT before calculating `bal()`; virtually always, FV will equal 0.

## Sample Problem

_Imagine that you have taken out a 30-year fixed-rate mortgage. The loan amount is $100000, and the annual interest rate (APR) is 8%. Payments will be made monthly. After 15 years, what amount is still left to pay?_

We know the values of **N**, I%, and PV, though we still need to convert them to monthly values (since payments are made monthly). **N** is 30*12, and I% is 8/12. PV is just 100000.

Now, we use the finance solver to solve for PMT. Since you intend to pay out the entire loan, FV is 0. Using either the interactive TVM solver, or the [tvm_Pmt](/tvm) command, we get a value of about -$733.76 for PMT.

We are ready to use `bal(`. We are interested in the payment made after 15 years; this is the 15*12=180<sup>th</sup> payment. `bal(180)` gives us the result $76781.55 — as you can see, most of the loan amount is still left to pay after 15 years.

## Formulas

The calculator uses a recursive formula to calculate `bal()`:

(1) $`\begin{align} \operatorname{bal}(0)=\operatorname{PV} \end{align}`$ (2) $`\begin{align} \operatorname{bal}(m)=\left(1-\frac{I\%}{100}\right)\operatorname{bal}(m-1)+\operatorname{PMT} \end{align}`$ 

In the case that _roundvalue_ is given as an argument, the rounding is done at each step of the recurrence (which virtually forces us to use this formula). Otherwise, if no rounding is done (and assuming I% is not 0), we can solve the recurrence relation to get:

(3) $`\begin{align} \operatorname{bal}(m)=\frac{1-\left(1-\frac{I\%}{100}\right)^m}{\frac{I\%}{100}}\operatorname{PMT}+\left(1-\frac{I\%}{100}\right)^m\operatorname{PV} \end{align}`$ 

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if the payment number is negative or a decimal.

## Related Commands

*   [ΣPrn(](/sigmaprn)
*   [ΣInt(](/sigmaint)
*   [tvm_Pmt](/tvm)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


