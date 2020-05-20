let book1 = {
  author:"kenan",
  title:"Objects in JS",
  read: false,

  displayInfos: function (){
    return [this.author , this.title];
  }
};
let book2 = {
  author:"Jay",
  title:"Objects in python",
  read: false,

  displayInfos: function (){
    return [this.author , this.title];
  }
};

let books =[book1, book2]

function readBooks(arr, bookName){
for(i=0; i<arr.length; i++){
  if(arr[i].title==bookName){
    arr[i].read = true;
    return arr[i].read;
  }
}
}
console.log(books)
let x = readBooks(books, "Objects in python");
console.log(books)




