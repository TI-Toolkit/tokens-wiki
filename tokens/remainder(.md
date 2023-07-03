| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF32`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `remainder(`</li></ul> |

# `remainder(`

## Description
Reports the remainder as a whole number from a division of two whole numbers where the divisor is not zero.


<b>Availability</b>: Token available everywhere.

## Syntax
`remainder(dividend, divisor)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>dividend</b></td><td></td><td></td></tr>

<tr><td><b>divisor</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `0:remainder(`
<hr>

## Description
Reports the remainder as a whole number from a division of two lists where the divisor is not zero.


<b>Availability</b>: Token available everywhere.

## Syntax
`remainder(list, divisor)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

<tr><td><b>divisor</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `0:remainder(`
<hr>

## Description
Reports the remainder as a whole number from a division of two whole numbers where the divisor is a list.


<b>Availability</b>: Token available everywhere.

## Syntax
`remainder(dividend, list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>dividend</b></td><td></td><td></td></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `0:remainder(`
<hr>

## Description
Reports the remainder as a whole number from a division of two lists.


<b>Availability</b>: Token available everywhere.

## Syntax
`remainder(list, list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `0:remainder(`
<hr>

The `remainder(` function divides the first number given by the second number, and returns the remainder similar to the modulus. This command is only available if you have the TI-84+/SE and the new 2.53 MP operating system on your calculator. This command can be used both on the Home screen and when programming.

See the code segment below for an example:

```ti-basic
remainder(30,7)
               2
```

This returns a value of 2 because 30 divided by 7 has a remainder of 2.

The first input must be an integer in the range 0 to 10<sup>12</sup> and the second must be an integer in the range 1 to 10<sup>12</sup> (since division by zero is not allowed).

## Compatibility

As said earlier, this command only works on a TI-84+ Silver Edition with the 2.53 MP OS, so this will not work on earlier OSes. To avoid non-portability, use the following code.

```ti-basic
BfPart(A/B

instead of

remainder(A,B
```

  
[fPart(](/fpart) is a command that works in more OSes and more models. They also are the same size (5 bytes), as long as B is one byte.

There is one difference: `remainder(` is guaranteed to return the correct answer for inputs in its accepted domain, and if you enter numbers that are too large, it will throw an error. The method with `fPart(`, on the other hand, will work for numbers of any size that does not actually cause an overflow - but when the numbers get too large, it will give the wrong answer. Compare:

```ti-basic
remainder(18!,19
           Error
19fPart(18!/19
               0
```

  
Here, the `remainder(` command fails because the input is out of range.. The `fPart(` method returns an answer, but it is wrong: 18! is not divisible by 19, because 18! is the product of the integers 1 through 18, and none of them are divisible by the prime number 19. When using `fPart(` as a substitute for `remainder(`, make sure that the inputs are within the proper range.

## Error Conditions

*   **[ERR:DIVIDE BY 0](/errors#divideby0)** occurs if the divisor is zero.
*   **[ERR:DOMAIN](/errors#domain)** occurs if the divisor or dividend is out of range: only integers between 0 and 1E12 are allowed.
*   **[ERR:SYNTAX](/errors#syntax)** occurs if the divisor or dividend is a symbol, or character or non-real number
*   **[ERR:DATA TYPE](/errors#datatype)** occurs if the divisor or dividend is not a number, (i.e. text)

## Related Commands

*   [/](/divide)
*   [n/d](/n-d)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 2.53 | Added |


