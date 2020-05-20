(function gess(){
    let rand = Math.floor(Math.random() * 11);
    console.log(rand)
    let guess = prompt("Guess a number between 1-10:")
    for(i=1; i<=3; i++){
    if(guess == rand){
        window.alert(`Success, the number was ${rand} !`)
    }else{
        
        window.prompt(`Wrong!!! Try Again! Attemts: ${i}`)
    }
    window.alert(`Sorry, you failed to guess the number in three attempts. The number was ${rand}`)
    }

    
})()
