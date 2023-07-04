| Property      | Value |
|---------------|-------|
| Hex Value     | `$B8`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [N](<../categories/Catalog.md#N>)</li><li>[Test](<../categories/Test.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `non(`</li></ul> |

# `not(`

## Description
Returns `0` if `value` is ≠ 0. `value` can be a real number, expression, or list.


<b>Availability</b>: Token available everywhere.

## Syntax
`not(value)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>test</kbd>, `LOGIC`, `4:not(`
<hr>

The last logical operator available on the 83 series takes only one value as input. **not(** comes with its own parentheses to make up for this loss. Quite simply, it negates the input: False becomes True (1) and True returns False (0). not( can be nested; one use is to make any True value into a 1.

```ti-basic
:not(0)
           1

:not(-20 and 14)

           0

:not(not(2))
           1
```

## Advanced Uses

not(not(X)) will make any value X into 1 if it's not 0, and will keep it 0 if it is.

## Optimization

not(X) and X=0 have the same truth value, but not( is shorter if the closing parenthesis is omitted:

```ti-basic
:If A=0
can be
:If not(A
```

## Related Commands

*   [and](and.md)
*   [or](or.md)
*   [xor](xor.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


