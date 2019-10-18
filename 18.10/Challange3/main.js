function removeVowels(str){
    re=/[aoeiu]/ig;
    return str.replace(re, "");
}
let str = "aoe123";
console.log(removeVowels(str));
