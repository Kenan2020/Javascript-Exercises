let paragraph = "The quick brown fox jumps over the lazy dog." + "If the dog barked, was it really lazy?";
let str = prompt("search for index of: ");

let result = `Yes it is found in the position: ${paragraph.indexOf(str)}`

document.write(result)
