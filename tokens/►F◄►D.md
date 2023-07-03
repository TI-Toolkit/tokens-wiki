| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF31`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `►F◄►D`</li></ul> |

# `►F◄►D`

## Description
Converts an answer from a fraction to a decimal or from a decimal to a fraction. Fraction and or decimal may be an approximation.


<b>Availability</b>: Token available everywhere.

## Syntax
`►F ◄►D`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>◄►</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>alpha</b></kbd></tt>, <kbd>F1</kbd>, `4:`
<hr>

The `►F◄►D` command is used to convert a number from fraction form to decimal form, or vice versa. Regardless of what form the given number is, this command is meant to automatically determine the form so that it returns the other. It is in essence a combination of the [►Frac](/frac) and [►Dec](/dec) commands, applying `►Frac` if the input is in decimal form and `►Dec` if it is a fraction.

```ti-basic
7.5►F◄ ►D
        15/2
Ans►F◄ ►D
        7.5
```

## Related Commands

*   [►Frac](/frac)
*   [►Dec](/dec)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 2.53 | Added |


