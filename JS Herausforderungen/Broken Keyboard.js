/*
Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

findBrokenKeys(correct phrase, what you actually typed)

Examples
----------
findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

Notes
----------
    Broken keys should be ordered by when they first appear in the sentence.
    Only one broken key per letter should be listed.
    Letters will all be in lower case.

findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
findBrokenKeys("mozart", "aiwgvx") ➞ ["m", "o", "z", "a", "r", "t"]
findBrokenKeys("5678", "4678") ➞ ["5"], "It should work for numbers."
findBrokenKeys("!!??$$", "$$!!??") ➞ ["!", "?", "$"], "It should work for punctuation."
*/
function findBrokenKeys(str1, str2) {
	return [...new Set([...str1].filter((item, i)=>item!==str2[i]))]
}
