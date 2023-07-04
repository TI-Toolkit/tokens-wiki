| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB01`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `tauxRi(`</li></ul> |

# `irr(`

## Description
Returns the interest rate at which the net present value of the cash flow is equal to zero.


<b>Availability</b>: Token available everywhere.

## Syntax
`irr(CF0,CFList[,CFFreq])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>CF0</b></td><td></td><td></td></tr>

<tr><td><b>CFList</b></td><td></td><td></td></tr>

<tr><td>CFFreq</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `8:irr(`
<hr>

The <tt>irr(</tt> command finds the [Internal Rate of Return](http://en.wikipedia.org/wiki/Internal_rate_of_return) of an investment, which is a measure of its efficiency. Its mathematical interpretation is the interest rate for which <tt><a href="/npv">npv(</a></tt> will return 0 for the same cash flows.

<tt>irr(</tt> takes three arguments: an initial cash flow (CF0), a list of further cash flows (CFList), and an optional frequency list.

## Advanced Uses

<tt>irr(</tt> can be used to find a root of a polynomial of any degree, give by a list of its coefficients:

```ti-basic
1+.01irr(0,{list of coefficients})
```

  
However, this method is limited to finding roots greater than 0, and will throw an error ([ERR:NO SIGN CHG](/errors#nosignchg) or [ERR:DIVIDE BY 0](/errors#divideby0)) if it can't find such roots. By reversing the list of coefficients and taking the reciprocal of the roots found, you could find roots less than 0, but this would still result in errors if such roots don't exist either.

Using <tt><a href="/solve">solve(</a></tt> to find roots of polynomials is less efficient, but more reliable, since it doesn't throw an error unless there are no roots at all to be found.

## Formulas

Solving for <tt>irr(</tt> requires solving a polynomial with degree equal to the total number of cash flows. As such, there is no general formula for calculating <tt>irr(</tt>, though numerical methods are possible for finding an approximate solution.

The polynomial associated with the calculation is:

(1) $`\begin{align} \sum_{i=0}^{N}{C_i\left(1+\frac{\mathrm{Irr}}{100}\right)^{N-i}}=0 \end{align}`$ 

Here, Irr is the internal rate of return, N is the number of cash flows, and C<sub>t</sub> is the t <sup>th</sup> cash flow.

To the calculator, only roots for which Irr>0 are considered to be viable.

## Error Conditions

*   **[ERR:DIM MISMATCH](/errors#dimmismatch)** is thrown if the frequency list's size doesn't match the cash flow list's size.
*   **[ERR:DIVIDE BY 0](/errors#divideby0)** is thrown if the solution that is found is Irr=0.
*   **[ERR:NO SIGN CHG](/errors#nosignchg)** is thrown if no positive real solution is found.

## Related Commands

*   <tt><a href="/npv">npv(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


