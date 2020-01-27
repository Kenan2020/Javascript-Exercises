let uList = document.querySelector("#ul")
let input = document.querySelector("#input")
let add = document.querySelector("#add")
add.onclick = myFunc



class Ul{
    constructor(items){
        this.items = items
    }
    CreateUl(){
        let ul = document.createElement("ul")
        this.items.forEach(function(item){
            let li = document.createElement("li")
            li.innerHTML = item
            ul.appendChild(li)
        })
        document.body.appendChild(ul)
    }
}
function myFunc(e){
    let ul = new Ul(list)
    ul.CreateUl()
}
let list=["l1", "l2", "l3", "l4"]
let ul = new Ul(list)
ul.CreateUl()
