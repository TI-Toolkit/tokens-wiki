| Property      | Value |
|---------------|-------|
| Hex Value     | `$DC`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Input `</li></ul> |

# `Input `

## Description
Displays graph.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Input`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `2:Input`
<hr>

## Description
Prompts for value to store to `variable`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Input [variable]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>variable</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `2:Input`
<hr>

## Description
Displays `Strn` and stores entered value to `variable`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Input [Strn,variable]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>n</td><td></td><td>Yes</td></tr>

<tr><td>variable</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `2:Input`
<hr>

The <tt>Input</tt> command is the other way of getting user input on the [home screen](homescreen) (getting [user input](userinput) on the [graph screen](graphscreen) is only possible with the <tt><a href="getKey.md">getKey</a></tt> command). The <tt>Input</tt> command asks the user to enter a value for a [variable](variables) (only one variable can be inputted at a time), waiting until the user enters a value and then presses ENTER. It does not display what variable the user is being asked for, but instead just displays a question mark (?).

Because just displaying a question mark on the screen does not really tell the user what to enter for input or what the input will be used for, the <tt>Input</tt> command has an optional text message that can be either text or a string variable that will be displayed alongside the input.

Only the first sixteen characters of the text message will be shown on the screen (because of the screen dimensions), so the text message should be kept as short as possible (a good goal is twelve characters or less). This is so the value the user inputs can fit on the same line as the text. In the case that the value is too long, it will wrap around to the next line.

```ti-basic
PROGRAM:INPUT
:"Fruit
:Input "Best "+Ans,Str1
:Input "Worst "+Ans,Str2
:Disp "That's "+Ans+"astic!
```

Input can be used to display every variable just before it requests user input, but some of the variables have to be entered in a certain way. If the variable is a string or a Y= function, the user must put quotes ("") around the value or expression. The user must also put curly braces ({}) around lists with the list elements separated by commas, and square brackets ([]) around matrices with the matrix elements separated by commas and each row individually wrapped with square brackets.

## Advanced Uses

When you just use the <tt>Input</tt> command by itself (without any arguments), the graph screen will be shown and the user can move the cursor around. Program execution will then [pause](pause.md) until the user presses ENTER, at which time the coordinates of the cursor will be stored to the respective variables (R and θ for <tt><a href="PolarGC.md">PolarGC</a></tt> format, otherwise X and Y).

If a text message is longer than twelve characters or you want to give the user plenty of space to enter a value, you can put a <tt><a href="Disp.md">Disp</a></tt> command before the <tt>Input</tt> command. You break the text message up and display it in parts. The <tt>Input</tt> command will be displayed one line lower, though, because the <tt>Disp</tt> command automatically creates a new line.

```ti-basic
:Disp "What is your"
:Input "Name",Str0
```

Normally you can't get a quote character into a string (because quotes are used to identify the beginning and end of the string), but the <tt>Input</tt> command actually allows the user to enter a quote character (") as part of a string. This works without problems, and the quote can even be accessed by the user afterwards.

Because a user-defined [list](lists) variable doesn't need the <tt>ʟ</tt> prefixed character before it when referring to the list, you may be only asking the user to input a simple real variable but a list would also be allowed. There is nothing you can really do about this problem, except including the <tt>ʟ</tt> prefixed character when wanting a list inputted and trying to limit your use of <tt>Input</tt> and <tt><a href="Prompt.md">Prompt</a></tt>.

```ti-basic
:Input A
should be
:Input ʟA
```

## Optimizations

When you are just using the text message to tell the user what the variable being stored to is, you should use the <tt>Prompt</tt> command instead. And, if there is a list of <tt>Input</tt> commands following the same pattern, you can reduce them to just one <tt>Prompt</tt> command.

```ti-basic
:Input "A",A
:Input "B",B
Replace with Prompt
:Prompt A,B
```

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   <tt><a href="Prompt.md">Prompt</a></tt>
*   <tt><a href="getKey.md">getKey</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


