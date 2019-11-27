div = document.createElement("div")
document.body.appendChild(div)
div.className = "mainDiv"
h = document.createElement("h2")
h.className = "mainTitle"
h.appendChild(document.createTextNode("HelvetiList"))
div.appendChild(h)

ul = document.createElement("ul")
ul.id = "list"
ul.className = "collection"
div.appendChild(ul)

let cities = ["Zurich", "Genava", "Winterthur", "Lausanne", "Lucerne"]
for(i=0; i<cities.length; i++){
    let li = document.createElement("li")
    li.innerHTML = `<a href="#">${cities[i]}</a>`
    li.className = "listItem"
    ul.appendChild(li)
}
