function isWordPlural (str){
if(str[str.length-1]=="s"){
    return `Plural`
}else{
    return `singular`
    }
}

let x = isWordPlural("childern");
console.log(x);