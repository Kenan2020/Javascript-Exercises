/*function budget(pocket, price){
    if(pocket > price){
        return "you can buy it, soon have " + (pocket - price) + " €" + " in your pocket!"
    }else if(price > pocket){
        return "you can't buy and you need " + (pocket - price) + " €" 
    }else{
        return "You can buy it and will be no money in your pocket"
    }
}

let x=budget(100, 120);
document.write(x)*/

function budget(pocket, price){
    if(price > pocket*60/100){
        return "you can't buy this item"
     
    }else{
        return "you can buy this item"
    }
}

let x = budget(100, 60);
document.write(x)
