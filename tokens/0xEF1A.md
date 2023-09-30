| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF1A`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `ZFrac1⁄4`</li></ul> |

# `ZFrac1⁄4`

## Overview
Sets the window variables so that you can trace in increments of , if possible. Sets `TraceStep `to  and Δ`X` and Δ`Y `to .


<b>Availability</b>: Token available everywhere.

## Syntax
`ZFrac1/4`

## Location
<tt><kbd><b>zoom</b></kbd></tt>, `ZOOM`, `D:ZFrac1/4`
<hr>

## Description

ZFrac_X_ refers to a collection of Zoom commands in for the OS 2.53MP and up. The calculator boasts six such commands, each replacing _X_ with a fraction of some sort. The commands all essentially operate in the same manner, so they are all covered here on this page.

This command centers the origin of the graph and makes each pixel _X_ units tall and wide where "_X_" refers to the suffix of the command. For example, ZFrac1/3 makes each pixel a length of and height of 1/3, which means that each square unit would be a 3x3 square of pixels. It also sets Xscale and Yscale to 1.

It is useful when the users wants each pixel to be a uniform length and height, though other commands such as [ZSquare](ZSquare.md), [ZDecimal](ZDecimal.md), and [ZInteger](ZInteger.md) also create a [friendly window](friendly-window), and being more compatible, they would be more useful in programming across calculators.

The following is a list of the available ZFrac_X_ commands:

*   ZFrac1/2
*   ZFrac1/3
*   ZFrac1/4
*   ZFrac1/5
*   ZFrac1/8
*   ZFrac1/10

## Related Commands

*   [ZSquare](ZSquare.md)
*   [ZDecimal](ZDecimal.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Timothy Foster, Xeda Elnara.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 2.53 | Added |


