| Property      | Value |
|---------------|-------|
| Hex Value     | `$67`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Sci`</li></ul> |

# `Sci`

## Description
Sets scientific notation display mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Sci`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Sci`
<hr>

The Sci command puts the calculator in scientific notation mode, so that all results are displayed in scientific notation: as a (possibly fractional) number between 1 and 10 (not including 10) multiplied by a power of 10.

```ti-basic
Sci
        Done
1000
        1e3
{1,2,3}
        {1e0 2e0 3e0}
```

## Related Commands

*   [Normal](/normal)
*   [Eng](/eng)
*   [Float](/float)
*   [Fix](/fix)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


