/*
Create a function which concantenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.
Examples
-----------
jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
jazzify([]) ➞ []

Notes
-----------
    Return an empty array if the given array is empty.
    You can expect all the tests to have valid chords.

jazzify(['G', 'F', 'C']), ['G7', 'F7', 'C7'])
jazzify(['Dm', 'G', 'E', 'A']), ['Dm7', 'G7', 'E7', 'A7'])
jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']), ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])
jazzify(['G', 'C7']), ['G7', 'C7'])
jazzify([]), [])
*/
function jazzify(arr) {
	return arr.map(item=> item.endsWith("7") ? item : item+7)
}
