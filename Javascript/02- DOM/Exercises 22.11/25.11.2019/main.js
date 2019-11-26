div = document.createElement("div")
document.body.appendChild(div)

h = document.createElement("h2")

h.appendChild(document.createTextNode("HelvetiList"))
div.appendChild(h)

ul = document.createElement("ul")
ul.id = "list"
div.appendChild(ul)

let cities = ["Zurich", "Genava", "Winterthur", "Lausanne", "Lucerne"]
for(i=0; i<cities.length; i++){
    let li = document.createElement("li")
    li.innerHTML = `<a href="#">${arr[i]}</a>`
    //li.className = "listItem"
    ul.appendChild(li)
}
          