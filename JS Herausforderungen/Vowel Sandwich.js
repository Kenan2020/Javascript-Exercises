/*
Create a function which validates whether a 3 character string is a vowel sandwich. In order to have a valid sandwich, the string must satisfy the following rules:

    The first and last characters must be a consonant.
    The character in the middle must be a vowel.

Examples
----------
isVowelSandwich("cat") ➞ true
isVowelSandwich("ear") ➞ false
isVowelSandwich("bake") ➞ false
isVowelSandwich("try") ➞ false

Notes
----------
    Return false if the word is not 3 characters in length.
    All words will be given in lowercase.
    y is not considered a vowel.

isVowelSandwich("cat") ➞ true
isVowelSandwich("ear") ➞ false
isVowelSandwich("bake") ➞ false
isVowelSandwich("fai") ➞ false
isVowelSandwich("eik") ➞ false
isVowelSandwich("nel") ➞ true
isVowelSandwich("lea") ➞ false
isVowelSandwich("rur") ➞ true
isVowelSandwich("zuh") ➞ true
isVowelSandwich("iiq") ➞ false
isVowelSandwich("eir") ➞ false
isVowelSandwich("niv") ➞ true
isVowelSandwich("xap") ➞ true
isVowelSandwich("xuqrc") ➞ false
isVowelSandwich("rvp") ➞ false
isVowelSandwich("suj") ➞ true
isVowelSandwich("aeo") ➞ false
isVowelSandwich("nay") ➞ true
isVowelSandwich("cis") ➞ true
isVowelSandwich("leb") ➞ true
isVowelSandwich("aux") ➞ false
isVowelSandwich("vii") ➞ false
isVowelSandwich("faz") ➞ true
isVowelSandwich("taf") ➞ true
isVowelSandwich("fek") ➞ true
isVowelSandwich("tig") ➞ true
isVowelSandwich("hof") ➞ true
isVowelSandwich("yiy") ➞ true
isVowelSandwich("ray") ➞ true
isVowelSandwich("e") ➞ false
isVowelSandwich("oot") ➞ false
isVowelSandwich("oel") ➞ false
isVowelSandwich("cip") ➞ true
isVowelSandwich("faw") ➞ true
isVowelSandwich("kow") ➞ true
isVowelSandwich("ter") ➞ true
isVowelSandwich("qid") ➞ true
isVowelSandwich("mix") ➞ true
isVowelSandwich("eoo") ➞ false
isVowelSandwich("fan") ➞ true
isVowelSandwich("zoc") ➞ true
isVowelSandwich("rf") ➞ false
isVowelSandwich("adt") ➞ false
isVowelSandwich("sao") ➞ false
isVowelSandwich("yur") ➞ true
isVowelSandwich("bow") ➞ true
isVowelSandwich("aez") ➞ false
isVowelSandwich("sud") ➞ true
isVowelSandwich("nacr") ➞ false
isVowelSandwich("phlsf") ➞ false
isVowelSandwich("iah") ➞ false
isVowelSandwich("to") ➞ false
isVowelSandwich("lib") ➞ true
isVowelSandwich("oiu") ➞ false
isVowelSandwich("uaw") ➞ false
isVowelSandwich("zaw") ➞ true
isVowelSandwich("sow") ➞ true
isVowelSandwich("iok") ➞ false
isVowelSandwich("xoa") ➞ false
isVowelSandwich("lof") ➞ true
isVowelSandwich("suq") ➞ true
isVowelSandwich("sev") ➞ true
isVowelSandwich("hek") ➞ true
isVowelSandwich("ryxkk") ➞ false
isVowelSandwich("csgt") ➞ false
isVowelSandwich("rig") ➞ true
isVowelSandwich("rur") ➞ true
isVowelSandwich("luv") ➞ true
isVowelSandwich("rou") ➞ false
isVowelSandwich("kuy") ➞ true
isVowelSandwich("kax") ➞ true
isVowelSandwich("qnran") ➞ false
isVowelSandwich("aoi") ➞ false
isVowelSandwich("uis") ➞ false
isVowelSandwich("dey") ➞ true
isVowelSandwich("tia") ➞ false
isVowelSandwich("dawjq") ➞ false
isVowelSandwich("bjt") ➞ false
isVowelSandwich("rag") ➞ true
isVowelSandwich("iee") ➞ false
isVowelSandwich("gic") ➞ true
isVowelSandwich("iui") ➞ false
isVowelSandwich("rap") ➞ true
isVowelSandwich("qer") ➞ true
isVowelSandwich("qiv") ➞ true
isVowelSandwich("dod") ➞ true
isVowelSandwich("hom") ➞ true
isVowelSandwich("eio") ➞ false
isVowelSandwich("xea") ➞ false
isVowelSandwich("voo") ➞ false
isVowelSandwich("res") ➞ true
isVowelSandwich("zeq") ➞ true
isVowelSandwich("rol") ➞ true
isVowelSandwich("pee") ➞ false
isVowelSandwich("iee") ➞ false
isVowelSandwich("rig") ➞ true
isVowelSandwich("eow") ➞ false
isVowelSandwich("oey") ➞ false
isVowelSandwich("pux") ➞ true
isVowelSandwich("sij") ➞ true
isVowelSandwich("tak") ➞ true
isVowelSandwich("uim") ➞ false
isVowelSandwich("zia") ➞ false
*/
function isVowelSandwich(str) {
	return /^(?![aeiou])[a-z][aeiou](?![aeiou])[a-z]$/.test(str)
}
