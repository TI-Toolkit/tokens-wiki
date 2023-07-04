| Property      | Value |
|---------------|-------|
| Hex Value     | `$75`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [F](<../categories/Catalog.md#F>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `PleinEcr`</li></ul> |

# `Full`

## Description
Sets full screen mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Full`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Full`
<hr>

The <tt>Full</tt> command cancels the effects of either <tt><a href="/horiz">Horiz</a></tt> or <tt><a href="/g-t">G-T</a></tt>.

<tt>Full</tt> is usually used either at the beginning and/or ending of a program. It is used at the beginning to ensure that the screen mode is <tt>Full</tt>, the standard setting. It is used at the end if the screen mode was changed in the middle of the program (as [clean up](/cleanup)).

```ti-basic
:Full
```

## Related Commands

*   <tt><a href="/g-t">G-T</a></tt>
*   <tt><a href="/horiz">Horiz</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


