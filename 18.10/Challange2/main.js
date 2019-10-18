function checkNum(str){
    re=/[0-9]/;
    return re.test(str);
}
let str = "";
console.log(checkNum(str));
