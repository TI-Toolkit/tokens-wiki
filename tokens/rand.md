| Property      | Value |
|---------------|-------|
| Hex Value     | `$AB`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Math](<../categories/Math.md>) > [Probability](<../categories/Math.md#Probability>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `NbrAléat`</li></ul> |

# `rand`

## Description
Returns a random number between 0 and 1 for a specified number of trials `numtrials`.


<b>Availability</b>: Token available everywhere.

## Syntax
`rand[(numtrials)]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>numtrials</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `PRB`, `1:rand`
<hr>

rand generates a uniformly-distributed pseudorandom number (this page and others will sometimes drop the pseudo- prefix for simplicity) between 0 and 1. rand(_n_) generates a list of _n_ uniformly-distributed pseudorandom numbers between 0 and 1. _seed_→rand seeds (initializes) the built-in pseudorandom number generator. The factory default seed is 0.

[L'Ecuyer's algorithm](http://webhome.csc.uvic.ca/~wkui/Courses/CSC446/CLCG.pdf) is used by TI calculators to generate pseudorandom numbers.

```ti-basic
0→rand
     0
rand
     .9435974025
rand(2)
     {.908318861 .1466878292}
```

**Note:** Due to specifics of the random number generating algorithm, the smallest number possible to generate is slightly greater than 0. The largest number possible _is_ actually 1, but since returning a result of 1 would mess up the output of [randBin(](/randbin) and [randNorm(](/randnorm), the actual value returned in such cases is 1-1.11e-12 (which is displayed as 1, and is "equal" to 1 for the purposes of the [=](/equal) command). To see 1, store 196164532 to rand and then run the random number generator. If you instead try to store the “random” value directly to a list element, the value as viewed inside of the list editor will be 1-1.11e-12, displayed as 0.99999999999889.

## Advanced Uses

To seed the random number generator, store a positive integer to rand (the command will ignore any decimals, and the sign of the number). Seeding the random number generator has several uses:

When writing a program that uses random numbers, you may add a 0→rand instruction to the beginning of the program — this ensures that the program's actions will be repeatable, making it easier to fix a bug. Just don't forget to take it out when you've finished writing the program.

Seeding the random number generator can also be used to create fairly secure (unbreakable without a computer) encryption. Pick a secret key, and store it to rand as a seed. Then, perform some randomly generated manipulations on the data you want to encode — for example, shifting each character of a string by a random number. Decoding the message is simple: store the secret key to rand and perform the opposite of those random operations. However, this is impossible to do if you don't know the secret key.

* * *

When seeding the random number generator, as above, you make every random number generated afterwards predictable. This may be problematic even if your program doesn't need random numbers, because other programs might. To prevent this, use the following code to save and restore "randomness":

:randInt(1,E9)→N

(code that involves seeding the RNG here)

:N→rand

* * *

Since generating random numbers is a fairly time-consuming operation, the rand(_# of numbers_) syntax is very effective at generating a delay in your program — just add the line:

```ti-basic
:rand(N)
```

  
The bigger N is, the longer the delay. In relation to the commonly used [For(](/for) loop delay, the number used in the rand( delay is about 10 times smaller. However, this code has a side effect of storing a list of random numbers to [Ans](/ans), which may be undesirable. To avoid this, use this somewhat longer line:

```ti-basic
:If dim(rand(N))
```

  
Despite the presence of an [If](/if) statement, you don't have to worry about the next line being skipped, since dim(rand(N)) will always be true.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** if you try to generate a list of random numbers and the list length isn't an integer 1-999.

## Related Commands

*   [randInt(](/randint)
*   [randBin(](/randbin)
*   [randNorm(](/randnorm)
*   [randM(](/randm)
*   [randIntNoRep(](/randintnorep)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


