function lettersOnly(str){
    re=/[^A-Za-z]/g;
    return str.replace(re, "");
}
let str = "R!=:~0o0./c&}9k`60=y";
console.log(lettersOnly(str));
