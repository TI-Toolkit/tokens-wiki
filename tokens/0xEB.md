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

The ʟ character is used at the start of the name of any custom list you create, for example:

```ti-basic
{1,2,3}→ʟHELLO
{4,5,6}→ʟWORLD
```

In most cases you need to include this when accessing or manipulating a custom list (although there's a few exceptions, see the _Optimization_ section below). You do not need this character when accessing the the default lists <tt>L₁</tt>…<tt>L₆</tt>).

The maximum length of the list name (not including the <tt>ʟ</tt>) is five letters. <tt>ʟABCDE</tt> works, but <tt>ʟABCDEF</tt> does not. List names must start with a letter A-Z but can also include numbers so <tt>ʟLIST1</tt> and <tt>ʟLIST2</tt> are valid list names, but <tt>ʟ123</tt> is not.

There are two ways to insert this character:

1.  Press <tt>2nd</tt>, <tt>LIST</tt>, press right arrow to access the <tt>OPS</tt> menu, scroll to the bottom, and press <tt>ENTER</tt> to insert the <tt>ʟ</tt> character. You can then type the rest of the name of your list.
2.  If your custom list already exists, you can press <tt>2nd</tt>, <tt>LIST</tt>, select the name of your list, and press <tt>ENTER</tt>. The whole name including the <tt>ʟ</tt> character will be inserted.

## Optimization

You don't actually need to include the ʟ command when [storing](store) (→) to a list.

```ti-basic
{1,2,3}→HELLO
{4,5,6}→WORLD
{7,8,9}→X
```

Although the name <tt>X</tt> as used above also matches the name of a regular real variable, since the data being stored is a list, it will be saved to <tt>ʟX</tt>.

When storing to a specific _list item_, you MUST still include the <tt>ʟ</tt> character:

```ti-basic
1→ʟHELLO(1)
2→ʟWORLD(2)
3→ʟX(3)
```

Some of the list commands also allow for leaving off the <tt>ʟ</tt> character, such as <tt><a href="SetUpEditor.md">SetUpEditor</a></tt>. However, _be careful_ when doing so with <tt><a href="Input.md">Input</a></tt> and <tt><a href="Prompt.md">Prompt</a></tt> because you might only be asking the user to input a list, but if a real value is entered, it would be saved to a real variable instead.

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


