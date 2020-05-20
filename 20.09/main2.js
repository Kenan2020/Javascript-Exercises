function minDistance(arr){
let min = arr[0].distance, name="";
for(let i=0; i<arr.length; i++){
    if(arr[i].distance < min){
        min = arr[i].distance;
        name = arr[i].name;
    }
}
return [name, min]
}

friends =[{ name:"George", distance: 300},
          { name: "Jack", distance: 500},
          { name: "kenan", distance: 700},
          { name: "Ahmad", distance: 200},
          { name: "John", distance: 50},
          { name:"Michel", distance: 100}];

let x = minDistance(friends);
console.log(x)
