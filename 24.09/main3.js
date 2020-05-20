function square(num){
    return num*num;
}

function controlSquareNum(){
    if(num == "" || num ==null){
        return "There is no Input!"
    }else{
        return `${square(num)}`
    }

    }

    let num = prompt("Please Enter a number: ");
    let result = controlSquareNum(num);
    document.write(num + "² " + " = " + result)
