| Property      | Value |
|---------------|-------|
| Hex Value     | `$B5`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [D](<../categories/Catalog.md#D>)</li><li>[List](<../categories/List.md>) > [Ops](<../categories/List.md#Ops>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `dim(`</li></ul> |

# `dim(`

## Description
Returns the dimension of `listname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`dim(listname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listname</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `3:dim(`
<hr>

## Description
Returns the dimension of `matrixname` as a list.


<b>Availability</b>: Token available everywhere.

## Syntax
`dim(matrixname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>matrixname</b></td><td>matrix</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `3:dim(`
<hr>

## Description
Assigns a new dimension (`length`) to a new or existing `listname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`length→dim(listname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>length</b></td><td>integer</td><td></td></tr>

<tr><td><b>listname</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `3:dim(`
<hr>

## Description
Assigns new dimensions to a new or existing `matrixname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`{rows,columns}→dim(matrixname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>rows</b></td><td>integer</td><td></td></tr>

<tr><td><b>columns</b></td><td>integer</td><td></td></tr>

<tr><td><b>matrixname</b></td><td>matrix</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>matrix</kbd>, `MATH`, `3:dim(`
<hr>

The <tt>dim(</tt> command is used to find the size of an existing list or matrix. It takes only one argument - the list or matrix you want the size of. For a list, it returns the number of elements; for a matrix, it returns a two-element list of the number of rows and the number of columns.

```ti-basic
:dim(L1
    5
:dim([A]
    {2,3}
```

The <tt>dim(</tt> command can also be used to change the size of a list or matrix; this is perhaps its most important use. To do this, just store the desired size to the list or matrix (the <tt>dim(</tt> command is the only one you can store in as though it were a variable).

```ti-basic
:7→dim(L1
:{2,2→dim([A]
```

For a list, if this increases the size, zero elements will be added to the end of the list; if this decreases the size, elements will be removed starting from the end.

For a matrix, if this increases the number of rows or columns, new rows or columns filled with zeros will be added to the bottom and right respectively. If this decreases the number of rows and columns, those rows and columns will be removed starting from the bottom (for rows) and right (for columns).

If a list or matrix doesn't exist before its size is changed, the <tt>dim(</tt> command will actually create it with the correct size. All the elements, in this case, will be set to 0.

## Advanced Uses

In the case of lists, the <tt>dim(</tt> command is used in adding an element to the end of a list. Although <tt><a href="augment(.md">augment(</a></tt> can be used for the same task, <tt>dim(</tt> is faster - but takes more memory. For example, to add the element 5 to the end of L1:

```ti-basic
:5→L1(1+dim(L1
```

It's also possible, using the <tt>dim(</tt> command, to set the size of a list to 0. In this case, the list exists, but doesn't take up any memory, and cannot be used in expressions (similar to the output of <tt><a href="ClrList.md">ClrList</a></tt>). This is not really useful.

## Optimization

When creating a list or matrix using <tt>dim(</tt>, all the elements are preset to 0; this can be used in place of the <tt><a href="Fill(.md">Fill(</a></tt> command to set a list or matrix to a bunch of zeros in a program. Since we don't usually know for sure that the list or matrix doesn't exist, we must first delete it with <tt><a href="DelVar.md">DelVar</a></tt>.

```ti-basic
:{5,5→dim([A]
:Fill(0,[A]
can be
:DelVar [A]{5,5→dim([A]
```

## Error Conditions

*   **[ERR:INVALID DIM](errors#invaliddim)** is thrown if you try to make a list or matrix bigger than 999 or 99x99 elements respectively, or if you try to create a matrix that isn't 2-dimensional.

## Related Commands

*   <tt><a href="length(.md">length(</a></tt>
*   <tt><a href="Fill(.md">Fill(</a></tt>
*   <tt><a href="augment(.md">augment(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | `dim ` added |
| <b>TI-83</b> | 0.01013 | Renamed `dim ` to `dim(`


