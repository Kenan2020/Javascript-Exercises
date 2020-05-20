let article1 = {
  author:"kenan",
  title:"Objects in JS",
  date: "03. Sep. 2019",

  displayInfos: function (){
    return [this.author , this.title , this.date];
  }
};
let article2 = {
  author:"Jay",
  title:"Objects in JS",
  date: "03. Sep. 2019",

  displayInfos: function (){
    return [this.author , this.title , this.date];
  }
};
//if(article1.author =="Jay"){
  //console.log("this man is our friend")
//}else{
  //console.log(article.displayInfos())
//}
let articles =[article1, article2]
//console.log(articles[0].date)
for(i=0; i<articles.length; i++){
  if(articles[i].author=="Jay"){
    console.log(articles[i].author + " He is not an author!")
  } else{
    console.log(articles[i].author)
  }
}

