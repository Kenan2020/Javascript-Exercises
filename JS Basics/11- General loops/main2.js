/* 06.11.2019
    map() is an array function and pushed the result to another array
        (we don't need to create a tmp array) not changing the original array
    forEach() without return
*/
const users = [
    {id:1, name:"kenan"},
    {id:2, name:"ali"},
    {id:3, name:"sascha"},
    {id:4, name:"Omar"}
];
console.time("ScriptTime")
let ids = users.map(function(u){
    return u.id
});
console.timeEnd("ScriptTime")

console.time("ScriptTime")
let sqrIds = users.forEach(function(item, index){//() callback, item, index, array
    return users[index].id = item.id * item.id
});
console.timeEnd("ScriptTime")
