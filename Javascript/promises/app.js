/*
    task1
    --------
*/

let promise = new Promise(function(resolve, reject){
    let x = Math.floor(Math.random() * 50) + 1
    if(x<35){
        resolve("Stuff worked!");
  }
  else {
        reject(Error("It broke"));
  }

})

promise.then(function(result) {
    console.log(result); // "Stuff worked!"
  }, function(err) {
    console.log(err); // Error: "It broke"
  });
  

/*  ---------
    --task2--
    ---------
*/
function get(url){
    
}
