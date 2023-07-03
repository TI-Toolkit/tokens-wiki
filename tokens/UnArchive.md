| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB69`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [U](<../categories/Catalog.md#U>)</li><li>[Memory](<../categories/Memory.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `DésArchive `</li></ul> |

# `UnArchive `

## Description
Moves the specified variables from the user data archive memory to RAM.
To archive variables, use `Archive`.


<b>Availability</b>: Token available everywhere.

## Syntax
`UnArchive variable`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>variable</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>mem</kbd>, `6:UnArchive`
<hr>

The UnArchive command moves a variable from the archive (also known as [ROM](/glossary#R)) to [RAM](/glossary#R). A quick synopsis of the difference between the two:

*   Data in the archive cannot be accessed, but it's protected from RAM clears (which may occur during battery removal if not done carefully); also, the archive can hold much more data.
*   Data in RAM can be accessed for calculations, but it can also be deleted during a RAM clear or accidentally overwritten by another program.

It is, in general, not recommended to place real variables in the archive (since so many programs use them); also, some variables cannot be archived (see the [Archive](/archive) command for details). Although programs can be archived and unarchived, the Archive and UnArchive commands will not archive or unarchive programs from within a program. For the most part, [lists](/lists) are the only type of variable it makes sense to archive and unarchive in a program.

The UnArchive command doesn't do anything if the variable in question is already in RAM. However, there is no way to test if a variable is in RAM or archive, short of trying to access it and potentially getting an error.

## Advanced Uses

The Archive and UnArchive commands can be used in conjunction for [saving](/saving) data as a program exits.

## Optimization

The [SetUpEditor](/setupeditor) command is often used in place of the UnArchive command when dealing with lists, for several reasons:

*   using SetUpEditor will not prevent the program from working on a TI-83, like UnArchive will
*   SetUpEditor will create a list with length 0 if it doesn't exist; UnArchive will throw an error
*   SetUpEditor saves space in the program, since it can unarchive more than one list at a time, and doesn't require the little L in front

## Error Conditions

*   **[ERR:MEMORY](/errors#memory)** is thrown if there isn't enough memory available in RAM for the variable.
*   **[ERR:VARIABLE](/errors#variable)** is thrown when unarchiving a system variable or a application even if there is enough space.

## Related Commands

*   [Archive](/archive)
*   [DelVar](/delvar)
*   [SetUpEditor](/setupeditor)

## See Also

*   [Saving Data](/saving)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83+</b> | 0.103 | Added |


