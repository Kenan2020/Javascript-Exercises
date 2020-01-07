let geusts = [{
    name: "Peter",
    fav: "kebab"
}, {
    name: "Omar",
    fav: "hamburger"
}, {
    name: "Ahmad",
    fav: "Omelette"
}]
let menu = ["pizza", "hamburger", "kebab"]

function serve(geusts, menu){
    ul = document.createElement("ul")
    document.body.appendChild(ul)
    for(x of geusts){// geusts.forEach(function(item)
        if(menu.includes(x.fav)){
            li = document.createElement("li")
            li.innerHTML = x.name
            li.appendChild(document.createTextNode(` : your favourite dish (${x.fav}) is reserved`))
            ul.appendChild(li)
        }else{
            li = document.createElement("li")
            li.innerHTML = x.name
            li.appendChild(document.createTextNode(` : SORRY! your favourite dish (${x.fav}) is not reserved`))
            li.style.color="red"
            ul.appendChild(li)
        }   
    }
}
x = serve(geusts, menu)
//console.log(Object.keys(window))
for(d in geusts[0]){

    console.log(geusts[0][d])
}
console.log(geusts[0].fav)