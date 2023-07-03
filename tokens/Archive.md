| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB68`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Memory](<../categories/Memory.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Archive `</li></ul> |

# `Archive `

## Description
Moves the specified `variable` from RAM to the user data archive memory.


<b>Availability</b>: Token available everywhere.

## Syntax
`Archive variables`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>variables</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>mem</kbd>, `5:Archive`
<hr>

The `Archive` command moves a variable from [RAM](/glossary#ram) to the archive (also known as [ROM](/glossary#tom)). A quick synopsis of the difference between the two:

*   Data in the archive cannot be accessed, but it's protected from RAM clears (which may occur during battery removal if not done carefully); also, the archive can hold much more data.
*   Data in RAM can be accessed for calculations, but it can also be deleted during a RAM clear or accidentally overwritten by another program.

Nothing happens if the variable in question is already archived.

You might want to use this command to protect data such as saved games from being accidentally deleted. It's not, in general, a good idea to archive commonly used variables, such as the real variables A-Z, since programs usually expect to be able to access these variables without problems, and won't check if they're archived.

Also, some variables cannot be archived. These include:

*   The real variables R, T, X, Y, θ, and _n_ (due to their use in graphing)
*   The [equation](/system-variables#equation) variables Y<sub>n</sub>, X<sub>nT</sub>, Y<sub>nT</sub>, r<sub>n</sub>, u, v, and w
*   The stat plots Plot_#_
*   [Window](/system-variables#window), table, and zoom variables such as TblInput or Xmin
*   [Statistical](/system-variables#statistical) variables and the list ʟRESID
*   [Finance](/system-variables#finance) variables

Finally, the `Archive` command does not work on programs when using it from a program (it does, however, archive programs from the home screen). However, an [assembly program](/hexcodes#toc0) can be executed as a subroutine so that `Archive` and [UnArchive](/unarchive) can be used within a program. The program should however be run again afterwards.

## Advanced Uses

As archived variables (and programs) can not be accessed by the calculator's inbuilt OS, archiving programs can be quite problematic when trying to execute them. However; by enabling your programs to be viewable in [assembly shells](/asmshells), you can execute your programs without needing to unarchive them first. This is because the assembly shell _copies_ the program to the RAM automatically, and is then executed. Closing the program will automatically remove the copy from the RAM, so no RAM is lost in the end.

## Error Conditions

*   **[ERR:ARCHIVE FULL](/errors#archivefull)** is thrown when there isn't enough space in the archive for the variable.
*   **[ERR:INVALID](/errors#invalid)** is thrown when trying to archive a program from within a program.
*   **[ERR:VARIABLE](/errors#variable)** is thrown when trying to archive a variable that cannot be archived.

## Related Commands

*   [UnArchive](/unarchive)
*   [DelVar](/delvar)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83+</b> | 0.103 | Added |


