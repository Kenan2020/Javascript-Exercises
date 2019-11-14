/*
08.11.2019
------------------------------------
M.8.11.02
Sort array by string length
------------------------------------
Instructions:
Write a function that takes an array of strings as an argument and returns a sorted
array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths,
so you will not have to decide how to order multiple strings of the same length.
 
Solution:
function sortByLength (array){
// Return an array containing the same strings, ordered from shortest to longest
};
Sample Tests:
sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);

sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);

sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);

FUNDAMENTALS SORTING ALGORITHMS ARRAYS
 */
function sortByLength(arr){
    arr.sort(function(a, b){
        return a.length - b.length
    })
    return arr

}
x = ["", "Moderately", "Brains", "Pizza"]
y = sortByLength(x)
console.log(y)