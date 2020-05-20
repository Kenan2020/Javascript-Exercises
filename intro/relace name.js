let names = ["Amir", "Peter", "Omer", "kenan"];


names.forEach(function(item, index, array){
  if(item == "kenan"){
    array[index] = item + " Mawloud"
  }
});
console.log(names)
