| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB03`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `paSomPrinc(`</li></ul> |

# `ΣPrn(`

## Description
Computes the sum, rounded to `roundvalue`, of the principal amount between `pmt1` and `pmt2` for an amortization schedule.


<b>Availability</b>: Token available everywhere.

## Syntax
`ΣPrn(pmt1,pmt2[,roundvalue])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>Σ</b></td><td></td><td></td></tr>

<tr><td><b>pmt1</b></td><td></td><td></td></tr>

<tr><td>pmt2</td><td></td><td>Yes</td></tr>

<tr><td>roundvalue</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `0:Prn(`
<hr>

The `ΣPrn(` command calculates, for an [amortization schedule](http://en.wikipedia.org/wiki/Amortization_schedule), the principal amount over a range of payments: the portion of those payments that went toward paying off the principal. Its two required arguments are _payment1_ and _payment2_, which define the range of payments we're interested in. However, it also uses the values of the finance variables PV, PMT, and I% in its calculations.

The optional argument, _roundvalue_, is the number of digits to which the calculator will round all internal calculations. Since this rounding affects further steps, this isn't the same as using [round(](/round) to round the result of `ΣPrn(` to the same number of digits.

Usually, you will know the values of **N**, `PV`, and `I%`, but not `PMT`. This means you'll have to use the finance solver to solve for `PMT` before calculating `ΣPrn(`; virtually always, `FV` will equal 0.

## Sample Problem

_Imagine that you have taken out a 30-year fixed-rate mortgage. The loan amount is $100000, and the annual interest rate (APR) is 8%. Payments will be made monthly. How much of the principal amount was paid in the first five years?_

We know the values of **N**, `I%`, and `PV`, though we still need to convert them to monthly values (since payments are made monthly). **N** is 30*12, and `I%` is 8/12. `PV` is just 100000.

Now, we use the finance solver to solve for `PMT`. Since you intend to pay out the entire loan, `FV` is 0. Using either the interactive TVM solver, or the [tvm_Pmt](/tvm) command, we get a value of about -$733.76 for `PMT`.

We are ready to use `ΣPrn(`. We are interested in the payments made during the first five years; that is, between the 1<sup>st</sup> payment and the 5*12=60<sup>th</sup> payment. `ΣPrn(1,60)` gives us the answer: -$4930.14 (the negative sign simply indicates the direction of cash flow)

## Formulas

The formula that the calculator uses for `ΣPrn(` is in terms of [bal(](/bal):

(1) $`\begin{align} \operatorname{\Sigma Prn}(n_1,n_2)=\operatorname{bal}(n_2)-\operatorname{bal}(n_1) \end{align}`$ 

When the _roundvalue_ argument isn't given, we can substitute the explicit formula for `bal(` and simplify to get the following formula:

(2) $`\begin{align} \operatorname{\Sigma Prn}(n_1,n_2)=\left(\operatorname{PV}-\frac{\operatorname{PMT}}{I\%/100}\right)\left[\left(1-\frac{I\%}{100}\right)^{n_1}-\left(1-\frac{I\%}{100}\right)^{n_2}\right] \end{align}`$ 

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if either payment number is negative or a decimal.

## Related Commands

*   [bal(](/bal)
*   [ΣInt(](/sigmaint)
*   [tvm_Pmt](/tvm)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


