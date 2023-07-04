| Property      | Value |
|---------------|-------|
| Hex Value     | `$74`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [H](<../categories/Catalog.md#H>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Horiz`</li></ul> |

# `Horiz`

## Description
Sets horizontal split-screen mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Horiz`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Horiz`
<hr>

<tt>Horiz</tt> is usually at the beginning of a program. It is used at the beginning to ensure that the screen mode is <tt>Horiz</tt>, for programs such as Hangman that want to use <tt><a href="Input.md">Input</a></tt> but also have the graph screen shown. Note that if you use pixels, the y-coordinate can be no larger than 30, since that is the maximum pixel's range.

```ti-basic
:Horiz
```

## Related Commands

*   <tt><a href="Full.md">Full</a></tt>
*   <tt><a href="G-T.md">G-T</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


