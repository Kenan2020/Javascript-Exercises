/*
08.11.2019
---------------------------
M.8.11.04
Detect Pangram
---------------------------
Instructions:
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is,
False if not. Ignore numbers and punctuation.

FUNDAMENTALS STRINGS DATA STRUCTURES

Solution:
function isPangram(string){
 //...
}
Sample Tests:
var string = "The quick brown fox jumps over the lazy dog."
isPangram(string), true
var string = "This is not a pangram."
isPangram(string), false
*/
function isPangram(string){
    let tmp= [];
    re= /[\.|\,|\d]/g;
    string = string.replace(re, "");
    let arr = string.split(" ")
    
    for(i=0; i<arr.length; i++){
        arr[i] = arr[i].split("")
    }
    arr = arr.join(",").split(",")
    for(i=0; i<arr.length; i++){
      arr[i] = arr[i].toLowerCase()
      if(!tmp.includes(arr[i])){
        tmp.push(arr[i])
      }
    }
    return (tmp.length==26) ? true : false
  }
  let x = "The quick1 brown. fox jumps over, the lazy dog"
  console.log(isPangram(x))