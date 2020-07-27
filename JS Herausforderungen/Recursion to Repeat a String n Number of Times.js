/*
Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

String.prototype.repeat() is not allowed
Examples
-----------------
repetition("ab", 3) ➞ "ababab"
repetition("kiwi", 1) ➞ "kiwi"
repetition("cherry", 2) ➞ "cherrycherry"

Notes
-----------------
The second parameter of the function is positive integer.

repetition("soccer", 2), "soccersoccer"
repetition("ab", 3), "ababab"
repetition("bonita", 1), "bonita"
repetition("ciao", 4), "ciaociaociaociao"
repetition("amigo", 5), "amigoamigoamigoamigoamigo"
repetition("torque", 2), "torquetorque"
*/
function repetition(txt, n) {
	return n <= 0 ? '' : txt + repetition(txt, n - 1);
}
