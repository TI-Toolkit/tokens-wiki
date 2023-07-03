| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB2B`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `longueur(`</li></ul> |

# `length(`

## Description
Returns the number of characters in `string`.


<b>Availability</b>: Token available everywhere.

## Syntax
`length(string)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>string</b></td><td>string</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `length(`
<hr>

This command is used to determine the length of a string. Unlike the [dim(](/dim) command for lists and matrices, it cannot be used to change this length, as there is no null character for strings (the null value is 0 for lists and matrices).

```ti-basic
:length("HELLO
    5
```

Keep in mind that the length is measured in the number of tokens, and not the number of letters in the string. For example, although the sin( command contains 4 characters ("s", "i", "n", and "("), it will only add 1 to the total length of a string it's in. The execution time for length( is directly proportional to the length of the string.

## Advanced Uses

The code for looping over each character (technically, each token) of a string involves length(:

```ti-basic
:For(N,1,length(Str1
...
use sub(Str1,N,1 for the Nth character
...
:End
```

## Related Commands

*   [expr(](/expr)
*   [inString(](/instring)
*   [sub(](/sub)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


