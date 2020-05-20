function square(num){
    return num*num;
}

function result(){
    let num = prompt("Please Enter a number: ");
    if(num == "" || num ==null){
        res = "There is no number!"
    }else{
        res =`${square(num)}`
    }
        document.write(num + "² " + " = " + res)

    }


result();