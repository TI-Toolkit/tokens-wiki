| Property      | Value |
|---------------|-------|
| Hex Value     | `$68`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [E](<../categories/Catalog.md#E>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Ing`</li></ul> |

# `Eng`

## Description
Sets engineering display mode.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Eng`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Eng`
<hr>

The `Eng` command puts the calculator in engineering notation mode. This is a variation on scientific notation in which the exponent is restricted to be a multiple of 3 (and the mantissa can range between 1 and 1000, not including 1000 itself)

```ti-basic
Eng
        Done
12345
        12.345e3
{1,2,3}
        {1e0 2e0 3e0}
```

## Related Commands

*   [Normal](/normal)
*   [Sci](/sci)
*   [Float](/float)
*   [Fix](/fix)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


