| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF67`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `CouleurTexte(`</li></ul> |

# `TextColor(`

## Description
Set text color prior to using the `Text( `command.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`TextColor([color#]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `A:TextColor(`
<hr>

The <tt>TextColor(</tt> token is used to set the color for <tt><a href="/text">Text(</a></tt>. Although the default color is Blue, the calculator saves the color until it is changed again using <tt>TextColor(</tt> or when a memory reset occurs. When a memory reset occurs, the text color is reset back to blue.

```ti-basic
:TextColor(BLUE
:Text(0,0,"THIS TEXT IS BLUE
:TextColor(GRAY
:Text(12,0,"THIS TEXT IS GRAY
:Text(24,0,"THIS IS GRAY AS WELL
:TextColor(12
:Text(36,0,"THIS TEXT IS BLACK
```

The following table are the colors associated with their numeric values.

Color Token

Numeric Value

BLUE

10

RED

11

BLACK

12

MAGENTA

13

GREEN

14

ORANGE

15

BROWN

16

NAVY

17

LTBLUE

18

YELLOW

19

WHITE

20

LTGRAY

21

MEDGRAY

22

GRAY

23

DARKGRAY

24

Each color token is 2 bytes.  
The color tokens can be used in calculations. For example, LTBLUE/3 will equal 6.

## Background Colors

When the calculator displays text on the graphscreen, it displays it on top of a predetermined background color. This background color is white for all colors of text, except for yellow, white, and light gray (LTGRAY), which have a background color of medium gray (MEDGRAY). If you want to display text in your game without the annoying text-background, you need to have the graphscreen background be white or medium gray so the text-background doesn't show. The only known alternative is to use <tt><a href="/pxl-on">Pxl-On</a></tt> to draw the text manually, so how you work around this issue depends almost entirely on how lazy you are. You can see how this works by looking at the image in the Command Summary sidebar.

## Error Conditions

*   **[ERR:DOMAIN](/errors#domain)** is thrown if the argument specified is not an integer within the 10-24 range.

## Related Commands

*   <tt><a href="/text">Text(</a></tt>
*   <tt><a href="/pxl-on">Pxl-On</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CSE</b> | 4.0 | Added |


