| Property      | Value |
|---------------|-------|
| Hex Value     | `$A7`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [T](<../categories/Catalog.md#T>)</li><li>[Drawing](<../categories/Drawing.md>) > [Commands](<../categories/Drawing.md#Commands>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Tangente(`</li></ul> |

# `Tangent(`

## Description
Draws a line tangent to `expression` at `X`=`value` with specified `color` #: 10-24 and line style `linestyle #: `1-2.
Color#: 10 - 24 or color name pasted from [vars] COLOR.


<b>Availability</b>: Token available everywhere.

## Syntax
`Tangent(expression,value[,color#,linestyle#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>expression</b></td><td>expression</td><td></td></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

<tr><td>color#</td><td>colorNum</td><td>Yes</td></tr>

<tr><td>linestyle#</td><td>integer</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>draw</kbd>, `DRAW`, `5:Tangent(`
<hr>

The Tangent( command draws a graph of an expression and then draws a line tangent to that expression, with the line touching the graph at the point of the specified value. You can either use a [equation variable](/system-variables#equation) (such as Y<sub>1</sub>) or an expression in terms of X (such as X²). Though you can use equation variables from any [graphing mode](/graphing-mode), they will be treated as functions in terms of X. Tangent( also ignores the graphing mode currently selected.

Here is a simple example, where we are graphing the [parabola](http://en.wikipedia.org/wiki/parabola) X<sup>2</sup> and then drawing a tangent line at the value X=2.

```ti-basic
:"X²→Y₁
:Tangent(Y₁,2
```

  
or

```ti-basic
:Tangent(X²,2
```

## Advanced Uses

Whether the graph shows up or not is dependent on the window dimensions of the graph screen, and you should use a [friendly window](/friendly-window) to ensure it shows up as you intended.

* * *

Tangent( will update X and Y for each coordinate drawn (like [DrawF](/drawf) and [DrawInv](/drawinv)), and exit with the last coordinate still stored.

* * *

When evaluating the expression using Tangent(, the calculator will ignore the following errors: [ERR:DATA TYPE](/errors#datatype), [ERR:DIVIDE BY 0](/errors#divideby0), [ERR:DOMAIN](/errors#domain), [ERR:INCREMENT](/errors#increment), [ERR:NONREAL ANS](/errors#nonrealans), [ERR:OVERFLOW](/errors#overflow), and [ERR:SINGULAR MAT](/errors#singularmat). If one of these errors occurs, the data point will be omitted. However, the errors will still be thrown if they occur when evaluating the function _at_ the point of tangency.

* * *

Using [Ans](/ans) as an optimization for storing to an equation will not work. For example, the following code returns [ERR:DATA TYPE](/errors#datatype) because Ans is a string, not an equation variable.

```ti-basic
:"X²
:Tangent(Ans,2
```

Of course, you _can_ use Ans in the equation, if it's a real number, but that's usually not as useful.

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** is thrown if you try to use an equation variable that is undefined.

## Related Commands

*   [DrawF](/drawf)
*   [DrawInv](/drawinv)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


