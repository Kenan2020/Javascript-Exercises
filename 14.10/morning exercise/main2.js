function invited (mName, gName){
    if(mName.length == gName.length){
        return `${gName}: you're invited!`
    }else{
        return `${gName}: sorry! you're not invited.`
        }
    }
    
    name = "kenan";
    guest = "omaar";
    let x = invited(name, guest);
    console.log(x);