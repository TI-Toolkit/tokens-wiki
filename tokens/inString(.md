| Property      | Value |
|---------------|-------|
| Hex Value     | `$BB0F`|
| Categories    | <ul><li>[Catalog](<../categories/Catalog.md>) > [I](<../categories/Catalog.md#I>)</li></ul> |
| Localizations | <ul><li><b>FR</b>: `carChaine(`</li></ul> |

# `inString(`

## Description
Returns the character position in `string` of the first character of `substring `beginning at `start`.


<b>Availability</b>: Token available everywhere.

## Syntax
`inString(string,substring[,start])`

## Arguments
<table>
<tr><th>Name</th><th>Type</th><th>Optional</th></tr>

<tr><td><b>string</b></td><td>string</td><td></td></tr>

<tr><td><b>substring</b></td><td></td><td></td></tr>

<tr><td>start</td><td></td><td>Yes</td></tr>

</table>

## Location
<tt><kbd><b>2nd</b></kbd></tt>, <kbd>catalog</kbd>, `inString(`
<hr>

The <tt>inString(</tt> command searches a string for occurrences of a smaller string (similar to the Find feature on a computer), and returns the first such occurrence.

The _source string_ is the string you want to search through; the _search string_ is the substring you want to find. <tt>inString(</tt> will return the index of the first letter of the first occurrence of the search string found, or 0 if the search string is not present. For example:

```ti-basic
:inString("TI-BASIC","BASIC
    4
:inString("TI-BASIC","TI
    1
:inString("TI-BASIC","I
    2
:inString("TI-BASIC","ELEPHANT
    0
```

You can also provide the optional _starting point_ argument, 1 by default, that will tell the command where it should start looking. If you provide a value higher than 1 here, the command will skip the beginning of the string. This can be used to find where the search string occurs past the first occurrence. For example:

```ti-basic
:inString("TI-BASIC","I
    2
:inString("TI-BASIC","I",2
    2
:inString("TI-BASIC","I",3
    7
```

## Advanced Uses

You can use <tt>inString(</tt> to convert a character to a number. For example:

```ti-basic
:inString("ABCDEFGHIJKLMNOPQRSTUVWXYZ",Str1→N
```

  
Assuming <tt>Str1</tt> is one character long and contains a capital letter, <tt>N</tt> will hold a value of 1-26 that corresponds to that letter. This value can then be stored in a real number, list, or matrix, where a character of a string couldn't be stored. To get the character value of the number, you can use the <tt><a href="sub(.md">sub(</a></tt> command:

```ti-basic
:sub("ABCDEFGHIJKLMNOPQRSTUVWXYZ",N,1→Str1
```

Using the _starting point_ argument of <tt>inString(</tt>, you can write a routine to return all occurrences of the search string in the source string:

```ti-basic
:0→dim(L1
:inString(Str0,Str1
:Repeat not(Ans
:Ans→L1(1+dim(L1
:inString(Str0,Str1,Ans+1
:End
```

  
If the search string is not found, this routine will return <tt>{0}</tt> in <tt>L₁</tt>. If it is found, the result will be a list of all the places the string was found.

## Optimization

The <tt>inString(</tt> command can replace checking if a string is one of a number of values. Just put all the values in a string, one after the other, and try to find the string to be checked in the string of those values:

```ti-basic
:If Str1="." or Str1=",
can be
:If inString(".,",Str1
```

Be careful, because if <tt>Str1</tt> were <tt>".,"</tt> in the above example, this would also be treated like <tt>"."</tt> or <tt>","</tt>. If this is a problem, you can separate the values you want to check for by a character you know can't be in the string:

```ti-basic
:If Str1="HELLO" or Str1="HI
can be
:If inString("HELLO,HI",Str1
```

  
This approach assumes that a comma would never be in <tt>Str1</tt>, and words like <tt>"HELL"</tt> or <tt>"I"</tt> are also impossible. If words like these _can_ appear in the input, the following works:

```ti-basic
:If inString("HELLO,HI,",Str+",
```

  
(still assumes commas aren't in <tt>Str1</tt>)

## Error Conditions

*   **[ERR:DOMAIN](errors#domain)** is thrown if _starting point_ is not a positive integer (_starting point_ may be longer than the length of the _source string_, though).

## Related Commands

*   <tt><a href="expr(.md">expr(</a></tt>
*   <tt><a href="length(.md">length(</a></tt>
*   <tt><a href="sub(.md">sub(</a></tt>

## History
| Calculator | OS Version | Description |
|------------|------------|-------------|
| <b>TI-83</b> | 0.01013 | Added |


