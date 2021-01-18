/*
Create a function that takes in a Roman numeral as a string and converts it to an integer, returning the result. The function should work for all Roman numerals representing positive integers less than 4000.

The following table shows how digits will be represented in Roman numeral notation:
Place value	1	2	3	4	5	6	7	8	9
Ones		I	II	III	IV	V	VI	VII	VIII	IX
Tens		X	XX	XXX	XL	L	LX	LXX	LXXX	XC
Hundreds	C	CC	CCC	CD	D	DC	DCC	DCCC	CM
Thousands	M	MM	MMM	-	-	-	-	-	-

Examples
------------
parseRomanNumeral("VII") ➞ 7
parseRomanNumeral("DCLXXIX") ➞ 679
parseRomanNumeral("MMMCMV") ➞ 3905

Notes
------------
    All letters will be in uppercase.
    Assume all inputs will be well-formed Roman numerals.
    While you could probably solve this by separately checking for each of these sequences inside the string, there is a smarter way. Think about the numerical value each individual letter has, and how the letter immmediately following it can affect that letter's numerical value.
    
parseRomanNumeral("I") ➞ 1
parseRomanNumeral("VIII") ➞ 8
parseRomanNumeral("XXIX") ➞ 29
parseRomanNumeral("LIV") ➞ 54
parseRomanNumeral("CCV") ➞ 205
parseRomanNumeral("CDXLIV") ➞ 444
parseRomanNumeral("CMXCIX") ➞ 999
parseRomanNumeral("M") ➞ 1000
parseRomanNumeral("MMMDCCCLXXXVIII") ➞ 3888
parseRomanNumeral("MMMCMX") ➞ 3910
*/
function parseRomanNumeral(num) {
  tmp = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000}
  n = tmp[num[0]]
  let pre, curr
  for (i = 1; i < num.length; i++) {
    curr = tmp[num[i]];
    pre = tmp[num[i - 1]];
    if (curr <= pre) n += curr
    else n = n - pre * 2 + curr
  }
  return n;
}
