| Property      | Value |
|---------------|-------|
| Hex Value     | `$D7`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [G](<../categories/Catalog.md#G>)</li><li>[Program](<../categories/Program.md>) > [Control](<../categories/Program.md#Control>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Goto `</li></ul> |

# `Goto `

## Description
Transfers control to `label`.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Gotolabel`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>label</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `0:Goto`
<hr>

The `Goto` command is used together with the [Lbl](/lbl) command to jump (or branch) to another place in a program. When the calculator executes a `Goto` command, it stores the label name in memory, and then searches from the beginning of the program for the `Lbl` command with the supplied name. If it finds it, it continues running the program from that point; otherwise, if the label does not exist, it throws an [ERR: LABEL](/errors#label) error.

Label names can be either one or two characters long, and the only characters you're allowed to use are letters (including θ) and numbers 0 to 9; this means 37+37*37=1406 possible combinations. Of course, you should use all of the single character names first, before using the two character names. While you can technically have the same label name multiple times in a program, it is rather pointless since the calculator always goes to the first occurrence of the label.

You can position a `Lbl` command one or more lines before a `Goto` command to create a kind of loop structure. However, you have to provide the break-out code, since it isn't built-in. An [If](/if) conditional is easiest, but if there is no code that ends the branching, then program execution will continue indefinitely, until you manually exit it (by pressing the ON key).

```ti-basic
:Lbl A
:...
:If <exit condition>
:Goto A  // this line is skipped
```

Although the `Goto` command may seem like a good alternative to loops, it should be avoided whenever possible, which is especially important when you are first [planning](/plan) a program. This is because it has several serious drawbacks associated with it:

*   It is quite slow, and gets slower the further the `Lbl` is in your program.
*   It makes reading code (your own, or someone else's) much more confusing.
*   In most cases, [If](/if), [For(](/for), [While](/while), or [Repeat](/repeat) can be used instead, saving space and improving speed.
*   Using a `Goto` to exit any block of code requiring an `End` command causes a [memory leak](/memory-leaks), which will not be usable until the program finishes running or executes a [Return](/return) command, and which will slow down your program down. See below for ways to fix this.

The `Goto` command isn't all bad, however, and is actually useful when a loop isn't practical and when something only happens once or twice (see below for examples). Just remember that you should never use `Goto` to repeat a block of code several times. Use `For(`, `Repeat`, or `While` instead.

## Fixing Memory Leaks

One of the simplest memory leaks that occurs is using branching to exit out of a loop when a certain condition of an `If` conditional is true. If the loop is an infinite loop (i.e., `Repeat` 0 or `While` 1), you should take the condition from the `If` conditional and place it as the condition of the loop. This allows you to remove the branching, since it is now unnecessary.

```ti-basic
:Repeat 0
:getKey→B
:If B:Goto A
:End:Lbl A
Make Loop Condition
:Repeat B
:getKey→B
:End
```

Of course, the only reason that this memory leak fix is possible is because of the `If` conditional (since the `If` conditional doesn't need a closing `End` command). When dealing with a complex `If` conditional, you will have to rework the conditionals so the branching has its own `If` conditional. Depending on how many commands there are in the conditionals, you might be able to just use an `If` conditional or you might need to use an `If`-`Then` conditional.

```ti-basic
:If B:Then
:Disp "Hello
:Goto A
:End
Separate Into Conditionals
:If B:Disp "Hello
:If B:Goto A
```

This memory leak fix will work most of the time, but it isn't applicable when one of the values of the variables in the condition is changed by one of the commands inside the condition. The way to get around this is by using another variable for the `If` conditional that the branching uses. You initialize the variable to zero, assign the variable whatever value you want in the conditional, and then check to see if the variable is equal to that value in the branching conditional.

```ti-basic
:If A=1:Then
:3→A:4→B
:Goto A
:End
Use Another Variable
:Delvar CIf A=1:Then
:3→A:4→B:π→C
:End
:If C=π
:Goto A
```

## Advanced Uses

If your program requires [cleanup](/cleanup) after it finishes, but it can exit from several different places, use `Goto` and place a `Lbl` at that point. This saves memory over repeating the cleanup code every time you exit. The usual considerations about `Goto` don't apply here: since you're exiting the program, all memory leaks will be gone anyway, and speed isn't much of an issue for something that only gets done once.

The code looks something like this:

```ti-basic
:If K=45:Goto Q  //user pressed CLEAR
:...
:If L:Goto Q  // game over
:...
:Lbl Q
:DelVar L1ClrHome
```

A common situation in programs is when a decision has to be made about where the program execution should go next. The obvious approach would be to use the value of a variable as the label name (i.e., something like `Goto` A, with A being a variable), but that doesn't work because the calculator doesn't interpret the label as a variable. So, the next best approach is to use If conditionals with the different values of the variable:

```ti-basic
:If not(A:Goto 0
:If A=1:Goto 1
:If A=2:Goto 2
```

Another possible use for `Goto` is in [program protection](/protection) to break a program with an error without letting the user see where it happened. If the label that you want to `Goto` doesn't exist, you'll get a [ERR: LABEL error](/errors#label), which doesn't provide a 2:Goto option. So, all you have to do is `Goto` a label that you know doesn't exist.  
An alternative method would be to lock the program from being able to be edited. (which you currently cannot do on-calc without a shell) This gives you the possibility to throw whatever error you want! For example, if the user entered something invalid, you can add a blank line with a closing parenthesis, and a syntax error will be thrown, without the 2:Goto option! If you do go this route, be sure to only lock it when you are done editing. It is also good practice to include a text file with the source, as well.

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** occurs if this statement is used outside a program.
*   **[ERR:LABEL](/errors#label)** is thrown if the corresponding label doesn't exist.

## Related Commands

*   [Repeat](/repeat)
*   [While](/while)
*   [Menu(](/menu)
*   [If](/if)

## See Also

*   [Program Cleanup](/cleanup)
*   [Program Protection](/protection)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


