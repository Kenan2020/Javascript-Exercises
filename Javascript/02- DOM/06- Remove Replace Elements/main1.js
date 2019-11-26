const li = document.querySelector("li")
const newChild = document.createTextNode("new Item")
oldChild = li.childNodes[0] //or li.first-child
li.replaceChild(newChild, oldChild)
