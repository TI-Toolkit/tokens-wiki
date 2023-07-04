| Property      | Value |
|---------------|-------|
| Hex Value     | `$19`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [M](<../categories/Catalog.md#M>)</li><li>[Math](<../categories/Math.md>) > [Number](<../categories/Math.md#Number>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `max(`</li></ul> |

# `max(`

## Overview
Returns the larger of `valueA` and `valueB`.


<b>Availability</b>: Token available everywhere.

## Syntax
`max(valueA,valueB)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>valueA</b></td><td></td><td></td></tr>

<tr><td><b>valueB</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `7:max(`
<hr>

## Overview
Returns the larger of `valueA` and `valueB`.


<b>Availability</b>: Token available everywhere.

## Syntax
`max(list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `7:max(`
<hr>

## Overview
Returns largest real or complex element in `list`.


<b>Availability</b>: Token available everywhere.

## Syntax
`max(list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `2:max(`
<hr>

## Overview
Returns a real or complex list of the larger of each pair of elements in `listA` and `listB`.


<b>Availability</b>: Token available everywhere.

## Syntax
`max(listA,listB)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listA</b></td><td>list</td><td></td></tr>

<tr><td><b>listB</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `2:max(`
<hr>

## Overview
Returns a real or complex list of the larger of `value` or each `list` element.


<b>Availability</b>: Token available everywhere.

## Syntax
`max(value,list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td></td></tr>

<tr><td><b>list</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `2:max(`
<hr>

## Description

<tt>max(X,Y)</tt> returns the largest of the two numbers <tt>X</tt> and <tt>Y</tt>. <tt>max(<em>list</em>)</tt> returns the largest element of _list_. <tt>max(<em>list1</em>,<em>list2</em>)</tt> returns the pairwise maxima of the two lists. <tt>max(<em>list1</em>,X)</tt> (equivalently, <tt>max(X,<em>list1</em>)</tt>) returns a list whose elements are the larger of <tt>X</tt> or the corresponding element of the original list.

```ti-basic
max(2,3)
     3
max({2,3,4})
     4
max({1,3},{4,2})
     {4 3}
max({1,3},2)
     {2 3}
```

Unlike comparison operators such as < and >, <tt>max(</tt> can also compare complex numbers. To do this, both arguments must be complex — either complex numbers or complex lists: <tt>max(2,𝑖)</tt> will throw an error even though <tt>max(2+0𝑖,𝑖)</tt> won't. In the case of complex numbers, the number with the largest absolute value will be returned. When the two numbers have the same absolute value, the first one will be returned: <tt>max(𝑖,-𝑖)</tt> returns 𝑖 and <tt>max(-𝑖,𝑖)</tt> returns -𝑖.

## Advanced Uses

<tt>max(</tt> can be used in Boolean comparisons to see if at least one of a list is 1 (true) — useful because commands like <tt><a href="If.md">If</a></tt> or <tt><a href="While.md">While</a></tt> only deal with numbers, and not lists, but comparisons like <tt>L₁=L₂</tt> return a list of values. In general, the behavior you want varies, and you will use the <tt><a href="min(.md">min(</a></tt> function or the <tt>max(</tt> function accordingly.

Using <tt>max(</tt> will give you a lenient test — if any one element of the list is 1 (true), then the <tt>max(</tt> of the list is true — this is equivalent to putting an <tt><a href="or.md">or</a></tt> in between every element. For example, this tests if K is equal to any of 24, 25, 26, or 34 (the <tt><a href="getKey.md">getKey</a></tt> arrow key values):

```ti-basic
:If max(K={24,25,26,34
:Disp "ARROW KEY
```

To get the element of a real list in <tt><a href="Ans.md">Ans</a></tt> with the greatest absolute value, use <tt>imag(max(𝑖Ans))</tt> or <tt>max(abs(Ans))</tt>.

<tt>max(</tt> can be also used along with <tt>min(</tt> to constrain a value between a lower and upper number:

```ti-basic
:max(-1,min(1,100)) // returns 1 because 1 is between -1 & 100
:max(-1,min(1,0)) // returns 0 because 1 is not between -1 & 0
```

where the bounds for which the number 1 must fall between are first argument of <tt>max(</tt> and the second argument of <tt>min(</tt> in the above code.

## Error Conditions

*   **[ERR:DATA TYPE](errors#datatype)** is thrown when comparing a real and a complex number. This can be avoided by adding +0𝑖 to the real number (or _i^4_ right after it, for those who are familiar with complex numbers)
*   **[ERR:DIM MISMATCH](errors#dimmismatch)** is thrown, when using <tt>max(</tt> with two lists, if they have different dimensions.

## Related Commands

*   <tt><a href="min(.md">min(</a></tt>
*   <tt><a href="sum(.md">sum(</a></tt>
*   <tt><a href="prod(.md">prod(</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, coltonj96, DarkerLine, GoVegan, kg583, lirtosiast, Mapar007, simplethinker.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


