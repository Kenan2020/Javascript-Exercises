let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;         //must start with
re = /d$/i;         //must ends with
re = /^hello$/i;    //must include only this word
re = /h.llo/i;      //matches any ONE character
re = /h*llo/i;      //
re = /he?a?llo/i;   //optional character ... either e, a or nothing
re = /he?a?llo\?$/i;//escape character

//Brackets [] - Character Sets
re = /h[ea]llo/i; //must be an e or a
re = /[HE]llo/i; //must be a H or E
re = /[^HE]llo/i; //match anything except H or E
re =/[A-Z]llo/; //match any uppercase letter
re = /[a-z]llo/; //match any lowercase letter
re = /[A-Za-z]llo/; //match any letter with any case
re = /[ä-ü]llo/; //other language characters
re = /[0-9]llo/; //match any digit
re = /[0-9][0-9]llo/; //two digits after each other
re = /Helo{3}o/i; //Must Occure exactly {m} times, at this position
re = /Hel{2,4}o/i; //must occure at least m and maximum n{m,n} times , at this position.
re = /Hel{2,}o/i; //must occure at least m {m, }times

//parantheses ()-grouping
re = /^([0-9]x){3}$/

//shorthand Character Classes - word character - alphanumiric or_
re = /\w/;
re = /\w+/;// + it means one or more
re = /\W/; // none word character
re = /\d/; // = /[0-9]/
re = /\D/; //NON-digit character
re = /\s/; //Match whitespace char
re = /\S/; //match Non whitespace char
re = /\bHell\b/i; //word boundary - non word character at the same position
re = /x(?=y)/i; //match x only if followed by y  
re = /x(?!y)$/i;

​




// String to match
const str = "11Allo"

//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} does NOT match ${re.source}`);
    }
}
reTest(re, str);
