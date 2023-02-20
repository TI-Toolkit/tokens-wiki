| key           | value |
|---------------|-------|
| Summary       | Displays a value in the degrees-minutes-seconds angle format. |
| Syntax        | `value►DMS`|
| Menu Location | [2nd] [ANGLE] [4] |
| Hex Value     | `$01` |

# ►DMS
## Command Description
On the homescreen or in a [`Disp `](disp.md) or [`Pause `](pause.md) statement, the `►DMS` command can be used to reformat a number (presumably, an angle in degrees) in degrees, arcminutes, and arcseconds.

It cannot be used with [`Output(`](output.md) or other display commands, as it throws a syntax error.

## Example
```ti-basic
14.2857142►DMS
              14°17'8.571"
```

## Error Conditions
- [**SYNTAX**](../errors/syntax.md) when used in an invalid context (i.e. an [`Output(`](output.md) command.)
- [**DATATYPE**](../errors/datatype.md) when used on anything besides a real.

## Advanced Notes
- Each degree (represented by `°`) is 1/360th of a circle, each arcminute (represented by `'`) is 1/60th of a degree, and each arcsecond (represented by `"`) is 1/60th of an arcminute.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| TI-82      | 1.0 | `►DMS` token added. |

## Related Commands
- [`°`](degree-symbol.md)
- [`r`](r-symbol.md)
