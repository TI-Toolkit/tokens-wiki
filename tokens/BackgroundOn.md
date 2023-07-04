| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF5B`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `ArrPlanAff `</li></ul> |

# `BackgroundOn `

## Description
Displays a menu the Background Image Var n (Image#n) specified in the graph area.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`BackgroundOn n`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `BACKGROUND`, `1:BackgroundOn`
<hr>

With the introduction of color and a higher resolution screen than the monochrome calculators, the TI-84+CSE and TI-84+CE included the ability to display a background image on the graphscreen. The images variables are similar to the picture variables in that there 10 slots. In addition, functions can be drawn on top of images.

<tt>BackgroundOn</tt> recalls an image variable or color and displays it on the graphscreen.

```ti-basic
:BackgroundOn Image1
is the same as
:BackgroundOn 1
```

Intrestingly, the following is a valid syntax, which fills the graphscreen with a light blue (18).

```ti-basic
:15→B
:BackgroundOn B+3
```

In addition, <tt>BackgroundOn</tt> can be used to fill the graphscreen with a solid color. The color variables range from 10 to 24, blue to dark gray, as documented [here](textcolor). For example, <tt>BackgroundOn</tt> 12 will fill the graphscreen with black.

```ti-basic
:BackgroundOn 12
```

## Error Conditions

*   **[ERR:DOMAIN](errors#dimmismatch)** is thrown if the number is not an integer between 0 and 24.

## Related Commands

*   <tt><a href="BackgroundOff.md">BackgroundOff</a></tt>
*   <tt><a href="RecallPic.md">RecallPic</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CSE</b> | 4.0 | Added |


