| Property      | Value |
|---------------|-------|
| Hex Value     | `$F3`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [V](<../categories/Catalog.md#V>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Stats 2-Var `</li></ul> |

# `2-Var Stats `

## Description
Performs two-variable analysis on the data in `Xlistname` and `Ylistname` with frequency `freqlist`.


<b>Availability</b>: Token available everywhere.

## Syntax
`2-VarStats [Xlistname,Ylistname,freqlist]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>Xlistname</td><td>list</td><td>Yes</td></tr>

<tr><td>Ylistname</td><td>list</td><td>Yes</td></tr>

<tr><td>freqlist</td><td>list</td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `CALC`, `2:2-Var Stats`
<hr>

This command calculates a bunch of common (and a few uncommon) statistics for a pair of [lists](lists.md) (it uses L1 and L2 by default, but you can use any list by supplying it as an argument). You have to store the lists to variables first, though, before calculating statistics for them. For example:

```ti-basic
:{5,12,7,8,4,9→L1
:{1,0,2,5,7,4→L2
:2-Var Stats
```

The calculator treats the two lists as a list of ordered pairs. Some of the statistics calculated assume that this is the case, and the two lists are the same size: an error will occur if the lists don't match.

Like other statistical commands, you can use a frequency list as well, for cases where one element occurs more times than another (you can do this with a normal list, too, but that might be inconvenient when an element occurs very many times). There is only one frequency list for both data lists, and the frequency applies to the ordered pair formed by an element taken from each list. For example:

```ti-basic
:{1,2,3→L1
:{1,2,3→L2
:{5,3,2→L3
:2-Var Stats L1,L2,L3
```

  
is the frequency-list equivalent of:

```ti-basic
:{1,1,1,1,1,2,2,2,3,3→L1
:{1,1,1,1,1,2,2,2,3,3→L2
:2-Var Stats
```

When you're running it from the home screen, 2-Var Stats will display the statistics; this won't happen if you do it inside a program. Either way, it will also store what it calculated to the statistics variables found in VARS>Statistics… The variables 2-Var Stats affects are:

*   $\definecolor{darkgreen}{rgb}{0.90,0.91,0.859}\pagecolor{darkgreen} \overline{\textrm{x}}$ is the mean (average) of the first list
*   Σx is the sum of the first list
*   Σx² is the sum of the squares of the first list
*   Sx is the sample standard deviation of the first list
*   σx is population standard deviation of the first list
*   minX is the minimum element of the first list
*   maxX is the maximum element of the first list
*   $\definecolor{darkgreen}{rgb}{0.90,0.91,0.859}\pagecolor{darkgreen} \overline{\textrm{y}}$ is the mean (average) of the second list
*   Σy is the sum of the second list
*   Σy² is the sum of the squares of the second list
*   Sy is the sample standard deviation of the second list
*   σy is population standard deviation of the second list
*   minY is the minimum element of the second list
*   maxY is the maximum element of the second list
*   Σxy is the sum of products of each matching pair of elements in the lists
*   n is the number of elements in both lists

2-Var Stats will not work with "reserved" list names that the calculator uses internally. The only known such reserved list is the list RESID, and there's no reason to suspect there are any others. Ans, TblInput, and any expression which resolves to a list, are also not appropriate for this command: store all of these to a list before doing 2-Var Stats on them.

## Advanced uses

If you consider the two lists to be vectors, then Σxy is their dot product, and Σx² and Σy² are the squares of their norms; math done with these and other statistics can produce the shortest (but not necessarily quickest) way to calculate many vector operations.

## Optimization

Aside from statistical analysis, 2-Var Stats can also be used when you want to use the values it calculates more than once. This will save on size, since, for example Σx takes up less space than sum(L1), but considering how many calculations 2-Var Stats makes, it will usually be slower.

## Related Commands

*   [1-Var Stats](1-Var Stats.md)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


