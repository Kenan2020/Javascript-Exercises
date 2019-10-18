function checkSpace(str){
    re=/\s/g;
    return re.test(str);
}
let str = "hllo";
console.log(checkSpace(str));
