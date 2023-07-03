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

The `Full` command cancels the effects of either [Horiz](/horiz) or [G-T](/g-t).

`Full` is usually used either at the beginning and/or ending of a program. It is used at the beginning to ensure that the screen mode is `Full`, the standard setting. It is used at the end if the screen mode was changed in the middle of the program (as [clean up](/cleanup)).

```ti-basic
:Full
```

## Related Commands

*   [G-T](/g-t)
*   [Horiz](/horiz)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


