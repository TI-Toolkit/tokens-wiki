| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E06`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `Thick`</li></ul> |

# `Thick`

## Overview
Resets all Y=editor line-style settings to Thick.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Thick`

## Location
`zT`, `Thick`
<hr>

## Description

The Thick command converts all lines in the current function type to be drawn using a 2-3 pixel wide line (hence "Thick"). This mode is the default line drawing mode. It can be called on the homescreen or in a program.

```ti-basic
:AxesOff
:GridOff
:Thick
```

## Error Conditions

*   **[ERR:SYNTAX](errors#syntax)** is thrown if any character is included in the same line as the Thick command.

## Related Commands

*   [Thin](Thin.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Battlesquid, jonbush, kg583, MrWompWomp.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `Connected` added |
| <b>TI-84+CSE</b> | 4.0 | Renamed `Connected` to `Thick`


