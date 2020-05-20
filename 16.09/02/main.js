function fact1 (n){
    if(n > 0){
        let f = 1
        for(let i = 1; i <= n; i++){//for(let i = n; i >1 ; i--)
            f *= i; //f = f * i
    }
        return f
    }else if (n == 0){
        return 1
    } else{
        return "there is no factorial for negative numbers "
    }

}

let x= fact1(3)
document.write(x)
//////////////////////////////Factorial Number Recursion////////////////////////////////////////////////////

function fact (n){
    if(n <= 0){
        return 1
    }else{
        return n*fact(n-1)
    }

}

let y= fact(4)
console.log(y)
