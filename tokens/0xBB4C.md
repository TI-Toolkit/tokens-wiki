| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB4C`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Pmt_Déb`</li></ul> |

# `Pmt_Bgn`

## Overview
Specifies an annuity due, where payments occur at the beginning of each payment period.


<b>Availability</b>: Token available everywhere.

## Syntax
`Pmt_Bgn`

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `F:Pmt_Bgn`
<hr>

## Description

The Pmt_Bgn and [Pmt_End](pmt-end) commands toggle a setting with the finance solver. In Pmt_Bgn mode, the calculator assumes that the payments are made at the beginning of each time period, rather than at the end.

Make sure to set the calculator to one of the modes before using the finance solving commands in a program, since otherwise the result is unpredictable.

## Related Commands

*   [Pmt_End](Pmt_End.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


