function changeVowels(str, rep){
    re=/[aoeiu]/ig;
    return str.replace(re, rep);
}
let str = "hallo";
console.log(changeVowels(str, "#"));
