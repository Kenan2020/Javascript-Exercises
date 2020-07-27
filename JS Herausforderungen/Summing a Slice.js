/*
Given an array and an integer n, return the sum of the first n numbers in the array.
Examples
-------------
sliceSum([1, 3, 2], 2) ➞ 4
sliceSum([4, 2, 5, 7], 4) ➞ 18
sliceSum([3, 6, 2], 0) ➞ 0

Notes
-------------
If n is larger than the length of the array, return the sum of the whole array.

sliceSum([1, 3, 2], 2), 4)
sliceSum([4, 2, 5, 7], 4), 18)
sliceSum([3, 6, 2], 0), 0)
sliceSum([2, 4], 9), 6)
sliceSum([-5, 2], 2), -3)
sliceSum([0, 0, 0, 3, 4], 3), 0)
*/
function sliceSum(arr, n) {
    return arr.slice(0,n).reduce((total, item)=> total+item, 0)
}
