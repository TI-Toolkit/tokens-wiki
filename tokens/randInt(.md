| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB0A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Math](<../categories/Math.md>) > [Probability](<../categories/Math.md#Probability>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `entAléat(`</li></ul> |

# `randInt(`

## Description
Generates and displays a random integer within a range specified by `lower` and `upper` integer bounds for a specified number of trials `numtrials`.


<b>Availability</b>: Token available everywhere.

## Syntax
`randInt( lower,upper [,numtrials])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>lower</b></td><td></td><td></td></tr>

<tr><td><b>upper</b></td><td></td><td></td></tr>

<tr><td>numtrials</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `PRB`, `5:randInt(`
<hr>

randInt(_min_,_max_) generates a uniformly-distributed pseudorandom integer between _min_ and _max_ inclusive. randInt(_min_,_max_,_n_) generates a list of _n_ uniformly-distributed pseudorandom integers between _min_ and _max_.

_seed_→rand affects the output of randInt(.

```ti-basic
0→rand
     0
randInt(1,10)
     10
randInt(1,10,5)
     {10 2 6 5 8}
```

## Optimization

When the lower bound of randInt( is 0, you can replace it with int(#rand to save space. For example:

```ti-basic
:randInt(0,12
can be
:int(13rand
```

Similarly, if you don't want to include zero in the range, you can use a variant of 1-#int(#rand:

```ti-basic
:1-2int(2rand
```

In this particular example, the only values that you will ever get are -1 or 1.

## Formulas

The value of randInt( for a given seed can be expressed in terms of [rand](rand.md):

randInt(A,B)=

*   when A<B, A+int((B-A+1)rand
*   otherwise, B+int((A-B+1)rand

This is identical to the output of randInt( in the sense that for the same seed, both expressions will generate the same random numbers.

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown if any of the arguments is a decimal.
*   **[ERR: DATA TYPE](errors#datatype)** is given if you use imaginary numbers like 6i or something like Matrices or Lists. This error is used instead of ERR:DOMAIN for "i".

## Related Commands

*   [rand](rand.md)
*   [randBin(](randBin\(.md)
*   [randNorm(](randNorm\(.md)
*   [randM(](randM\(.md)
*   [randIntNoRep(](randIntNoRep\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, nap386, Xeda Elnara.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


