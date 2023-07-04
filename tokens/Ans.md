| Property      | Value |
|---------------|-------|
| Hex Value     | `$72`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [A](<../categories/Catalog.md#A>)</li><li>[Keypad](<../categories/Keypad.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Rep`</li></ul> |

# `Ans`

## Description
Returns the last answer.


<b>Availability</b>: Token available everywhere.

## Syntax
`Ans`

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>ans</kbd>
<hr>

The <tt>Ans</tt> variable holds the last answer that was stored in the calculator. Because <tt>Ans</tt> is stored in a special storage area built-in to the calculator, and it is extensively used by the calculator, you cannot delete it. Ans is also useful; it can make your programs both smaller and faster:

*   Unlike other variables which have a value type hard-coded in (i.e., a [string](strings) can only hold text, and [lists](lists.md) and [matrices](matrices.md) can only hold numbers), <tt>Ans</tt> can take on whatever value you want: a real or complex, list, matrix, or string are all acceptable.
*   Along with the [finance](system-variables#finance) variables, <tt>Ans</tt> is faster than the real, complex, list, matrix, and string variables; and subsequently, you should try to use it as much as possible.

One of the most common places to use <tt>Ans</tt> is in place of storing a value to a variable. Just paste the <tt>Ans</tt> variable to the location where the variable was called, and then when the expression is evaluated, the calculator will use the current value of <tt>Ans</tt>. Using the <tt>Ans</tt> variable allows you to eliminate the variable, which helps save a little or a lot of memory (depending on the type of variable and its size).

```ti-basic
30+5A→B
Disp 25A,30+5A
;can be
30+5A
Disp 25A,Ans
```

The one major drawback to using <tt>Ans</tt> is that its current value is only temporary. Whenever you [store](store.md) a value to a variable, place an expression or string on a line by itself, or use the optional argument of the <tt><a href="Pause.md">Pause</a></tt> command, <tt>Ans</tt> is updated to the new value. This restriction essentially limits your use of <tt>Ans</tt> to only a single variable. If you are manipulating two or more variables, it's best to just use the variables.

There are several cases in which changing the value of a variable does not modify <tt>Ans</tt>, thus preserving its current value for later use:

*   storing to an [equation variable](system-variables#equation)
*   using the <tt><a href="DelVar.md">DelVar</a></tt> command to delete a variable (i.e., set its value to zero, if it's a real variable)
*   changing the value with <tt><a href="IS(.md">IS&gt;(</a></tt> or <tt><a href="DS(.md">DS&lt;(</a></tt>.
*   initializing or changing the value in a <tt><a href="For(.md">For(</a></tt> loop.

These cases can be very useful, allowing you to use Ans to store an expression rather than create a temporary variable for it.

## Timing

Storing a real value into <tt>Ans</tt> takes approximately 1.0 ms. This does not include the time needed to compute or retrieve the value, which may be significant.

* * *

**Source**: parts of this page were written by the following TI|BD contributors: alexrudd, burr, DarkerLine, GoVegan, kg583, lirtosiast, Myles_Zadok, rileyp, Timothy Foster, Trenly.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-82</b> | 1.0 | Added |


