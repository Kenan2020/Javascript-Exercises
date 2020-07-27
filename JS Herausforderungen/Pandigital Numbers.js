/*
A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
Examples
---------------
isPandigital(98140723568910) ➞ true
isPandigital(90864523148909) ➞ false// 7 is missing.
isPandigital(112233445566778899) ➞ false

Notes
---------------
Think about the properties of a pandigital number when all duplicates are removed.

isPandigital(84847473937), false)
isPandigital(546732965015), false)
isPandigital(6781235184590), true)
isPandigital(9432821089765), true)
isPandigital(629764), false)
isPandigital(90864523148909), false)
isPandigital(7296012), false)
isPandigital(647380265483206), false)
isPandigital(38165975424790), true)
isPandigital(8146327815320), false)
isPandigital(768431605430), false)
isPandigital(4920124852367763), true)
isPandigital(60543981597247), true)
isPandigital(10282343456789), true)
*/
function isPandigital(num) {
	return new Set(num.toString().split("")).size == 10
}
