function bonus(userNum, loop){
    let sum = 0, win = 0, loose = 0;

    for (let i = 1; i <= loop; i++){

        let luckyNum = Math.floor(Math.random()*100 + 1);

        let x = Math.abs(userNum - luckyNum);

        if(luckyNum == userNum){
            win++;
            console.log(`for the loop number: ${i}
The user number: ${userNum}
the luck number: ${luckyNum}
The user wins 100$

Total: ${sum += 100}$
---------------------------------`)

        }else if(x <= 10){
            win++;
            console.log(`for the loop number: ${i}
The user number: ${userNum}
the luck number: ${luckyNum}
The user wins ${100 - x * 10}$
Total: ${sum +=(100 - x * 10)}$
---------------------------------`)

        }else{
        loose++;
        console.log(`for the loop number: ${i}
The user number: ${userNum}
the luck number: ${luckyNum}
The user wins nothing
Total: ${sum += 0}$
---------------------------------`)

        }
    }
    return `The Total is: ${sum} $
win: ${win} times
loose: ${loose} times
---------------------------------`
}



let y = bonus(25, 100)

console.log(y);
