| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF02`|
| Categories    | <ul><li>[Time](<../categories/Time.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `AffMintr(`</li></ul> |

# `checkTmr(`

## Description
Returns the number of seconds since you used `startTmr` to start the timer. The `starttime` is the value displayed by `startTmr`.


<b>Availability</b>: Token available everywhere.

## Syntax
`checkTmr(starttime)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>starttime</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `checkTmr(`
<hr>

The `checkTmr(` command is used together with the [startTmr](/starttmr) command to determine how much time has elapsed since the timer was started on the TI-84+/SE calculators. In particular, it returns the number of seconds since the built-in timer was started. An application of these commands is [timing](/timings) different commands or pieces of code, as well as countdowns in games, or a time-based score (such as in Minesweeper).

To use the timer, you first store `startTmr` to a [variable](/variables) (usually, a real variable) whenever you want the count to start. Now, whenever you want to check the elapsed time, you can use checkTmr( with the variable from above, giving you the number of seconds that have passed. Using `checkTmr(` doesn't stop the timer, you can do it as many times as you want to.

In the case of Minesweeper, for example, you would store `startTmr` to, for example, `T`, after setting up and displaying the board, display the result of `checkTmr(T)` in the game's key-reading loop, and store `checkTmr(T)` to the player's score if he wins.

## Advanced Uses

To time a command or routine using `startTmr` and `checkTmr(`, use the following template:

```ti-basic
:ClockOn
:startTmr→T
:Repeat checkTmr(Ans
:End
:For(n,1,(number)                    //sequence variable n
   (command(s) to be tested)
:End
:checkTmr(T+1)/(number)
```

Making (number) higher increases accuracy, but takes longer. Also, make sure not to modify the variables _n_ or `T` inside the [For(](/for) loop.

While this method eliminates human error from counting, it's prone to its own faults. For example, `startTmr` and `checkTmr(` always return the time rounded down to a whole second. To take this into account, replace the last line:

```ti-basic
:(checkTmr(T+{1,0})/(number)
```

When testing code, be aware that many different things affect the time: the strength of the batteries, the amount of free RAM, and including the closing parenthesis on the For( loop. The last one, in particular, has an impact when using a single-line [If](/if) statement or one of the [IS>(](/is) and [DS<(](/ds) commands on the first line inside a For( loop.

## Related Commands

*   [startTmr](/starttmr)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+</b> | 0.01 | Added |


