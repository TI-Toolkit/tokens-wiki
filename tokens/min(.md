| Property      | Value |
|---------------|-------|
| Hex Value     | `$1A`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [M](<../categories/Catalog.md#M>)</li><li>[Math](<../categories/Math.md>) > [Number](<../categories/Math.md#Number>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `min(`</li></ul> |

# `min(`

## Description
Returns smaller of `valueA` and `valueB`.


<b>Availability</b>: Token available everywhere.

## Syntax
`min(valueA,valueB)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>valueA</b></td><td></td><td>Yes</td></tr>

<tr><td><b>valueB</b></td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>math</b></kbd></tt>, `NUM`, `6:min(`
<hr>

## Description
Returns smallest real or complex element in `list`.


<b>Availability</b>: Token available everywhere.

## Syntax
`min(list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>list</b></td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `1:min(`
<hr>

## Description
Returns real or complex list of the smaller of each pair of elements in `listA` and `listB`.


<b>Availability</b>: Token available everywhere.

## Syntax
`min(listA,listB)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>listA</b></td><td>list</td><td>Yes</td></tr>

<tr><td><b>listB</b></td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `1:min(`
<hr>

## Description
Returns a real or complex list of the smaller of `value` or each `list` element.


<b>Availability</b>: Token available everywhere.

## Syntax
`min(value,list)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>value</b></td><td></td><td>Yes</td></tr>

<tr><td><b>list</b></td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `MATH`, `1:min(`
<hr>

min(_x_,_y_) returns the smallest of the two numbers _x_ and _y_. min(_list_) returns the smallest element of _list_. min(_list1_,_list2_) returns the pairwise minima of the two lists. min(_list1_,_x_) (equivalently, min(_x_,_list1_)) returns a list whose elements are the smaller of _x_ or the corresponding element of the original list.

```ti-basic
min(2,3)
     2
min({2,3,4})
     2
min({1,3},{4,2})
     {1 2}
min({1,3},2)
     {1 2}
```

Unlike [relational operators](/operators#relational), such as < and >, min( can also compare complex numbers. To do this, both arguments must be complex — either complex numbers or complex lists: min(2,𝑖) will throw a [ERR:DATA TYPE](/errors#datatype) error even though min(2+0𝑖,𝑖) won't. In the case of complex numbers, the number with the smallest absolute value will be returned. When the two numbers have the same absolute value, the second one will be returned: min(𝑖,-𝑖) returns -𝑖 and min(-𝑖,𝑖) returns 𝑖.

## Advanced Uses

min( can be used in Boolean comparisons to see if every value of a list is 1 (true) — useful because commands like [If](/if) or [While](/while) only deal with numbers, and not [lists](/lists), but comparisons like L1=L2 return a list of values. In general, the behavior you want varies, and you will use the min( or [max(](/max) functions accordingly.

Using min( will give you a strict test — only if every single value of a list is true will min( return true. For example, the following code will test if two lists are identical — they have the same exact elements — and print EQUAL in that case:

```ti-basic
:If dim(L1)=dim(L2
:Then
:If min(L1=L2
:Disp "EQUAL
:End
```

The first check, to see if the sizes are identical, is necessary because otherwise comparing the lists will return a [ERR:DIM MISMATCH](/errors#dimmismatch) error.

## Error Conditions

*   **[ERR:DATA TYPE](/errors#datatype)** is thrown when comparing a real and a complex number. This can be avoided by adding 0𝑖 to the real number.
*   **[ERR:DIM MISMATCH](/errors#dimmismatch)** is thrown, when using min( with two lists, if they have different dimensions.

## Related Commands

*   [max(](/max)
*   [sum(](/sum)
*   [prod(](/prod)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


