| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF6B`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `DétectAsymDés`</li></ul> |

# `DetectAsymOff`

## Description
Turns off checks for rational function asymptotes when graphing. Impacts graph speed. Does not perform extra calculations to detect asymptotes pixel to pixel while graphing.  Pixels will connect across the screen even across an asymptote.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`DetectAsymOff`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>format</kbd>, `DetectAsymOff`
<hr>

When <tt>DetectAsymOff</tt> is selected, the calculator will not detect asymptotes, adjusting the graph accordingly. This method of graphing is much faster than with asymptotes turned on. However, the graph can be erroneous when dealing with rational functions, as it will often draw extra lines to connect points near undefined values.

An asymptote is, by definition, "a line that continually approaches a given curve but does not meet it at any finite distance." Basically, an asymptote is the line where a function does not have any values on a certain axis.

## Related Commands

*   <tt><a href="DetectAsymOn.md">DetectAsymOn</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CSE</b> | 4.0 | Added |


