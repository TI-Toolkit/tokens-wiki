| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF31`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `►F◄►D`</li></ul> |

# `►F◄►D`

## Overview
Converts an answer from a fraction to a decimal or from a decimal to a fraction. Fraction and or decimal may be an approximation.


<b>Availability</b>: Token available everywhere.

## Syntax
`►F ◄►D`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>◄►</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>alpha</b></kbd></tt>, <kbd>F1</kbd>, `4:`
<hr>

## Description

The <tt>►F◄►D</tt> command is used to convert a number from fraction form to decimal form, or vice versa. Regardless of what form the given number is, this command is meant to automatically determine the form so that it returns the other. It is in essence a combination of the <tt><a href="►Frac.md">►Frac</a></tt> and <tt><a href="►Dec.md">►Dec</a></tt> commands, applying <tt>►Frac</tt> if the input is in decimal form and <tt>►Dec</tt> if it is a fraction.

```ti-basic
7.5►F◄ ►D
        15/2
Ans►F◄ ►D
        7.5
```

## Related Commands

*   <tt><a href="►Frac.md">►Frac</a></tt>
*   <tt><a href="►Dec.md">►Dec</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Battlesquid, burr, ccrh2009, kg583, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 2.53 | Added |


