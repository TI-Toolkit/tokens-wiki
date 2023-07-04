| Property      | Value |
|---------------|-------|
| Hex Value     | `$23`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[List](<../categories/List.md>) > [Ops](<../categories/List.md#Ops>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `suite(`</li></ul> |

# `seq(`

## Description
Returns list created by evaluating `expression` with regard to `variable`, from `begin` to `end` by `increment.`


<b>Availability</b>: Token available everywhere.

## Syntax
`seq(expression,variable,begin,end[,increment])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td></td></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

<tr><td><b>begin</b></td><td></td><td></td></tr>

<tr><td><b>end</b></td><td></td><td></td></tr>

<tr><td>increment</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `5:seq(`
<hr>

The <tt>seq(</tt> command is very powerful, as it is (almost) the only command that can create a whole [list](/list) as output. This means that you will need make use of it almost every time that you use lists. The <tt>seq(</tt> command creates a list by evaluating a formula with one variable taking on a range of several values.

It is similar in this to the <tt><a href="/for">For(</a></tt> command, but unlike <tt>For(</tt>, instead of running a block of commands, it only evaluates a formula. Like the For( command, there is an optional "step" that you can use to get every 3rd, every 5th, etc. value in the range.

Some sample uses of the command:

```ti-basic
:seq(I,I,3,7
```

*   evaluates the expression 'I' with I taking on the values 3..7
*   returns {3,4,5,6,7}

```ti-basic
:seq(AX²,X,1,7
```

*   evaluates the expression <tt>AX²</tt> with X taking on the values 1..7
*   returns <tt>{A,4A,9A,16A,25A,36A,49A}</tt>, depending on the value of A

```ti-basic
:seq(Y1(T),T,1,9,2
```

*   evaluates the expression <tt>Y₁(T)</tt> with T taking on every 2nd value 1..9
*   returns <tt>{Y₁(1),Y₁(3),Y₁(5),Y₁(7),Y₁(9)}</tt> depending on Y₁

Note: the value of the variable used in the expression does not change. If X has some value stored to it, and you do a <tt>seq(</tt> command using X, X will still hold that original value. However, if X was undefined before the command, after the command, it will be defined and have a value of 0.

## Advanced Uses

The step argument supplied can be negative. If it is, and if the starting value is greater than the ending value, then the sequence will "go backward", evaluating the expression in the opposite order. For example:

```ti-basic
:seq(I,I,1,7
    {1,2,3,4,5,6,7}
:seq(I,I,7,1,-1
    {7,6,5,4,3,2,1}
```

You can use <tt>seq(</tt> to get a "sublist", that is, to get a list that is only a section of another list. This is pretty much the only effective way to extract a sublist. For example, to get the 2nd through 10th elements of L₁, do the following:

```ti-basic
:seq(L1(I),I,2,10
```

While using <tt>seq(</tt>, the calculator can still interpret keypresses and store them to <tt><a href="/getkey">getKey</a></tt>. One possible way you can use this feature is to make a [password](/protection#hash) function that asks the user to enter in the correct password before time expires.

## Optimizations

It's faster to do an operation on an entire list, than to do the same operation inside a seq( command. For example, take the following:

```ti-basic
:seq(Y1(T),T,1,9
can be
:Y1(seq(T,T,1,9
```

However, not all commands that work for numbers will work for lists. A notable example is getting an element from a list: L₁({1,2,3 will not return the first, second, and third elements of L₁, so you will have to put the L₁ inside the <tt>seq(</tt> command.

For this same reason, you shouldn't use a <tt>seq(</tt> command when you're really performing an operation on each element of a list. For example, if L₁ has 10 elements:

```ti-basic
:seq(L1(I)²,I,1,dim(L1
can be
:L1²
```

When generating a list of values incremented by a number i from i to a number N, <tt>seq(</tt> is not recommended as the amount of overhead on the command considerably slows the generation of the list.  
In cases where such a list is to be generated, it is beneficial to generate a list of a specific length, fill that list with the incrementer, and cumulatively sum each value in the list. For example, if a list of all the numbers between 1 and 500 were desired:

```ti-basic
:500→dim(L1
:Fill(1,L1
:cumSum(L1→L1
```

This operation can be sped up even more using <tt><a href="/binomcdf">binomcdf(</a></tt> or <tt><a href="/binompdf">binompdf(</a></tt>.

A <tt>seq(</tt> command can replace a <tt>For(</tt> command, if all you're doing inside the <tt>For(</tt> command is storing to an element of a list. This will improve on both speed and size of your program. For example:

```ti-basic
:For(I,1,10
:I²→L1(I
:End
can be
:seq(I²,I,1,10→L1
```

The <tt>seq(</tt> command itself can often be replaced with an unusual use of the <tt>binomcdf(</tt> or <tt>binompdf(</tt> commands, improving speed and sometimes size as well. However, this optimization is fairly advanced; read the pages for those commands to learn about it.

## Error Conditions

*   **[ERR:ILLEGAL NEST](/errors#illegalnest)** is thrown if you try to use seq( inside of another seq( command.
*   **[ERR:DATA TYPE](/errors#datatype)** occurs when any of the inputted arguments are imaginary or complex.
*   **[ERR:INVALID DIM](/errors#invaliddim)** occurs when the generated list has a dimension larger than 999.

## Related Commands

*   <tt><a href="/for">For(</a></tt>
*   <tt><a href="/binompdf">binompdf(</a></tt>
*   <tt><a href="/binomcdf">binomcdf(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


