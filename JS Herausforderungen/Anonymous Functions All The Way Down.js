/*
Create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "edabit".
Examples
--------------
lambdaDepth(0) ➞ "edabit"
lambdaDepth(1)() ➞ "edabit"
lambdaDepth(2)()() ➞ "edabit"
typeof lambdaDepth(2)() ➞ "function"

Notes
--------------
    num will always be a non-negative integer.
    If num == 0, return "edabit".
    If num > 0, return a function.
    All non-example test cases come in two forms: checking whether lambda_depth(k), after being called k times, returns a string, and checking whether lambda_depth(k) returns a function.

*/
lambdaDepth = n => n === 0 ? 'edabit' : () => lambdaDepth(n - 1)
