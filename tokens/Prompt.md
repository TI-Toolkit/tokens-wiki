| Property      | Value |
|---------------|-------|
| Hex Value     | `$DD`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Prompt `</li></ul> |

# `Prompt `

## Description
Prompts for value for `variableA`, then `variableB`, and so on.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Prompt variableA[,variableB,...,variable n]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>variableA</b></td><td></td><td></td></tr>

<tr><td>variableB</td><td></td><td>Yes</td></tr>

<tr><td>...</td><td></td><td>Yes</td></tr>

<tr><td>variable n</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `2:Prompt`
<hr>

The <tt>Prompt</tt> command is the simplest way of getting [user input](/userinput) on the [home screen](/homescreen) (getting user input on the [graph screen](/graphscreen) is only possible with the <tt><a href="/getkey">getKey</a></tt> command). Prompt displays [variables](/variables) one per line, with an equal sign and question mark (=?) displayed to the right of each variable. After the user enters a value or expression for the variables and presses ENTER, the values will be stored to the variables and program execution will resume.

<tt>Prompt</tt> can be used with every variable, but some of the variables have to be entered in a certain way. If the variable is a string or equation, the user must put quotes ("") around the value; the user must also put curly braces ({}) around lists and square brackets ([]) around matrices. Of course, ending quotes, braces, and brackets can be left off as usual.

When you use <tt>Prompt</tt> to input a named list, the <tt>ʟ</tt> in front of the name is dropped (so <tt>Prompt ʟNAME</tt> will display NAME=?). This can be confusing with single-letter names: <tt>Prompt ʟX</tt> and <tt>Prompt X</tt> both display X=?. Further enhancing the confusion, if the user enters a list for <tt>Prompt X</tt>, the list will be stored to ʟX instead.

During the Prompt, the user can press [2nd][MODE] to quit the program immediately.

## Advanced Uses

Because simply displaying what variable the value will be stored to does not really tell the user what the variable will be used for, you can put a <tt><a href="/disp">Disp</a></tt> command before <tt>Prompt</tt> to give the user some more insight into what an appropriate value for the variable would be. The <tt>Prompt</tt> command will be displayed one line lower, though, because the <tt>Disp</tt> command automatically creates a new line after itself. (Of course, you could also just use the <tt><a href="/input">Input</a></tt> command.)

```ti-basic
:Disp "Enter the Score
:Prompt A
```

## Optimizations

When you have a list of <tt>Prompt</tt> commands (and each one has its own variable), you can just use the first <tt>Prompt</tt> command and combine the rest of the other <tt>Prompt</tt> commands with it. You remove the <tt>Prompt</tt> commands and combine the arguments, separating each argument with a comma. The arguments can be composed of whatever combination of variables is desired.

The advantages of combining <tt>Prompt</tt> commands are that it makes scrolling through code faster, and it is more compact (i.e. smaller) and easier to write than using the individual <tt>Prompt</tt> commands. The primary disadvantage is that it is easier to accidentally erase a <tt>Prompt</tt> command with multiple arguments.

```ti-basic
:Prompt A
:Prompt Str1
Combine the Prompts
:Prompt A,Str1
```

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   <tt><a href="/input">Input</a></tt>
*   <tt><a href="/getkey">getKey</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


