| Property      | Value |
|---------------|-------|
| Hex Value     | `$9C`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [L](<../categories/Catalog.md#L>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Ligne(`</li></ul> |

# `Line(`

## Description
Draws a line from (`X1`,`Y1`) to (`X2`,`Y2`) with the following options: erase #: 1,0, color #: 10-24, and line style #: 1-4.


<b>Availability</b>: Token available everywhere.

## Syntax
`Line(X1,Y1,X2,Y2[,erase#,color#,linestyle#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>X1</b></td><td></td><td></td></tr>

<tr><td><b>Y1</b></td><td></td><td></td></tr>

<tr><td><b>X2</b></td><td></td><td></td></tr>

<tr><td><b>Y2</b></td><td></td><td></td></tr>

<tr><td>erase#</td><td></td><td>Yes</td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

<tr><td>linestyle#</td><td>integer</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `2:Line(`
<hr>

## Description
Erases a line (erase #: 1,0) from (`X1`,`Y1`) to (`X2`,`Y2`).


<b>Availability</b>: Token available everywhere.

## Syntax
`Line(X1,Y1,X2,Y2,0[,line#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>X1</b></td><td></td><td></td></tr>

<tr><td><b>Y1</b></td><td></td><td></td></tr>

<tr><td><b>X2</b></td><td></td><td></td></tr>

<tr><td><b>Y2</b></td><td></td><td></td></tr>

<tr><td>line#</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `2:Line(`
<hr>

The Line( command is used to draw lines at any angle, as opposed to only drawing [vertical](vertical.md) or [horizontal](horizontal.md) lines. Line(X<sub>1</sub>,Y<sub>1</sub>,X<sub>2</sub>,Y<sub>2</sub>) will draw a line from (X<sub>1</sub>,Y<sub>1</sub>) to (X<sub>2</sub>,Y<sub>2</sub>). Line( is affected by the window settings, although you can use a [friendly window](friendly-window) so there is no impact on the command.

```ti-basic
:Line(5,5,20,3)
```

## Advanced Uses

Line has an optional fifth argument. It can be any real number, but the default is one. If the fifth argument, _erase_, is something other than 0, then it will simply draw the line. If _erase_ is 0, then it will erase the line.

```ti-basic
:Line(5,5,20,3,0)
```

Leave off the ending argument if you are just drawing the line.

```ti-basic
:Line(5,5,20,3,1)
can be
:Line(5,5,20,3)
```

The ending argument can be a formula, which is useful for [movement applications](movement) and other things such as health bars where the lines drawn are constantly different. The following draws or erases a line depending on whether a key is pressed.

```ti-basic
:getKey
:Line(5,5,20,3,not(Ans
```

If working on a TI 84+CSE or TI 84+CE, then the fifth argument of the Line( command can be a color name or ID number:

```ti-basic
:Line(5,5,20,3,BROWN
```

The last argument, line style, is an optional argument that chooses what style of line to draw on the color calculators.

```ti-basic
1 pixel wide line
:Line(5,5,20,3,RED,1
2 pixel wide line
:Line(5,5,20,3,RED,2
shaded above
:Line(5,5,20,3,RED,3
shaded below
:Line(5,5,20,3,RED,4
```

## Command Timings

If you are drawing horizontal or vertical lines that stretch the entire graph screen, such as a border, it is better to use [Vertical](Vertical.md) or [Horizontal](Horizontal.md). These are smaller and are usually faster as well.

## Related Commands

*   [Vertical](Vertical.md)
*   [Horizontal](Horizontal.md)

## See Also

*   [Friendly Graphing Window](Friendly Graphing Window.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


