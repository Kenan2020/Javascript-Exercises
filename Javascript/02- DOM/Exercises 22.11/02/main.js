document.body.style.fontSize = "20px";

document.getElementsByTagName("h1")[0].style.textAlign = "center"

let cat = document.querySelectorAll(".category")
for(let i=0; i<cat.length; i++){
    cat[i].style.color = "#080"
    cat[i].style.textDecoration="underline"
    cat[i].style.fontFamily="Arial"
}
li = document.querySelectorAll(".food-item")
for(i=0; i<li.length; i++){
    li[i].style
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

(function colorGen(){
    let cat1 = document.querySelectorAll(".food-category")
    for(let i=0; i<cat1.length; i++){
        cat1[i].style.backgroundColor = `${getRandomColor()}`
    }
})()

let d = document.querySelector(".main")
d.style.display = "flex"








console.log(li)