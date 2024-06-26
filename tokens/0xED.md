| Property      | Value |
|---------------|-------|
| Hex Value     | `$ED`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [P](<../categories/Catalog.md#P>)</li><li>[Stat Plot](<../categories/Stat Plot.md>) > [Plots](<../categories/Stat Plot.md#Plots>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Graph2(`</li></ul> |

# `Plot2(`

## Overview



<b>Availability</b>: Token available everywhere.

## Syntax
`Plot2(`

<hr>

## Description

The commands <tt>Plot1(</tt>, <tt>Plot2(</tt>, and <tt>Plot3(</tt>, which are identical except for which stat plot (1, 2, or 3) they affect, define their corresponding stat plot. When the stat plot is defined, it is also turned on so no <tt><a href="PlotsOn.md">PlotsOn</a></tt> command is necessary.

The first argument of the commands is always the type of plot, and is one of <tt><a href="Scatter.md">Scatter</a></tt>, <tt><a href="xyLine.md">xyLine</a></tt>, <tt><a href="Histogram.md">Histogram</a></tt>, <tt><a href="Boxplot.md">Boxplot</a></tt>, <tt><a href="ModBoxplot.md">ModBoxplot</a></tt>, and <tt><a href="NormProbPlot.md">NormProbPlot</a></tt> - these types are found in the TYPE submenu of the stat plot menu. The other arguments vary. For all but <tt>Histogram</tt> and <tt>Boxplot</tt>, there is a _mark_ argument - this is a dot, a cross, or a box, symbols that can be found in the MARK submenu of the stat plot menu. On color calculators, there is an optional final argument to specify the color of the plot.

### Scatter plot

Plot#(Scatter, _x-list_, _y-list_, _mark_) defines a scatter plot. The points defined by _x-list_ and _y-list_ are plotted using _mark_ on the graph screen.

_x-list_ and _y-list_ must be the same length.

### xyLine plot

Plot#(xyLine, _x-list_, _y-list_, _mark_) defines an <tt>xyLine</tt> plot. Similarly to a scatter plot, the points defined by _x-list_ and _y-list_ are plotted using _mark_ on the graph screen, but with an <tt>xyLine</tt> plot they are also connected by a line, in the order that they occur in the lists.

_x-list_ and _y-list_ must be the same length.

### Histogram plot

Plot#(Histogram, _x-list_, _freq list_) defines a <tt>Histogram</tt> plot. The x-axis is divided into intervals that are [Xscl](system-variables#window) wide. A bar is drawn in in each interval whose height corresponds to the number of points in the interval. Points that are not between [Xmin](system-variables#window) and [Xmax](system-variables#window) are not tallied.

Xscl must not be too small - it can divide the screen into no more than 47 different bars.

### Box plot

Plot#(Boxplot, _x-list_, _freq list_) defines a box plot. A rectangular box is drawn whose left edge is Q<sub>1</sub> (the first quartile) of the data, and whose right edge is Q<sub>3</sub> (the third quartile). A vertical segment is drawn within the box at the median, and 'whiskers' are drawn from the box to the minimum and maximum data points.

The box plot ignores the [Ymax](system-variables#window) and [Ymin](system-variables#window) dimensions of the screen, and any plots that aren't box plots or modified box plots. Each box plot takes approximately 1/3 of the screen in height, and if more than one are plotted, they will take up different areas of the screen.

### Modified box plot

Plot#(ModBoxplot, _x-list_, _freq list_, _mark_) defines a modified box plot. This is almost entirely like the normal box plot, except that it also draws outliers. Whiskers are only drawn to the furthers point within 1.5 times the interquartile range (Q<sub>3</sub>-Q<sub>1</sub>) of the box. Beyond this point, data points are drawn individually, using _mark_.

The box plot ignores the [Ymax](system-variables#window) and [Ymin](system-variables#window) dimensions of the screen, and any plots that aren't box plots or modified box plots. Each box plot takes approximately 1/3 of the screen in height, and if more than one are plotted, they will take up different areas of the screen.

### Normal probability plot

Plot#(NormProbPlot, _data list_, _data axis_, _mark_) defines a normal probability plot. The mean and standard deviation of the data are calculated. Then for each point, the number of standard deviations it is from the mean is calculated, and the point is plotted against this number using _mark_. _data axis_ can be either X or Y: it determines whether the value of a point determines it's x-coordinate or y-coordinate.

The point behind this rather convoluted process is to test the extent to which the data is normally distributed. If it follows the normal distribution closely, then the result will be close to a straight line - otherwise it will be curved.

## Advanced Uses

After doing a [regression](regression-models), a scatter plot of ʟRESID against the x-list is a useful measure of the effectiveness of the regression. If the plot appears random, this is a good sign; if there is a pattern to the plot, this means it's likely that a better regression model exists.

## Optimization

The ʟ symbol at the beginning of list names can be omitted everywhere in this command.

In addition, every element except the plot type and the data list or data lists are optional, and take on the following default values:

*   _freq list_ is 1 by default, meaning that all frequencies are 1.
*   _mark_ is the box by default.
*   _data axis_ is X by default.

## Error Conditions

*   **[ERR:DIM MISMATCH](errors#dimmismatch)** is thrown if the x and y lists, or the data and frequency lists, have different dimensions.
*   **[ERR:STAT](errors#stat)** is thrown if Xscl is too small in the case of a Histogram.

All errors are thrown when plotting the stat plot, as opposed to when the command is executed, and do not provide a 2:Goto option.

## Related Commands

*   <tt><a href="Select(.md">Select(</a></tt>
*   <tt><a href="PlotsOn.md">PlotsOn</a></tt>
*   <tt><a href="PlotsOff.md">PlotsOff</a></tt>

* * *

**Source**: parts of this page were written by the following TI|BD contributors: DarkerLine, GoVegan, Myles_Zadok.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


