| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF35`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `randIntNoRep(`</li></ul> |

# `randIntNoRep(`

## Description
Returns a random ordered list of integers from a lower integer to an upper integer which may include the lower integer and upper integer. If the optional argument `numelements` is specified, the first `numelements` are listed. The first `numelements` term in the list of random integers are displayed.


<b>Availability</b>: Token available everywhere.

## Syntax
`randIntNoRep(lowerint,upperint [,numelements])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>lowerint</b></td><td></td><td>Yes</td></tr>

<tr><td><b>upperint</b></td><td></td><td>Yes</td></tr>

<tr><td>numelements</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `PRB`, `8:randIntNoRep(`
<hr>

randIntNoRep( is used when you need to create a list of numbers in random order in which no integer is repeated. This command is useful for things such as simulating decks of cards. Commonly, before this command was introduced, the following code would shuffle a deck:

```ti-basic
rand(52→L₂
seq(X,X,0,51→L₁
SortA(L₂,L₁
```

  
This result can now be achieved with the following code:

```ti-basic
randIntNoRep(0,51→L₁
```

## Advanced Uses

_seed_→rand affects the output of randIntNoRep(

What this does is quite simple. When you seed rand, then the next time you use randIntNoRep(, you will get a result that will be fairly random, but the same on all calculators. This allows several things to be possible, including password protection and encryption. For example, if you were to use the following code, you could encrypt and decrypt messages only if you use the same encryption value. In this example, Str1 contains the message:

Decode:

```ti-basic
"ABCDEFGHIJKLMNOPQRSTUVWXYZ .!,0123456789→Str2
Input "CODE:",A
A→rand
randIntNoRep(1,length(Str2→L1
length(Str1→B
".
For(A,1,B
Ans+sub(Str2,sum(cumSum(L1=inString(Str2,sub(Str1,A,1)))),1
End
sub(Ans,2,B
```

  
Encode:

```ti-basic
"ABCDEFGHIJKLMNOPQRSTUVWXYZ .!,0123456789→Str2
Input "CODE:",A
A→rand
length(Str2→C
randIntNoRep(1,Ans→L1
length(Str1→B
".
For(A,1,B
Ans+sub(Str2,L1(C+1-inString(Str2,sub(Str1,A,1))),1
End
sub(Ans,2,B
```

  
The output strings are in Ans

## Related Commands

*   [rand](/rand)
*   [randBin(](/randbin)
*   [randNorm(](/randnorm)
*   [randM(](/randm)
*   [randInt(](/randint)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 2.53 | Added |


