| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF11`|
| Categories    | <ul><li>[Libraries](<../categories/Libraries.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `OuvrirBiblio(`</li></ul> |

# `OpenLib(`

## Description
Extends TI-Basic. (Not available.)


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`OpenLib(`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `J:OpenLib(`
<hr>

Together with [ExecLib](/execlib), `OpenLib(` is used on the TI-84 Plus and TI-84 Plus SE for running routines from a Flash App library. This only works, of course, with libraries that have been specifically written for this purpose. The only such library so far is [usb8x](http://usb8x.sourceforge.net/), for advanced interfacing with the USB port.

The following program, which displays the version of usb8x, is an example of how to use `OpenLib(` and `ExecLib`:

```ti-basic
:OpenLib(USBDRV8X
:{6
:ExecLib
:Ans(2)+.01Ans(3
```

## Related Commands

*   [ExecLib](/execlib)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


