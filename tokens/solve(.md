| Property      | Value |
|---------------|-------|
| Hex Value     | `$22`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `résoudre(`</li></ul> |

# `solve(`

## Description
Solves `expression` for `variable`, given an initial `guess` and `lower` and `upper` bounds within which the solution is sought.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`solve(expression,variable,guess,{lower,upper})`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td></td></tr>

<tr><td><b>variable</b></td><td></td><td></td></tr>

<tr><td><b>guess</b></td><td></td><td></td></tr>

<tr><td><b>lower</b></td><td></td><td></td></tr>

<tr><td><b>upper</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `MATH`, `0:solve(`
<hr>

The solve( command attempts to iteratively find a real root of a given equation, given the variable to solve for, and an initial guess; i.e., given _f_(_x_), solve( will attempt to find a value of _x_ such that _f_(_x_)=0. solve( can take a list {_lower_,_upper_} as an optional fourth argument, in which case it attempts to find a root between _lower_ and _upper_ inclusive (by default, _lower_ and _upper_ are taken to be -E99 and E99 respectively). [Brent's method](https://mathworld.wolfram.com/BrentsMethod.html) is used for finding the root.

Unfortunately, the solve( command (as with most iterative methods) is not perfect at solving equations. solve( will in general be unable to find "multiple roots", or can only find it to an accuracy less than the usual (an example would be the root _x_=1 of the equation (_x_-1)^_n_=0 for _n_ greater than 1). solve( will only return one of many possible roots to your equation if your equation has many roots to begin with. The root returned, in general, depends on the value of the guess given. The root returned is usually the root closest to the guess given for well-behaved equations; bad choices of the guess can cause solve( to either return a faraway root or not converge at all to a root.

If possible, the equation should first be solved by hand - if there is a relatively simple formula for the root, that will (usually) be more efficient than using solve(. Otherwise, ensure that the solve( call actually works in all the expected cases during use.

The Solver… utility (located in the same menu in the same place) is usually much easier and more intuitive to use, and is recommended instead of directly using solve( whenever applicable (e.g. the home screen). The same limitations apply to its efficiency. If you are unable to find roots using the Solver, try graphing the function and scanning for roots manually, then using 2:zero in the 2nd:CALC menu to refine your guess.

**Note**: Solver… changes the value of the variable being solved for to the root found; solve(, on the other hand, finds the root, but does not modify the original value of the variable.

## Advanced Uses

Reformulating an equation may be useful in certain instances. For example, the equations f(x)=0 and _e_<sup><em>f</em>(<em>x</em>)</sup>=1 are equivalent. solve((X+1)<sup>2</sup>,X,0 returns ERR:NO SIGN CHG, while solve(_e_^((X+1)<sup>2</sup>)-1,X,0 returns -1.000000616 (pretty close to the root -1). Rearranging the equation may sometimes help as well.

Specifying bounds usually helps solve( to find roots more efficiently. If bounds are readily available, they should be supplied to solve(.

The error condition Bad Guess will occur if you use a string for the equation. There is a way around though. If you store the string into a function and use the function in place of the equation it will work.

```ti-basic
Str1 → Y1
solve(Y1,X,0
```

## Error Conditions

*   **[ERR:BAD GUESS](errors#badguess)** will be thrown if guess wasn't within the lower and upper bound, or else the function is undefined at that point, or if a string is used for an equation.

## Related Commands

*   [fMax(](fMax\(.md)
*   [fMin(](fMin\(.md)
*   [fnInt(](fnInt\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, iPhoenixOnTIBD, Silver Phantom, thornahawk, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


