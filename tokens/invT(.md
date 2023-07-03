| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF13`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `invT(`</li></ul> |

# `invT(`

## Description
Computes the inverse cumulative student-t probability function specified by degree of freedom, df for a given area under the curve.


<b>Availability</b>: Token available everywhere.

## Syntax
`invT(area,df)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>area</b></td><td></td><td>Yes</td></tr>

<tr><td><b>df</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>distr</kbd>, `DISTR`, `4:invT(`
<hr>

`invT(` is the inverse of the cumulative Student t distribution function: given a probability _p_ and a specified degrees of freedom _v_, it will return the number _x_ such that `tcdf(E-99,` is equal to _p_

```ti-basic
:invT(.95,24
    1.710882023
```

## Advanced

`invT(` is meant for use with so-called "one-tailed' tests; for two-tailed tests, the proper expression to use (corresponding to the inverse of `tcdf(-`) is `invT(.5(1+`

## Formulas

Unlike the [tpdf(](/tpdf) and [tcdf(](/tcdf) commands, the invT( command does not have a closed-form formula. However, it can be expressed in terms of the inverse incomplete beta function.

For one degree of freedom, `invT(` is expressible in terms of simpler functions:

(1) $`\begin{align} \operatorname{invT}(p,1)=\tan\left(\pi\left(p-\frac1{2}\right)\right) \end{align}`$ 

## Related Commands

*   [tpdf(](/tpdf)
*   [tcdf(](/tcdf)
*   [Shade_t(](/shade-t)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 2.30 | Added |


