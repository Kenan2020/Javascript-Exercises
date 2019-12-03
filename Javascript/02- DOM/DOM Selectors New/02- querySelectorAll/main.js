let elements = document.querySelectorAll("ul > li:last-child")
for(let elem of elements){//work with HTMLCollection & TokenList & NodeList (for objects)
    alert(elem.innerHTML)

}
console.log(elements)