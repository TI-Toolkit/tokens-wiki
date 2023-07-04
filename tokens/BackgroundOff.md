| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF64`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `ArrPlanNAff`</li></ul> |

# `BackgroundOff`

## Description
Turns off background image in the graph area.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`BackgroundOff`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `BACKGROUND`, `2:BackgroundOff:`
<hr>

The <tt>BackgroundOff</tt> command has only one purpose: turn the background off. Run the command on its own line in a program with no other characters or arguments.

```ti-basic
:BackgroundOn BLUE //Makes background blue
:BackgroundOff //Makes background white again
```

## Optimization

<tt>BackgroundOff</tt> does essentially the same thing as turning the background on to the color white, as shown below.

```ti-basic
:BackgroundOn WHITE
can be
:BackgroundOff
```

## Related Commands

*   <tt><a href="http://tibasicdev.wikidot.com/backgroundon">BackgroundOn</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CSE</b> | 4.0 | Added |


