| Property      | Value |
|---------------|-------|
| Hex Value     | `$F2`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [V](<../categories/Catalog.md#V>)</li><li>[Statistics](<../categories/Statistics.md>) > [Operations](<../categories/Statistics.md#Operations>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Stats 1-Var `</li></ul> |

# `1-Var Stats `

## Description
Performs one-variable analysis on the data in `Xlistname` with frequency `freqlist`.


<b>Availability</b>: Token available everywhere.

## Syntax
`1-VarStats [Xlistname,freqlist]`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td>Xlistname</td><td>list</td><td><b>No</b></td></tr>

<tr><td>freqlist</td><td>list</td><td><b>No</b></td></tr>

</table>

## Location
<tt><kbd><b>stat</b></kbd></tt>, `CALC`, `1:1-Var Stats`
<hr>

This command calculates a bunch of common (and a few uncommon) statistics for a [list](/lists) (it uses L1 by default, but you can use any list by supplying it as an argument). You have to store the list to a variable first, though, before calculating statistics for it. For example:

```ti-basic
:{5,12,7,8,4,9→L1
:1-Var Stats
```

Like other statistical commands, you can use a frequency list as well, for cases where one element occurs more times than another (you can do this with a normal list, too, but that might be inconvenient when an element occurs very many times). For example:

```ti-basic
:{1,2,3→L1
:{5,3,2→L2
:1-Var Stats L1,L2
```

  
is the frequency-list equivalent of:

```ti-basic
:{1,1,1,1,1,2,2,2,3,3→L1
:1-Var Stats
```

When you're running it from the home screen, 1-Var Stats will display the statistics; this won't happen if you do it inside a program. Either way, it will also store what it calculated to the statistics variables found in VARS>Statistics… The variables 1-Var Stats affects are:

*   $\overline{\textrm{x}}$ is the mean (average) of the elements, as returned by [mean(](/mean)
*   Σx is the sum of the elements, as returned by [sum(](/sum)
*   Σx² is the sum of the squares of the elements
*   Sx is the sample standard deviation, as returned by [stdDev(](/stddev)
*   σx is population standard deviation
*   n is the number of elements in the list, as returned by [dim(](/dim)
*   minX is the minimum value, as returned by [min(](/min)
*   Q1 is the first quartile
*   Med is the median, as returned by [median(](/median)
*   Q3 is the third quartile
*   maxX is the maximum value, as returned by [max(](/max)

1-Var Stats will not work with "reserved" list names that the calculator uses internally. The only known such reserved list is the list RESID, and there's no reason to suspect there are any others. Ans, TblInput, and any expression which resolves to a list, are also not appropriate for this command: store all of these to a list before doing 1-Var Stats on them.

## Optimization

Aside from statistical analysis, 1-Var Stats can also be used when you want to use the values it calculates more than once. This will save on size, since, for example Σx takes up less space than sum(L1), but considering how many calculations 1-Var Stats makes, it will usually be slower. Here's a short example which saves 1 byte:

```ti-basic
:Disp "RANGE:",max(L1)-min(L1
can be
:1-Var Stats
:Disp "RANGE:",maxX-minX
```

## Related Commands

*   [2-Var Stats](/2-var-stats)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


