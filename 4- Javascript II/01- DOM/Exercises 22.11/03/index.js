const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

for(i=0; i<books.length; i++){
  books[i].author = books[i].author.split(" ")
}
books.sort(function(a, b){
  let nameA=a.author[1].toLowerCase(), nameB=b.author[1].toLowerCase();
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
})



for (i=0; i<books.length; i++){
  let li = document.createElement("li")
  let div = document.createElement("div")
  
  
  div.innerHTML += `<img style = "width: 220px; height: 250px; border: 3px solid #000" src=${books[i].img} />`
  div.innerHTML += `<h3 style = "font-size:20px; padding:15px 15px 5px 15px">${books[i].title}</h3>`
  div.innerHTML += `<h4 style = "font-size:15px; color: #777; padding: 0 15px 10px 15px">${books[i].author[1]}, ${books[i].author[0]}</h4>`
  div.innerHTML += `<div class = "lin"></div>`
  
   

  document.querySelector("ul").appendChild(li)
  li.appendChild(div)
  let lin = document.getElementsByClassName("lin")
  lin[i].innerHTML =`<a href="#" class = "link"></a>`
  


  lin[i].style.backgroundColor = "#eee"
  lin[i].style.borderTop = "1px solid #ccc"
  lin[i].style.height = "50px"
  lin[i].style.textAlign ="right"
  

  li.style.border="1px solid #bbb"
  li.style.width ="220px"

  let link = document.querySelectorAll(".link")
  link[i].style.borderRadius ="50px"
  link[i].style.textAlign = "center"
  link[i].style.padding="5px 30px"

  if(books[i].alreadyRead){
    link[i].appendChild(document.createTextNode("Read"))
    link[i].style.color = "#fff"
    link[i].style.backgroundColor = "#080"
    
  }else{
    link[i].appendChild(document.createTextNode("To read"))
    link[i].style.color = "#fff"
    link[i].style.backgroundColor = "#444"
  }
  
}

let bookList = document.querySelector(".book-list")
bookList.style.listStyleType = "none"
bookList.display ="inline"











//console.log(document.querySelectorAll(".collection"))