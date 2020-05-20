function gSumme (num){

    let mind = 0
    for(let i = 0; i <= num; i++){//for(let i=num; i>=0; i--)
        mind += i;
    
    }
    return mind
}

let x = gSumme(5)
console.log(x)
console.log(0b01010101010101) //binary number
console.log(0xff) //hexadecimal number

////////////////////Gauß Summe Recursion ///////////////
function gaußSumme (n){
    if(n<=0){
        return 0
    }else{
        return n+gaußSumme(n-1)
    }
}

let num = gaußSumme(10)
console.log(num)

