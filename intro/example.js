//console.log(`The result of 5 + 5 is \n ${5+5} `)

function bom(arrOfnum){
  for(i=0; i<arrOfnum.length; i++){
    if(arrOfnum[i]%7 ==0){
      arrOfnum[i]="bom"
    }

  }
};

let x = [1, 5, 7, 10, 14];
bom(x);
console.log(x)

