| Property      | Value |
|---------------|-------|
| Hex Value     | `$E6`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [M](<../categories/Catalog.md#M>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Menu(`</li></ul> |

# `Menu(`

## Description
Generates a menu of up to seven items during program execution.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Menu("title","text1",label1[,...,"text7",label7])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>title</b></td><td></td><td>Yes</td></tr>

<tr><td><b>text1</b></td><td>string</td><td>Yes</td></tr>

<tr><td><b>label1</b></td><td></td><td>Yes</td></tr>

<tr><td>...</td><td></td><td><b>No</b></td></tr>

<tr><td>text7</td><td>string</td><td><b>No</b></td></tr>

<tr><td>label7</td><td></td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `C:Menu(`
<hr>

Menus are used for organization, to provide a list of choices for the user to select from, as well as a good way for users to interact with and navigate programs. Although using the Menu( command requires [branching](/goto) (which is generally frowned upon in most circumstances), the menu looks like a generic built-in menu, so it is familiar and easy to use for the user.

When the Menu( command is encountered during a program, the menu screen is displayed with the specified menu title in white-on-black text on the top line and each menu item listed below on its own line, the pause indicator turns on, and execution [pauses](/pause) until the user selects a menu item. There is a cursor that the user can move up and down the menu to select a menu item.

The menu title can be 16 characters or less on monochrome calculators (because of the screen width), and 26 characters or less on color calculators, and must be enclosed in a pair of quotation marks. The menu title looks best if you center it on the screen (using spaces to fill in the rest of the line), so that the entire top line will be highlighted. The menu can have up to seven menu items on monochrome and up to nine on color calculators (because of the screen height and the menu title on top).

After the menu title, you put a comma and then the menu items. There are two parts to a menu item: the text that will be displayed on the screen and the label that program execution will continue at if the user presses ENTER on the menu item or presses its corresponding number. The text can be fourteen characters or less on monochrome and 24 or less on color (because the menu item number is displayed on the left) and must be enclosed in a pair of quotation marks, and you have to separate the text and label with a comma.

```ti-basic
PROGRAM:MENU
:Lbl NY
:Menu(" Select A Place ","NY",NY,"LA",NY,"MN",MN
:Lbl MN
:Disp "Good Choice!
```

## Advanced Uses

When a program needs more than seven (or nine on color calculators) menu items, you will have to create another menu and then link to that menu from the first menu with one of the menu items. Similarly, you can also have two menu items go to the same label (you do not need two labels if they are right next to each other).

If you get tired of using the Menu( command every time you want to make a menu, the alternative is to make your own [custom menu](/custommenus). A custom menu provides a richer experience for the user, and isn't much more work than using the Menu( command. In addition, as you get more experienced as a programmer, you'll come to enjoy using custom menus.

You can use a string [variable](/variables) for the menu title and menu item text instead of the text in quotes, which may sometimes be smaller if the text is used at other places in the program. Similarly, its possible to place all the menu titles in one string variable, and then just access the respective menu title as a substring Unfortunately, variables will not work for the menu item labels. You can also leave the menu title blank to give the illusion that there is no menu title by using two quotes side by side (i.e. "").

For many programs, including text-based programs (where menus are heavily used), there is a main menu that is used for navigating to the different parts of the program. While each program's main menu is unique, two of the most standard menu items on a main menu are Start and Quit — Start goes to the beginning of the program, while Quit goes to the end. It is also fairly common to place a label right before the main menu, so you can return to it again later in the program.

## Problems

1. There is only one line for the title.  
2. There are only seven (or nine on color calculators) slots for the menu items and no scrolling (you CAN add a "next" at the bottom, but that just looks bad, especially if you have a "back" and/or "exit" down there already)  
3. The screen refreshes or blinks when you press down at the bottom to go back to the top.  
4. During the loading of the menu, you can see what is written on the home screen.

## Optimization

Because the Menu( command displays the menu screen instead of clearing the home screen, you do not need to put the [ClrHome](/clrhome) command before it.

```ti-basic
:ClrHome
:Menu("Choose","Right",1,"Wrong",2
Remove ClrHome
:Menu("Choose","Right",1,"Wrong",2
```

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** occurs if this statement is used outside a program.
*   **[ERR:LABEL](/errors#label)** is thrown when an option is chosen whose label doesn't exist.

## Related Commands

*   [Goto/Lbl](/goto)

## See Also

*   [Custom Menus](/custommenus)

[![toolbar-separator.png](http://tibasicdev.wdfiles.com/local--files/home/toolbar-separator.png)](http://tibasicdev.wikidot.com/featured-articles)

Featured Article

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


