| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB00`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [N](<../categories/Catalog.md#N>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `vactNet(`</li></ul> |

# `npv(`

## Description
Computes the sum of the present values for cash inflows and outflows.


<b>Availability</b>: Token available everywhere.

## Syntax
`npv(interest rate,CF0,CFList[,CFFreq])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>interest rate</b></td><td></td><td></td></tr>

<tr><td><b>CF0</b></td><td></td><td></td></tr>

<tr><td><b>CFList</b></td><td></td><td></td></tr>

<tr><td>CFFreq</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `7:npv(`
<hr>

The <tt>npv(</tt> command computes the net present value of money over a specified time period. If a positive value is returned after executing <tt>npv(</tt>, that means it was a positive cashflow; otherwise it was a negative cashflow. The <tt>npv(</tt> command takes four arguments, and the fourth one is optional:

*   **interest rate** — the percentage of the money that is paid for the use of that money over each individual period of time.
*   **CF0** — the initial amount of money that you start out with; this number must be a real number, otherwise you will get a [ERR:DATA TYPE](/errors#datatype) error.
*   **CFList** — the list of cash flows added or subtracted after the initial money.
*   **CFFreq** — the list of frequencies of each cash flow added after the initial money; if this is left off, each cash flow in the cash flow list will just appear once by default.

## Sample Problem

Your mom recently opened a bank account for you, with $500 as a gift to start you off. This is welcome news to you, until you find out that the bank charges 5% as the interest rate for the account. So, you get a job at Rocco's Pizzas delivering pizzas, which brings in $1,000-$2,000 each month. For the last five months, in particular, you have earned $1,250, $1,333, $1,575, $1,100, and $1,900. (Assume there are no other expenses, such as gas, car payment, etc.)

Plugging in all of the different values into the <tt>npv(</tt> command, this is what our code looks like:

```ti-basic
:npv(5,500,{1250,1333,1575,1100,1900
```

## Optimization

The <tt>npv(</tt> command's optional fourth argument should be left off if each cash flow of money in the list of cash flows just appears once.

```ti-basic
:npv(5,1550,{2E3,3E3,4E3},{1,1,1
can be
:npv(5,1550,{2E3,3E3,4E3
```

At the same time, if there are cash flows that occur multiple times, it can be smaller to just use the frequency argument:

```ti-basic
:npv(8,0,{200,200,300,300,300
can be
:npv(8,0,{200,300},{2,3
```

## Formulas

Without a frequency list, the formula for <tt>npv(</tt> is the following:

(1) $`\begin{align} \texttt{npv}(i,\texttt{CF}_0,\{\texttt{CF}_j\})=\sum_{j=0}^N{\texttt{CF}_j\left(1+\frac{i}{100}\right)^{-j}} \end{align}`$ 

When a frequency list is used, the same formula can be applied if we expand the list with frequencies into a long list without frequencies. However, it's possible to do the calculation directly. We define the cumulative frequency S<sub>j</sub> as the sum of the first j frequencies (S<sub>0</sub> is taken to be 0):

(2) $`\begin{align} \texttt{npv}(i,\texttt{CF}_0,\{\texttt{CF}_j\},\{n_j\}) =\texttt{CF}_0+\sum_{j=1}^N{\texttt{CF}_j\left(1+\frac{i}{100}\right)^{S_{j-1}}\frac{(1-(1+\frac{i}{100})^{-n_j})}{i}} \end{align}`$ 

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown if you try to use anything other than a real number for the interest rate.
*   **[ERR:DIM MISMATCH](/errors#dimmismatch)** is thrown if the list of cash flows and the list of cash flow frequencies have different dimensions.

## Related Commands

*   <tt><a href="/irr">irr(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


