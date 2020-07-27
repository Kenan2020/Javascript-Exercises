/*
Create a function that validates whether three given integers form a Pythagorean triplet. The sum of the squares of the two smallest integers must equal the square of the largest number to be validated.
Examples
-----------
isTriplet(3, 4, 5) ➞ true
// 3² + 4² = 25
// 5² = 25

isTriplet(13, 5, 12) ➞ true
// 5² + 12² = 169
// 13² = 169

isTriplet(1, 2, 3) ➞ false
// 1² + 2² = 5
// 3² = 9

Notes
-----------
Numbers may not be given in a sorted order.

isTriplet(3, 4, 5), true)
isTriplet(1, 2, 3), false)
isTriplet(3, 18, 8), false)
isTriplet(7, 12, 7), false)
isTriplet(13, 5, 12), true)
isTriplet(12, 20, 18), false)
isTriplet(17, 14, 2), false)
isTriplet(6, 15, 12), false)
isTriplet(60, 61, 11), true)
isTriplet(7, 13, 15), false)
isTriplet(12, 18, 7), false)
isTriplet(8, 17, 15), true)
isTriplet(3120, 79, 3121), true)
*/
function isTriplet(n1, n2, n3) {
	[a, b, c] = ([...arguments]).sort((a,b)=>a-b)
  return a*a + b*b == c*c
}
