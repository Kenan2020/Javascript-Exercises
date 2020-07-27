/*
Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
Examples
---------
insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

Notes
---------
Each word in the phrase will be at least two characters long.

insertWhitespace("SheWalksToTheBeach"), "She Walks To The Beach")
insertWhitespace("MarvinTalksTooMuch"), "Marvin Talks Too Much")
insertWhitespace("HopelesslyDevotedToYou"), "Hopelessly Devoted To You")
insertWhitespace("EvenTheBestFallDownSometimes"), "Even The Best Fall Down Sometimes")
insertWhitespace("TheGreatestUpsetInHistory"), "The Greatest Upset In History")
*/
function insertWhitespace(s) {
	return s.replace(/([A-Z])/g, ' $1').trim()
}
function insertWhitespace(s) {
	return s.replace(/([a-z])([A-Z])/g, '$1 $2')
}
