let val;
val = document;
val = document.all;
val = document.all.length;
val = document.all[2];
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet; //.charset
val = document.contentType;
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;//action = "action.php"
val = document.links;
document.links[0].id = "kenan"
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[1];
val = document.images;
val = document.scripts;//+ script for auto save and .....
val = document.scripts[2].getAttribute("src");
let scripts = document.scripts;
console.log(typeof scripts);
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(item){
    console.log(item.getAttribute("src"))
});





//output
console.log(val)