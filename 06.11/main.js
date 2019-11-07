function greetings(){
    
    let date = new Date();
    let hour = date.getHours();
    
   
    if(hour < 11){
        return `Good morning!`
    }else if(hour < 15){
        return `Good Afternoon!`
    }else if(hour < 21){
        return `Good eveing!`
    }else{
        return `Good night`
    }
}
y = greetings()
console.log(y)
