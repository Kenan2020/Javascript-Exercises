/*
Create a function that takes a variable number of groups of items, and returns the number of ways the items can be arranged, with one item from each group. Order does not matter.
Examples
------------
combinations(2, 3) ➞ 6
combinations(3, 7, 4) ➞ 84
combinations(2, 3, 4, 5) ➞ 120

Notes
------------
Don't overthink this one.

combinations(2), 2)
combinations(2, 3), 6)
combinations(3, 5), 15)
combinations(5, 6, 7), 210)
combinations(5, 5, 5, 5), 625)
combinations(3, 6, 9), 162)
combinations(2, 3, 4, 5, 6, 7, 8, 9, 10), 3628800)
combinations(4, 5, 6), 120)
combinations(5, 6, 7, 8), 1680)
combinations(6, 7, 0), 42)
*/
function combinations(items) {
  return [...arguments].reduce((total, item)=>
  (item==0) ? total : total * item, 1)
}
