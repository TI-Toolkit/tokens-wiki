| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB4D`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [R](<../categories/Catalog.md#R>)</li><li>[Mode](<../categories/Mode.md>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `Réel`</li></ul> |

# `Real`

## Overview
Sets mode to display complex results only when you enter complex numbers.


<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Real`

## Location
<tt><kbd><b>mode</b></kbd></tt>, `Real`
<hr>

## Description

The Real command puts the calculator in real number-only mode. This shouldn't be taken quite literally, as you can still type in 𝑖 to get complex numbers, and do operations with them (they will be displayed as in [a+b𝑖](a-bi) mode, in that case). However, any operation done with **real** numbers that comes out to a complex result, such as taking the square root of a negative number, will throw a [ERR:NONREAL ANS](errors#nonrealans) error.

There is no real advantage to using Real mode over a+b𝑖 mode — it just adds another error condition that wouldn't be triggered otherwise. However, it is the default setting, and so there's a good chance that the calculator will be in Real mode when someone runs your program. Thus, when using complex numbers implicitly (such as in a quadratic equation solver) you should do something about this.

## Advanced Uses

Rather than switch to a+b𝑖 mode, you might want to force the calculations to use complex numbers by making the original argument complex. The general way to do this is by adding +0i to the number. However, there may be an optimization in any particular case. See the [quadratic formula](quadratic-formula) routine for a good example of this.

```ti-basic
Real
        Done
√(-1)    
        (causes an error)
√(-1+0i)        
        i
```

## Related Commands

*   [a+b𝑖](a+b𝑖.md)
*   [r𝑒^θ𝑖](r𝑒^θ𝑖.md)

## See Also

*   [Quadratic Formula](Quadratic Formula.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: burr, DarkerLine, GoVegan.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


