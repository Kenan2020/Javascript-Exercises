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




// String to match
const str = "Allo? world!"

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
