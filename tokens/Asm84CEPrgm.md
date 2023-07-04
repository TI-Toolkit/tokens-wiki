| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF7A`|
| Categories    | <ul><li>[Other (non-catalog)](<../categories/Other (non-catalog).md>) > [Assembly](<../categories/Other (non-catalog).md#Assembly>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Asm84CEPrgm`</li></ul> |

# `Asm84CEPrgm`

## Description


<b>Comment</b>:`Asm83CEPrgm` on the TI-83 Premium CE


## Syntax
`Asm84CEPrgm`

<hr>

Please see the <tt><a href="AsmPrgm.md">AsmPrgm</a></tt> page. The functionality and use are the same between both commands. However, the <tt>Asm84CEPrgm</tt> is only available on the TI-84+CE calculator. Keep in mind that hexadecimal for the monochrome calculators may not work on color calculators. **This token does not work on OS 5.3.1**, it has been deprecated by Texas Instruments for no good reason. Even uploading a program with this token in it will not work as it will throw an <tt>INVALID</tt> error.

There is a workaround to this problem. A sendable program containing the command can be found [here](archive:asm84ceprgm-command-for-os-5-3-1-0058).

To run assembly programs on the calculator, recall the command from the program you sent. Type your hex code in the editor. When you're done, quit the program. Type the following on the homescreen:

```ti-basic
AsmComp(prgmNAME1,prgmNAME2
```

Then, find the program you compressed and run it with either the [Asm(](Asm\(.md) command or like a normal BASIC progam.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CE</b> | 5.0.0 | Added |


