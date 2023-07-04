| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF12`|
| Categories    | <ul><li>[Libraries](<../categories/Libraries.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ExécBiblio`</li></ul> |

# `ExecLib`

## Description
Extends TI-Basic (not available)


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`ExecLib`

## Location
<tt><kbd><b>prgm</b></kbd></tt>
<hr>

Together with <tt><a href="/openlib">OpenLib(</a></tt>, <tt>ExecLib</tt> is used on the TI-84 Plus and TI-84 Plus SE for running routines from a Flash App library. This only works, of course, with libraries that have been specifically written for this purpose. The only such library so far is [usb8x](http://usb8x.sourceforge.net/), for advanced interfacing with the USB port.

Since <tt>ExecLib</tt> doesn't have any arguments, it would normally be able to run only one library routine. To get around this, usb8x uses a list passed in <tt>Ans</tt> as arguments to the command. This is most likely how any future libraries will do it as well.

The following program, which displays the version of usb8x, is an example of how to use <tt>OpenLib(</tt> and <tt>ExecLib</tt>:

```ti-basic
:OpenLib(USBDRV8X
:{6
:ExecLib
:Ans(2)+.01Ans(3
```

Download usb8x [here](http://usb8x.sourceforge.net/). You may also be interested in [MSD8x](http://tibasicdev.wikidot.com/local--files/execlib/MSD8x.zip) which is a GUI for usb8x.

## Related Commands

*   <tt><a href="/openlib">OpenLib(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


