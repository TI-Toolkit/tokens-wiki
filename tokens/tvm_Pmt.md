| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB20`|
| Categories    | <ul><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `tvm_Pmt`</li></ul> |

# `tvm_Pmt`

## Description
Computes the amount of each payment.

<b>Comment</b>:pre-CE french was vatPmt

<b>Availability</b>: Token available everywhere.

## Syntax
`tvm_Pmt[(𝗡,I%,PV,FV,P/Y,C/Y)]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>𝗡</td><td></td><td>Yes</td></tr>

<tr><td>I%</td><td></td><td>Yes</td></tr>

<tr><td>PV</td><td></td><td>Yes</td></tr>

<tr><td>FV</td><td></td><td>Yes</td></tr>

<tr><td>P/Y</td><td></td><td>Yes</td></tr>

<tr><td>C/Y</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `2:tvm_Pmt`
<hr>

The tvm__VAR_ commands use the TVM (Time Value of Money) solver to solve for the variable _VAR_. They're usually used in programs, since outside a program it's easier to use the interactive solver (the first option in the finance menu).

All five commands can be used by themselves, with no arguments. In that case, they will return the value of _VAR_ solved from the current values of the other finance variables.

If you give them arguments, the values you give will replace the values of the finance variables. You can supply as many or as few arguments as needed, and the finance variables will be replaced in the order: **N**, I%, PV, PMT, FV, P/Y, C/Y (skipping the one you're solving for).

## Error Conditions

*   **[ERR:ITERATIONS](/errors#iterations)** is thrown if the maximum amount of iterations was exceeded in computing I% (this usually means there is no solution)
*   **[ERR:NO SIGN CHG](/errors#nosignchg)** is thrown if calculating I% when FV, (N*PMT), and PV all have the same sign.

## Related Commands

*   [Pmt_End](/pmt-end)
*   [Pmt_Bgn](/pmt-bgn)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


