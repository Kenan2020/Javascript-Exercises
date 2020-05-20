let veggiefood =["Bread", "Beans", "Döner", "Falafel", "Kartofel Salat", "Briani"]

//let length = veggiefood.length-1
//for(let i = length; i >= 0; i--)

for(let i = 0; i < veggiefood.length; i++){
  
  if(veggiefood[i]=="Döner"){
    console.log("Hey " + veggiefood[i] + " is not a veggie")
    //break;
  } else{
    console.log(veggiefood[i] + ": is veggie")
  }
  
}
