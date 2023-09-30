| Property      | Value |
|---------------|-------|
| Hex Value     | `$EB`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `ʟ`</li></ul> |

# `ʟ`

## Overview
Identifies the next one to five characters as a user-created list name.


<b>Availability</b>: Token available everywhere.

## Syntax
`ʟlistname`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listname</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `B:`
<hr>

## Description

The ʟ command indicates the beginning of a custom list (i.e., any list the user creates, not including the default lists <tt>L₁</tt>…<tt>L₆</tt>). You almost always need to include this when accessing or manipulating a custom list. The maximum length of the list name (not including the ʟ) is five letters. ʟABCDE works, but ʟABCDEF does not.

## Optimization

You don't need to include the ʟ command when [storing](store) (→) to a list. Some of the list commands also allow for this optimization, such as <tt><a href="SetUpEditor.md">SetUpEditor</a></tt>. However, it can create problems when using <tt><a href="Input.md">Input</a></tt> and <tt><a href="Prompt.md">Prompt</a></tt> because you might only be asking the user to input a list, but a real variable would also be allowed.

## Error Conditions

*   **[ERR:SYNTAX](errors#syntax)** is thrown if you try to reference/create a list with more than 5 characters in its name.
*   **[ERR:UNDEFINED](errors#undefined)** is thrown if you try to use ʟ on an undefined list.

## Related Commands

*   [→](store) (store)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583, Timtech.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


