| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB58`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [S](<../categories/Catalog.md#S>)</li><li>[List](<../categories/List.md>) > [Ops](<../categories/List.md#Ops>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Sélect(`</li></ul> |

# `Select(`

## Description
Selects one or more specific data points from a scatter plot or xyLine plot (only), and then store's the selected data points to two new lists, `Xlistname` and `Ylistname`.


<b>Availability</b>: Token available everywhere.

## Syntax
`Select(Xlistname,Ylistname)`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>Xlistname</b></td><td>list</td><td></td></tr>

<tr><td><b>Ylistname</b></td><td>list</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>list</kbd>, `OPS`, `8:Select(`
<hr>

When Select( is called, if it has any [Scatter](/plotn#scatter) or [xyLine](/plotn#xyline) plots to work with, it displays the graph screen and allows the user to pick a left bound and then a right bound on one of the plots (the left and right keys move from point to point, while the up and down keys switch plots). Then, it stores all the points between those bounds to _x-list name_ and _y-list name_. Finally, it sets the chosen plot to use _x-list name_ and _y-list name_ as its X and Y lists.

## Optimization

It isn't necessary to add the ʟ symbol before list names:

```ti-basic
:Select(ʟX,ʟY)
can be
:Select(X,Y)
```

## Error Conditions

*   **[ERR:INVALID](/errors#invalid)** is thrown if there are no enabled Scatter or xyLine plots for the command to work with.

## Related Commands

*   [Plot1(](/plotn), [Plot2(](/plotn), [Plot3(](/plotn)
*   [Input](/input)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


