let geusts = [{
    name: "Peter",
    age: "35"
}, {
    name: "Omar",
    age: "30"
}, {
    name: "Ahmad",
    age: "17"
}, {
    name: "Ali",
    age: "15"
}]

function invited(geusts){

    ul = document.createElement("ul")
    ul.className="g1"
    document.body.appendChild(ul)

    ul = document.createElement("ul")
    ul.className="g2"
    document.body.appendChild(ul)
    for(x of geusts){
        
        if(x.age >= 18){
            g1 = document.querySelector(".g1")
            li = document.createElement("li")
            li.innerHTML = x.name
            li.appendChild(document.createTextNode(` : you are in group I`))
            g1.appendChild(li)
        }else{
            g2 = document.querySelector(".g2")
            li = document.createElement("li")
            li.innerHTML = x.name
            li.appendChild(document.createTextNode(` : you are in group II`))
            li.style.color="red"
            g2.appendChild(li)
        }
    }
}
invited(geusts)
