let val;

const list = document.querySelector("ul.collection");

const listItem = document.querySelector("li.collection-item:first-child");


val = list;
val = listItem;

//get child nodes
val = list.childNodes;//return nodeList
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/*
    1 - Element
    2 - Attribute (deprecated)
    3 - Text node
    8 - Comment
    9 - Document itself
    10- Doctype
*/

/*(function check(){
    let list = document.querySelectorAll("li");
    for(i=0; i<list.length; i++){
        if(list[i].innerText == "List Item"){
            list[i].style.color="#080"
        }else{
            list[i].style.background="#ccc"
        }
    }
})()*/
//get children element nodes
/*val = list.children//return HTMLCollection
//val[0].className
//children of children
val = list.children[0].children[0].id="test-link" //adding id 
val = list.children[0].children[0].children[0]

//first child
val = list.firstChild
val = list.firstElementChild
val = list.firstElementChild.innerText
val = list.lastChild
val = list.lastElementChild
val = list.firstElementChild.innerText
val = list.children.length //or
val = list.childElementCount

//get parent node
val = listItem.parentNode
val = listItem.parentElement
//val = listItem.parentElement.parentElement

//console.log(val)*/
/*-------------------------------------------------*/
//exercise
/*-------------------------------------------------*/
list.children[2].style.color = "red"
let arr = Array.from(list.children)
arr.forEach(function(item){
    if(item.style.color=="red"){
        item.innerText = "DONE !!!!"
    }
})
/*-------------------------------------------------*/
count = 0;
arr.forEach(function(item){
    if(item.innerText=="DONE !!!!"){
       count ++
    }
})
//console.log(count)
/*-------------------------------------------------*/
//get next sibling
val = listItem.nextSibling
val = listItem.nextElementSibling.innerText="my sibling"
val = listItem.nextElementSibling.nextElementSibling.style.color="#080"

//get previous sibling
val = listItem.previousSibling
val = listItem.previousElementSibling



console.log(val)

 