| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB06`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [E](<../categories/Catalog.md#E>)</li><li>[Finance](<../categories/Finance.md>) > [Calc](<../categories/Finance.md#Calc>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `►Eff(`</li></ul> |

# `►Eff(`

## Description
Computes the effective interest rate.


<b>Availability</b>: Token available everywhere.

## Syntax
`►Eff(nominal rate,compounding periods)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>nominal rate</b></td><td></td><td></td></tr>

<tr><td><b>compounding periods</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>apps</b></kbd></tt>, `1:Finance`, `CALC`, `C:►Eff(`
<hr>

The <tt>►Eff(</tt> command converts from a nominal interest rate to an effective interest rate. In other words, it converts an interest rate that does not take into account compounding periods into one that does. The two arguments are 1) the interest rate and 2) the number of compounding periods.

For example, take an interest rate of 7.5% per year, compounded monthly. You can use <tt>►Eff(</tt> to find out the actual percent of interest per year:

```ti-basic
►Eff(7.5,12)
    7.663259886
```

## Formulas

The formula for converting from a nominal rate to an effective rate is:

(1) $`\begin{align} \texttt{Eff}=100\left(\left(1+\frac{\texttt{Nom}}{100 \texttt{CP}}\right)^{\texttt{CP}}-1\right) \end{align}`$ 

Here, Eff is the effective rate, Nom is the nominal rate, and CP is the number of compounding periods.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if the number of compounding periods is not positive, or if the nominal rate is -100% or lower (an exception's made for the nominal rate if there is only one compounding period, since <tt>►Eff(</tt>X,1<tt>)</tt>=X)

## Related Commands

*   <tt><a href="/nom">►Nom(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


