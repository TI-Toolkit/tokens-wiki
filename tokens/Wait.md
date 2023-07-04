| Property      | Value |
|---------------|-------|
| Hex Value     | `$EF96`|
| Categories    | <ul></ul> |
| Localizations | <ul><li><b>FR</b>: `Wait `</li></ul> |

# `Wait `

## Description
Suspends execution of a program for a given time.  Maximum time is 100 seconds.

<b>Comment</b>:CE OS 5.2+

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Waittime`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>time</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `A:Wait`
<hr>

## Description
Suspends execution of a program for a given time.  Maximum time is 100 seconds.

<b>Comment</b>:CE OS 5.2+

<b>Availability</b>: Token only available from within the Basic editor.

## Syntax
`Waittime`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>time</b></td><td></td><td></td></tr>

</table>

## Location
<tt><kbd><b>prgm</b></kbd></tt>, `4:Wait`
## Special Category
TI-Innovator™ Hub

<hr>

The Wait command was introduced in TI-OS 5.2 for the TI-84+CE. The Wait command tells the calculator to wait for a specified number of seconds before continuing. The specified amount of seconds can be a decimal, as it is not limited to whole numbers. This command can be useful for displaying information momentarily before proceeding in a program. The Wait command functions similarly to the [Pause](Pause.md) command, but without the extra arguments.

```ti-basic
:Disp "WAIT FOR IT!
:Wait 4
:Disp "Surprise
```

## Advanced Uses

The Wait command is useful for facilitating automatic linking within programs. Since the [Get(](Get\(.md) and [GetCalc(](GetCalc\(.md) commands only work when the sending calculator is in a preemptible state, including a small Wait delay will allow the other calculator to receive data.

Because the Wait command is relatively new, it may be advisable to avoid using it to ensure compatibility with older operating systems. Similar functionality can be achieved with the second optional argument to the [Pause](Pause.md) command.

## Optimization

Traditionally it was recommended to use either a For( loop or the rand( command to create a delay within a program. The For( loop takes more space, and the rand( command uses more memory during execution.

```ti-basic
:rand(100
can be
:Wait 1
```

## Error Conditions

*   **[ERROR: INVALID](errors#invalid)** is thrown if the Wait command is executed on the home screen.

## Related Commands

*   [Pause](Pause.md)
*   [Menu(](Menu\(.md)

* * *

**Source**: parts of this page were written by the following TI|BD contributors: Battlesquid, jonbush, Michael2_3B.

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-84+CE</b> | 5.2.0 | Added |


