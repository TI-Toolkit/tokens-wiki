| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB0B`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Math](<../categories/Math.md>) > [Probability](<../categories/Math.md#Probability>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `BinAléat(`</li></ul> |

# `randBin(`

## Description
Generates and displays a random real number from a specified Binomial distribution.


<b>Availability</b>: Token available everywhere.

## Syntax
`randBin(numtrials,prob[,numsimulations])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>numtrials</b></td><td></td><td></td></tr>

<tr><td><b>prob</b></td><td></td><td></td></tr>

<tr><td>numsimulations</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `PRB`, `7:randBin(`
<hr>

randBin(_n_,_p_) generates a pseudorandom integer between 0 and _n_ inclusive according to the binomial distribution B(_n_,_p_) - that is, _n_ trials of an event with probability of success _p_ are performed, and the number of successes is returned. randBin(_n_,_p_,_simulations_) performs the above calculation _simulations_ times, and returns a list of the results. The expected (average) result is _n_*_p_.

_n_ should be an integer greater than or equal to 1, while _p_ should be a real number between 0 and 1 inclusive.

_seed_→rand affects the output of randBin(

```ti-basic
0→rand
     0
randBin(5,1/2
     2
randBin(5,1/2,10
     {3 3 2 4 3 2 2 2 4 3}
```

## Formulas

The value of randBin( for a given seed can be expressed in terms of [rand](rand.md):

```ti-basic
randBin(N,P)=sum(P>rand(N
```

This is identical to the output of randBin( in the sense that for the same seed, both expressions will generate the same random numbers.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is triggered if the probability is not on the interval from 0 to 1.

## Related Commands

*   [rand](rand.md)
*   [randInt(](randInt\(.md)
*   [randNorm(](randNorm\(.md)
*   [randM(](randM\(.md)
*   [randIntNoRep(](randIntNoRep\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, MrTanookiMario, nap386, Timothy Foster, Xeda Elnara.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


