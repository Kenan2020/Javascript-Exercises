//function Declaration

/*function sayHello(firstName = "Jay"){
    console.log("Hello! " + firstName)
}
//sayHello("kenan");

//function expresion
const square = function(x=1){
    return x*x
}*/
//console.log(square())

//immediatly invokable function expressions - IIFEs
/*(function(){
    console.log("IIFE Exec ...")
})()*/
/*(function(x){
    console.log(x*x)
})(4)*/
//property methods
const todo = {
    list:[],
    add: function(item){
        this.list.push(item)
    },
    edit: function(id, value){
        this.list[id]= value
    }
}
todo.add("eat");
//console.log(todo.list)
todo.edit(4, "drink");
//console.log(todo.list)
//console.table(todo.list)
todo.mark = 55
todo.delete = function(){
    console.log("delete item ...")
}
console.log(todo)