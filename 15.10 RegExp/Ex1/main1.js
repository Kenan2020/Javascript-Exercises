function matched(str, re){
   
    if(str.match(re)){//str.test(re)
        return `yes, it is concluded`
    }else{
        return `No, it is not concluded`
    }
}

let str ="Hallo from DCI";
let reg = /dci/i;

console.log(matched(str, reg))