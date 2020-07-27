/*
Create a function that takes a string and replaces the vowels with another character.

    a = 1
    e = 2
    i = 3
    o = 4
    u = 5

Examples
--------------
replaceVowel("karachi") ➞ "k1r1ch3"
replaceVowel("chembur") ➞ "ch2mb5r"
replaceVowel("khandbari") ➞ "kh1ndb1ri"

Notes
--------------
The input will always be in lowercase.

replaceVowel("karachi"), "k1r1ch3")
replaceVowel("dang"), "d1ng")
replaceVowel("aen"), "12n")
replaceVowel("chembur"), "ch2mb5r")
replaceVowel("khandbari"), "kh1ndb1r3")
replaceVowel("thamel"), "th1m2l")
*/
function replaceVowel(word) {
  let tmp = {"a":1, "e":2, "i":3, "o":4, "u":5}
  re=/a|e|i|o|u/g
  return word.replace(re, y => tmp[y])
}
function replaceVowel(word){
	return word.replace(/[aeiou]/g,v=> "aeiou".indexOf(v)+1)
}
