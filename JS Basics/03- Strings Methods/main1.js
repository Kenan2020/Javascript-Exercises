function num (str, name){
    let count = 0;
    str = str.split(" ");
    console.log(str);
    for (let i = 0; i < str.length; i++){
        if(str[i].includes(name)){
            count ++;
        }
    }
    return count
}
let x = "Hello kenan, there my name is kenan";
let y = num(x, "kenan");
console.log(y)