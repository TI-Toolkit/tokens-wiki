| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB1F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Math](<../categories/Math.md>) > [Probability](<../categories/Math.md#Probability>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `normAléat(`</li></ul> |

# `randNorm(`

## Description
Generates and displays a random real number from a specified Normal distribution specified by μ and σ for a specified number of trials `numtrials`.


<b>Availability</b>: Token available everywhere.

## Syntax
`randNorm(μ,σ[,numtrials])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>μ</b></td><td></td><td></td></tr>

<tr><td><b>σ</b></td><td></td><td></td></tr>

<tr><td><b>numtrials</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `PRB`, `6:randNorm(`
<hr>

randNorm(_µ_,_σ_) generates a normally-distributed pseudorandom number with [mean](mean.md) _µ_ and [standard deviation](stddev) _σ_. The result returned will most probably be within the range _µ_±3_σ_. randNorm(_µ_,_σ_,_n_) generates a list of _n_ normally-distributed pseudorandom numbers with mean _µ_ and standard deviation _σ_.

_seed_→rand affects the output of randNorm(.

```ti-basic
0→rand
     0
randNorm(0,1)
     -1.585709623
randNorm(0,1,3)
     {-1.330473604 1.05074514 -.0368606663}
```

Although a theoretical normally distributed variable could take on any real value, numbers on a calculator have a limited precision, which leads to a maximum range of approximately _µ_±7.02_σ_ for values of randNorm(.

## Optimization

When the mean is 0 and the standard deviation 1, [invNorm(](invNorm\(.md)rand) and invNorm(rand(N)) save space over randNorm(0,1) and randNorm(0,1,N) respectively.

## Formulas

The value of randNorm( for a given seed can be expressed in terms of [rand](rand.md):

```ti-basic
randNorm(µ,σ)=µ-σinvNorm(rand
```

This is identical to the output of randNorm( in the sense that for the same seed, both expressions will generate the same random numbers.

The following formula can be used to get a target interval where A and B are two real intervals.

```ti-basic
µ=(A+B)/2
σ=(-A+B)/6
```

## Related Commands

*   [rand](rand.md)
*   [randInt(](randInt\(.md)
*   [randBin(](randBin\(.md)
*   [randM(](randM\(.md)
*   [randIntNoRep(](randIntNoRep\(.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


