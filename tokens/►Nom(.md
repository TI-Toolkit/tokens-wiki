| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB05`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [N](<../categories/Catalog.md#N>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `►Nom(`</li></ul> |

# `►Nom(`

## Description
Computes the nominal interest rate.


<b>Availability</b>: Token available everywhere.

## Syntax
`►Nom(effective rate,compounding periods)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>effective rate</b></td><td></td><td>Yes</td></tr>

<tr><td><b>compounding periods</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `B:►Nom(`
<hr>

The ►Nom( command converts from an effective interest rate to a nominal interest rate. In other words, it converts an interest rate that takes compounding periods into account into one that doesn't. The two arguments are 1) the interest rate and 2) the number of compounding periods.

For example, you want to know the interest rate, compounded monthly, that will yield a total increase of 10% per year:

```ti-basic
►Nom(10,12)
    9.568968515
```

## Formulas

The formula for converting from an effective rate to a nominal rate is:

(1) $`\begin{align} \operatorname{Nom}=100 \operatorname{CP} \left(\sqrt[\operatorname{CP}]{\frac{\operatorname{Eff}}{100}+1}-1\right) \end{align}`$ 

Here, Eff is the effective rate, Nom is the nominal rate, and CP is the number of compounding periods.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if the number of compounding periods is not positive, or if the nominal rate is -100% or lower (an exception's made for the nominal rate if there is only one compounding period, since ►Nom(X,1)=X).

## Related Commands

*   [►Eff(](/eff)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


