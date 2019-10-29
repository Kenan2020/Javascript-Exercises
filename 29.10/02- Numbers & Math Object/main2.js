function ponus(){
    let sum =0;

    for (let i = 0; i < 100; i++){
        let userNum = Math.floor(Math.random()*100 + 1);
        let luckyNum = Math.floor(Math.random()*100 + 1);

        let x = Math.abs(userNum - luckyNum);

        if(luckyNum == userNum){
            console.log(`for the loop number: ${i}
The user number: ${userNum}
the luck number: ${luckyNum}
The user wins 100$
Total: ${sum += 100}$`)

        }else if(x <= 10){
            console.log(`for the loop number: ${i}
The user number: ${userNum}
the luck number: ${luckyNum}
The user wins ${100 - x * 10}$
Total: ${sum +=(100 - x * 10)}$`)

        }else{
        console.log(`for the loop number: ${i}
The user number: ${userNum}
the luck number: ${luckyNum}
The user wins nothing
Total: ${sum += 0}$`)

        }
    }
    return `The Total is: ${sum} $`
}



let y = ponus()

console.log(y);
