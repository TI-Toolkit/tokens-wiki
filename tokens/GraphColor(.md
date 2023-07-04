| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF65`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `CouleurGraph(`</li></ul> |

# `GraphColor(`

## Description
Sets the color for `function#`.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`GraphColor(function#,color#)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>function#</b></td><td></td><td></td></tr>

<tr><td><b>color#</b></td><td>colorNum</td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `CTL`, `H:GraphColor(`
<hr>

The <tt>GraphColor(</tt> command will change the color of any function from <tt>Y<sub>0</sub></tt> to <tt>Y<sub>9</sub></tt>. So, for example, to change the color of <tt>Y<sub>3</sub></tt> to NAVY, do:

```ti-basic
GraphColor(3,NAVY
```

  
Notice, you must use the number of the function, rather than the entire function name, which would be <tt>Y<sub>3</sub></tt>.

As you may know, you can also use the value of the color, which can be any integer between 10 and 24. So, our last command could also be:

```ti-basic
GraphColor(3,17
```

## Related Commands

*   <tt><a href="GraphStyle(.md">GraphStyle(</a></tt>
*   <tt><a href="BorderColor.md">BorderColor</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: kg583, Michael2_3B.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CSE</b> | 4.0 | Added |


