function greeting(name){
    return "Hello " + name
}

let x = `World ${2+4} am`;//literals
let str = greeting(x);
document.write(str);
//////////////////////////////////
let num = str.length;
console.log(num)