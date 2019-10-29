function ponus(){
    let sum =0;

    for (let i = 0; i <= 100; i++){
        let userNum = Math.floor(Math.random()*100 + 1);
        let luckyNum = Math.floor(Math.random()*100 + 1);

        let x = Math.abs(userNum - luckyNum);

        if(luckyNum == userNum){
            `${sum += 100}`

        }else if(x <= 10){
            `${sum +=(100 - x * 10)}`

        }else{
        `${sum += 0}`

        }
    }
    return sum
}



let y = ponus()

console.log(y);
