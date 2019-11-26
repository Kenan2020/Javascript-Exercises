/*
-----------------------------------
M-15112019-2
First non-repeating character
-----------------------------------
Write a function named first_non_repeating_letter that takes a string input,
and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't',
since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character,
but the function should return the correct case for the initial letter. For example,
the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("")
or None -- see sample tests.
ALGORITHMS STRINGS DATA TYPES SEARCH LOGIC

Solution:

function firstNonRepeatingLetter(s) {

 // Add your code here

}

Sample Tests:
firstNonRepeatingLetter('a'), 'a');
firstNonRepeatingLetter('stress'), 't');
firstNonRepeatingLetter('moonmen'), 'e');
*/
function firstNonRepeatingLetter(str){
    arr = str.split("")
    for(i=0; i<arr.length; i++){
      let count = 0;
      for(j=arr.length; j>=0; j--){
        if(arr[i]===arr[j]){
          count ++
        }
      }
      if(count == 1){
        return arr[i]
        }
    }
}

x = firstNonRepeatingLetter('moonmen')
console.log(x)
