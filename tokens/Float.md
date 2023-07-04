| Property      | Value |
|---------------|-------|
| Hex Value     | `$69`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Flottant`</li></ul> |

# `Float`

## Description
Sets floating decimal mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Float`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Float`
<hr>

The <tt>Float</tt> command makes the calculator display numbers with a "floating decimal point" — only as many digits after the decimal as needed are displayed (so whole numbers, for example, are shown without any decimal points). This is the default mode, and usually the most useful.

A technicality of displaying real numbers on the calculator: A maximum of 14 significant digits are stored in a number, but only 10 of them are actually displayed (or used for comparisons) — the rest are used for additional precision. This means that if a number is displayed as a whole number, it isn't necessarily whole. For example, 1234567890.7 will be displayed as 1234567891 (rounded to 10 significant digits), and 1.0000000003 will be displayed as 1.

This makes sense from many perspectives: if you get a result of 1.0000000003 after a calculation, odds are that this should be 1, and isn't just because of a precision error. Because the extra digits are there, though, even if they're not displayed, such a number will still be invalid for functions such as <tt><a href="/pxl-on">Pxl-On(</a></tt> or <tt><a href="/sub">sub(</a></tt> that want integer arguments, and this sort of error is hard to track down.

Finally, note that the <tt>Float</tt> and <tt><a href="/fix">Fix</a></tt> commands only change the way numbers are displayed: they are saved in the same way in each case. Even if you're in <tt>Fix 0</tt> mode, the calculations are not done using integers, and in general the calculations are still done using floating-point numbers no matter the number mode. The one exception is with [regressions](/regression-models): if you store a regression to an equation in Fix N mode, it will truncate the numbers involved before storing them to the equation, and as a result, the equation will be different.

## Related Commands

*   <tt><a href="/fix">Fix</a></tt>
*   <tt><a href="/normal">Normal</a></tt>
*   <tt><a href="/sci">Sci</a></tt>
*   <tt><a href="/eng">Eng</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


