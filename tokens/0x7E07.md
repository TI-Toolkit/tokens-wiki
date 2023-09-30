| Property      | Value |
|---------------|-------|
| Hex Value     | `$7E07`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `Dot-Thick`</li></ul> |

# `Dot-Thick`

## Overview
Sets dot plotting mode; resets all Y=editor graph-style settings to Dot-Thick.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Dot-Thick`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Dot-Thick`
<hr>

## Description

The <tt>Dot-Thick</tt> command sets all lines in the current function type to be drawn using a series of thick points, about the size of a point drawn using <tt><a href="Pt-On(.md">Pt-On(</a></tt>, at each interval of the <tt>TraceStep</tt>. This command can be called on the homescreen or within a program.

```ti-basic
:AxesOff
:RectGC
:Dot-Thick
```

## Error Conditions

*   **[ERR:SYNTAX](errors#syntax)** is thrown if any additional arguments are used with the command

## Related Commands

*   <tt><a href="Dot-Thin.md">Dot-Thin</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Battlesquid, kg583, MrWompWomp.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `Dot` added |
| <b>TI-84+CSE</b> | 4.0 | Renamed `Dot` to `Dot-Thick`


