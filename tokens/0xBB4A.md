| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB4A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `ListesDéfaut `</li></ul> |

# `SetUpEditor `

## Overview
Removes all list names from the stat list editor, and then restores list names `L1` through `L6` to columns `1` through `6`.


<b>Availability</b>: Token available everywhere.

## Syntax
`SetUpEditor`

## Location
<tt><kbd><b>stat</b></kbd></tt>, `EDIT`, `5:SetUpEditor`
<hr>

## Overview
Removes all list names from the stat list editor, then sets it up to display one or more `listnames` in the specified order, starting with column `1`.


<b>Availability</b>: Token available everywhere.

## Syntax
`SetUpEditor listname1[,listname2,...,listname20]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listname1</b></td><td>listName</td><td></td></tr>

<tr><td>listname2</td><td>listName</td><td>Yes</td></tr>

<tr><td>...</td><td></td><td>Yes</td></tr>

<tr><td>listname20</td><td>listName</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `EDIT`, `5:SetUpEditor`
<hr>

## Description

The SetUpEditor command is meant as an auxiliary for the List Editor (which can be accessed by pressing STAT ENTER (Edit…)). The list editor provides a convenient interface for looking at the elements in lists, or editing those elements (especially when the elements of two lists are connected to each other, such as a list for X-coordinates and one for Y-coordinates, since they will be shown in the same row).

The SetUpEditor command sets which lists are shown in this list editor. By default, it selects the lists L1, L2, L3, L4, L5, and L6. To do this, just use the command with no arguments:

```ti-basic
:SetUpEditor
```

However, you can use it to select any lists that you have defined, or even lists that you haven't defined yet. To do this, simply put the lists you want as arguments to the command. For example, if you want to edit the lists FOO and BAR, do:

```ti-basic
:SetUpEditor FOO,BAR
```

The List Editor doesn't do anything when you are running a program, so it may seem as though SetUpEditor is nearly useless in programs. This is not the case, however, because of SetUpEditor's powerful side effect: if the lists it is given as arguments are archived, it will unarchive them. If they don't exist, it will create them with size 0.

## Advanced Uses

Due to this side effect, SetUpEditor can be used for lists with external data such as [saved](saving) games or [high scores](highscores). When the user first runs the program, the assumption is you don't know anything about the state of those lists: they may be archived, or they may not even exist. You can deal with both of those individually: storing to the dimension will create the list if it didn't exist, and the [UnArchive](UnArchive.md) command will move the list to RAM if it wasn't there.

However, if you're wrong about the list, both of these commands will cause an error. If the list exists but is archived, storing to its dimension will cause an [ERR:ARCHIVE](errors#archive) error. If the list doesn't exist, unarchiving it will cause an [ERR:UNDEFINED](errors#undefined) error. Sounds like a vicious circle.

The SetUpEditor command allows you to deal with both of these problems at once. Say the program saves its data in LSAVE. Use the SetUpEditor command on it, and from then on you know that the list exists AND that it is unarchived.

```ti-basic
:SetUpEditor SAVE
```

At the end of the program, you should [clean up](cleanup) after yourself, though. You don't want the user to see the list SAVE in the editor (he might be tempted to edit it and give himself a huge high score, for one thing). So you should use the SetUpEditor command again, this time without arguments, to reset the editor to its default state.

For more information about using SetUpEditor in the context of saving data, see the page on [saving](saving.md).

## Similar Commands

*   [dim(](dim\(.md)
*   [ClrList](ClrList.md)
*   [UnArchive](UnArchive.md)

## See Also

*   [Saving Data](Saving Data.md)
*   [Highscores](Highscores.md)
*   [Program Cleanup](Program Cleanup.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: 2Tie, burr, DarkerLine, GoVegan, Timothy Foster.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


