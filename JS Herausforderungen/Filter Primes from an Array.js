/*
Create a function that takes an array and returns a new array containing only prime numbers.
Examples
-----------
filterPrimes([7, 9, 3, 9, 10, 11, 27]) ➞ [7, 3, 11]
filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70]) ➞ [10007, 1009]
filterPrimes([1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097]) ➞ [1009, 3, 61, 1087, 1091, 1093, 1097]

Notes
-----------
    New array must maintain the order of primes as they first appear in the original array.
    Check the Resources tab for help.


*/
function filterPrimes(num) {
	return num.filter(item=>{
    	   for (i = 2; item > i; i++) if (item % i == 0) return false;
  	return item > 1;
  })
}
