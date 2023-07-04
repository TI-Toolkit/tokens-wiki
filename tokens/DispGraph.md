| Property      | Value |
|---------------|-------|
| Hex Value     | `$DF`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[Program](<../categories/Program.md>) > [I/O](<../categories/Program.md#I/O>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `AffGraph`</li></ul> |

# `DispGraph`

## Description
Displays the graph.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`DispGraph`

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `I/O`, `4:DispGraph`
<hr>

The <tt>DispGraph</tt> command displays the graph screen, along with everything drawn or graphed on it.

In many cases, this doesn't need to be done explicitly: commands from the 2nd DRAW menu, as well as many other graph screen commands, will display the graph screen automatically when they are used. Mainly, it's used for displaying the graphs of equations or plots in a program — you would define the variable in question, then use <tt>DispGraph</tt> to graph it. For example:

```ti-basic
:"sin(X)"→Y1
:DispGraph
```

## Advanced Uses

<tt>DispGraph</tt> can also be used to update the graph screen, even if it's already being displayed. For example, changing the value of a plot or equation variable doesn't update the graph immediately. Consider this program:

```ti-basic
:0→I
:"Isin(X)"→Y1
:DispGraph
:For(I,1,10)
:End
```

At first, it graphs the equation Y=Isin(X) with I=0. After this, I is cycled from 1 to 10. However, though the parameter I changes, the graph screen isn't updated, and only the initial graph of Y=0sin(X) and final graph of Y=10sin(X) are displayed. If, on the other hand, we change the program:

```ti-basic
:0→I
:"Isin(X)"→Y1
:DispGraph
:For(I,1,10)
:DispGraph
:End
```

Now the <tt>DispGraph</tt> inside the loop ensures that the graph screen is updated every time, and the program will correctly display all eleven graphs.

## Error Conditions

*   **[ERR:INVALID](errors#invalid)** occurs if this statement is used outside a program.

## Related Commands

*   <tt><a href="Disp.md">Disp</a></tt>
*   <tt><a href="DispTable.md">DispTable</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, kg583.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


