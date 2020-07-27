/*
The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]

Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.
Examples
------------
getLength([1, [2, 3]]) ➞ 3
getLength([1, [2, [3, 4]]]) ➞ 4
getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
getLength([1, [2], 1, [2], 1]) ➞ 5

Notes
------------
An empty array should return 0.

getLength([1, [2,3]]), 3)
getLength([1, [2, [3, 4]]]), 4)
getLength([1, [2, [3, [4, [5, 6]]]]]), 6)
getLength([1, 7, 8]), 3)
getLength([2]), 1)
getLength([2, [3], 4, [7]]), 4)
getLength([2, [3, [5, 7]], 4, [7]]), 6)
getLength([2, [3, [4, [5]]], [9]]), 5)
getLength([]), 0)
*/
function getLength(arr) {
	return arr.flat(Infinity).length
}
