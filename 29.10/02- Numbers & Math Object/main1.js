function lottery(userNum){

    let luckyNum = Math.floor(Math.random()*100 + 1);
    let x = Math.abs(userNum - luckyNum);

        if(luckyNum == userNum){
            return `The user number: ${userNum}
the luck number: ${luckyNum}
The user wins 100$`

        }else if(x <= 10){
            return `The user number: ${userNum}
the luck number: ${luckyNum}
The user wins ${100 - x * 10}$`
        }else{
            return `The user number: ${userNum}
the luck number: ${luckyNum}
The user wins nothing`
        }
    

}

let userNum = Math.floor(Math.random()*100 + 1);
let x = lottery(userNum)

console.log(x);
