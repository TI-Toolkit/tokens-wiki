| Property      | Value |
|---------------|-------|
| Hex Value     | `$85`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [C](<../categories/Catalog.md#C>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `EffDessin`</li></ul> |

# `ClrDraw`

## Description
Clears all drawn elements from a graph or drawing.


<b>Availability</b>: Token available everywhere.

## Syntax
`ClrDraw`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `1:ClrDraw`
<hr>

The <tt>ClrDraw</tt> command is useful clearing away something drawn on the graph screen; in particular, you want to do this at the beginning of a program that uses the graph screen, to get rid of anything that might be on it initially. If there are functions, plots, axes, labels, or grid enabled, these will be redrawn even after you <tt>ClrDraw</tt>. If you don't want these, you should turn them off before the <tt>ClrDraw</tt> command.

Like many other drawing commands, if you're outside a program and on the graph screen, you can use this command directly, without going to the home screen. Just select <tt>ClrDraw</tt> from the menu, and the screen will be cleared immediately.

## Advanced Uses

Unless the final state of the graph screen is the intended effect of the program, you want to use <tt>ClrDraw</tt> at the end of the program so that the user doesn't have to deal with it.

Caution: if the graph screen is displayed even before you execute <tt>ClrDraw</tt>, the user variable Y will be reset to 0. This might be useful as a side effect, but it's more likely to turn out to be a nuisance if you were relying on Y to store something useful. Also, such a wacky effect might get removed in later OS versions<sup class="footnoteref"><a id="footnoteref-1" href="javascript:;" class="footnoteref" onclick="WIKIDOT.page.utils.scrollToReference('footnote-1')">1</a></sup>, so it's a gamble relying on it to work for all users.

The <tt><a href="/recallpic">RecallPic</a></tt> command does not erase what is previously on the graph screen when recalling a picture. Unless this is what you intend, use <tt>ClrDraw</tt> to erase the graph screen's old contents before recalling a picture.

## Optimization

The <tt>ClrDraw</tt> command is not the only way to clear the screen. If something changes about the state of the functions or plots plotted on the graph, about the window dimensions, or the axes, grid, and labels, the graph screen will be marked as 'dirty' by the calculator, and will be cleared the next time you display it.

Don't be too confident about relying on this however. For example, if you cleared <tt>Y<sub>1</sub></tt> before displaying the graph, and <tt>Y<sub>1</sub></tt> previously contained something, the graph will be redrawn. However, if <tt>Y<sub>1</sub></tt> never existed, then you haven't changed anything, and the graph will remain.

A lot of people choose their preferred window settings using the following two commands, which sets the window to X= -47..47, Y= -31..31:

```ti-basic
ZStandard:ZInteger
```

Since this actually switches two window settings, at least one will be different from the previous settings, so the next time the graph screen is shown, it will be cleared without a <tt>ClrDraw</tt> command. There are other [friendly window](/friendly-window) settings that you can use as well.

## Related Commands

*   <tt><a href="/clrhome">ClrHome</a></tt>

## See Also

*   [Friendly Graphing Window](/friendly-window)

Footnotes

[1](javascript:;). Fixed on the TI-84+CSE

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


