| Property      | Value |
|---------------|-------|
| Hex Value     | `$73`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Fixe `</li></ul> |

# `Fix `

## Description
Sets fixed-decimal mode for # of decimal places.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Fix #`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>#</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>mode</b></kbd></tt>, `0123456789`
<hr>

The `Fix` command puts the calculator in fixed-point display mode: all numbers will be displayed with a fixed number of digits (0-9) after the decimal, depending on the argument of `Fix`. This could be useful if you're trying to display potentially fractional numbers in a limited amount of space.

A note on more technical aspects: first, if more digits are available than are displayed, the calculator will round off the displayed number (but not its stored value), so 3.97 will be displayed as 4 in `Fix` 1 mode. Second, the `Fix` command can't force more than 10 significant digits to be displayed, so something like 123456789.1 will only display one decimal digit even in `Fix` 9 mode.

Finally, note that the [Float](/float) and `Fix` commands only change the way numbers are displayed: they are saved in the same way in each case. Even if you're in `Fix` 0 mode, the calculations are not done using integers, and in general, the calculations are still done using floating-point numbers no matter the number mode. The one exception is with [regressions](/regression-models): if you store a regression to an equation in `Fix` N mode, it will truncate the numbers involved before storing them to the equation, and as a result, the equation will be different.

## Related Commands

*   [Float](/float)
*   [Normal](/normal)
*   [Sci](/sci)
*   [Eng](/eng)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


