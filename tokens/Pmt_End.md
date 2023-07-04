| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB4B`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Pmt_Fin`</li></ul> |

# `Pmt_End`

## Description
Specifies an ordinary annuity, where payments occur at the end of each payment period.


<b>Availability</b>: Token available everywhere.

## Syntax
`Pmt_End`

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `E:Pmt_End`
<hr>

The Pmt_End and [Pmt_Bgn](pmt-bgn) commands toggle a setting with the finance solver. In Pmt_End mode, the calculator assumes that the payments are made at the end of each time period, rather than at the beginning.

Make sure to set the calculator to one of the modes before using the finance solving commands in a program, since otherwise the result is unpredictable.

## Related Commands

*   [Pmt_Bgn](Pmt_Bgn.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


