| Property      | Value |
|---------------|-------|
| Hex Value     | `$BC`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [Misc](<../categories/Catalog.md#Misc>)</li><li>[Keypad](<../categories/Keypad.md>)</li><li>[Math](<../categories/Math.md>) > [Math](<../categories/Math.md#Math>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `√(`</li></ul> |

# `√(`

## Overview



<b>Availability</b>: Token available everywhere.

## Syntax
`√(`

<hr>

## Description

Takes the square root of a positive or negative number. It works exactly the same as 2<sup>×</sup>√ or ^(1/2) but is smaller and uses an ending parenthesis. If used on a list, it will return a list with the square root of each element.

```ti-basic
√(4)
        2
√(2)
        1.414213562

√({1,-1})
        {1 i}
```

This may return a complex number or throw [ERR:NONREAL ANS](errors#nonrealans) (depending on mode settings) if taking the square root of a negative number.

## Optimization

Never raise something to the one-half power explicitly; use this command instead.

```ti-basic
:X^(1/2)→X
can be
:√(X→X
```

## Error Conditions

*   **[ERR:NONREAL ANS](errors#nonrealans)** when taking the square root of a negative number in [Real](real-mode) mode.

## Related Commands

*   [^](^.md)
*   [×√](×√.md)
*   [³√(](³√\(.md)
*   [R►Pr(](R►Pr\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, thornahawk.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `√` added |
| <b>TI-83</b> | 0.01013 | Renamed `√` to `√(`


