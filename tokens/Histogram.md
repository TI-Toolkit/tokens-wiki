| Property      | Value |
|---------------|-------|
| Hex Value     | `$FC`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [H](<../categories/Catalog.md#H>)</li><li>[Stat Plot](<../categories/Stat Plot.md>) > [Type](<../categories/Stat Plot.md#Type>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Histogramme`</li></ul> |

# `Histogram`

## Description
Used as the "type" argument in the command
Where # gives Plot1, Plot2 or Plot3.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Plot#(type,Xlist[,freqlist,color#])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>type</b></td><td>Histogram token</td><td></td></tr>

<tr><td><b>Xlist</b></td><td>list</td><td></td></tr>

<tr><td><b>freqlist</b></td><td>list</td><td></td></tr>

<tr><td><b>color#</b></td><td>colorNum</td><td></td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>stat plot</kbd>, `TYPE`
<hr>

The commands `Plot1(`, `Plot2(`, and `Plot3(`, which are identical except for which stat plot (1, 2, or 3) they affect, define their corresponding stat plot. When the stat plot is defined, it is also turned on so no [PlotsOn](/plotson) command is necessary.

The first argument of the commands is always the type of plot, and is one of [Scatter](/plotn#scatter), [xyLine](/plotn#xyline), [Histogram](/plotn#histogram), [Boxplot](/plotn#boxplot), [ModBoxplot](/plotn#modboxplot), and [NormProbPlot](/plotn#normprobplot) - these types are found in the TYPE submenu of the stat plot menu. The other arguments vary. For all but `Histogram` and `Boxplot`, there is a _mark_ argument - this is a dot, a cross, or a box, symbols that can be found in the MARK submenu of the stat plot menu. On color calculators, there is an optional final argument to specify the color of the plot.

### Scatter plot

Plot#(Scatter, _x-list_, _y-list_, _mark_) defines a scatter plot. The points defined by _x-list_ and _y-list_ are plotted using _mark_ on the graph screen.

_x-list_ and _y-list_ must be the same length.

### xyLine plot

Plot#(xyLine, _x-list_, _y-list_, _mark_) defines an `xyLine` plot. Similarly to a scatter plot, the points defined by _x-list_ and _y-list_ are plotted using _mark_ on the graph screen, but with an `xyLine` plot they are also connected by a line, in the order that they occur in the lists.

_x-list_ and _y-list_ must be the same length.

### Histogram plot

Plot#(Histogram, _x-list_, _freq list_) defines a `Histogram` plot. The x-axis is divided into intervals that are [Xscl](/system-variables#window) wide. A bar is drawn in in each interval whose height corresponds to the number of points in the interval. Points that are not between [Xmin](/system-variables#window) and [Xmax](/system-variables#window) are not tallied.

Xscl must not be too small - it can divide the screen into no more than 47 different bars.

### Box plot

Plot#(Boxplot, _x-list_, _freq list_) defines a box plot. A rectangular box is drawn whose left edge is Q<sub>1</sub> (the first quartile) of the data, and whose right edge is Q<sub>3</sub> (the third quartile). A vertical segment is drawn within the box at the median, and 'whiskers' are drawn from the box to the minimum and maximum data points.

The box plot ignores the [Ymax](/system-variables#window) and [Ymin](/system-variables#window) dimensions of the screen, and any plots that aren't box plots or modified box plots. Each box plot takes approximately 1/3 of the screen in height, and if more than one are plotted, they will take up different areas of the screen.

### Modified box plot

Plot#(ModBoxplot, _x-list_, _freq list_, _mark_) defines a modified box plot. This is almost entirely like the normal box plot, except that it also draws outliers. Whiskers are only drawn to the furthers point within 1.5 times the interquartile range (Q<sub>3</sub>-Q<sub>1</sub>) of the box. Beyond this point, data points are drawn individually, using _mark_.

The box plot ignores the [Ymax](/system-variables#window) and [Ymin](/system-variables#window) dimensions of the screen, and any plots that aren't box plots or modified box plots. Each box plot takes approximately 1/3 of the screen in height, and if more than one are plotted, they will take up different areas of the screen.

### Normal probability plot

Plot#(NormProbPlot, _data list_, _data axis_, _mark_) defines a normal probability plot. The mean and standard deviation of the data are calculated. Then for each point, the number of standard deviations it is from the mean is calculated, and the point is plotted against this number using _mark_. _data axis_ can be either X or Y: it determines whether the value of a point determines it's x-coordinate or y-coordinate.

The point behind this rather convoluted process is to test the extent to which the data is normally distributed. If it follows the normal distribution closely, then the result will be close to a straight line - otherwise it will be curved.

## Advanced Uses

After doing a [regression](/regression-models), a scatter plot of ʟRESID against the x-list is a useful measure of the effectiveness of the regression. If the plot appears random, this is a good sign; if there is a pattern to the plot, this means it's likely that a better regression model exists.

## Optimization

The ʟ symbol at the beginning of list names can be omitted everywhere in this command.

In addition, every element except the plot type and the data list or data lists are optional, and take on the following default values:

*   _freq list_ is 1 by default, meaning that all frequencies are 1.
*   _mark_ is the box by default.
*   _data axis_ is X by default.

## Error Conditions

*   **[ERR:DIM MISMATCH](/errors#dimmismatch)** is thrown if the x and y lists, or the data and frequency lists, have different dimensions.
*   **[ERR:STAT](/errors#stat)** is thrown if Xscl is too small in the case of a Histogram.

All errors are thrown when plotting the stat plot, as opposed to when the command is executed, and do not provide a 2:Goto option.

## Related Commands

*   [Select(](/select)
*   [PlotsOn](/plotson)
*   [PlotsOff](/plotsoff)

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


