/*05.11.2019
for loop
*/
/*for(i=0; i<10; i++){//(i=10; i>0; i--)
    if(i == 2){
        console.log(`${i} is my lucky number`)
        break;
    }
}

//while loop
let j = 0;
while(j<10){
    console.log(`${j} is cool`)
    j++
}
*/
//do while
/*let t = 0
do{
    console.log(`${t} is cool`)

}while(t > 0)
*/
//loop through array .... map()
/*const users = [
    {id:1, name:"kenan"},
    {id:2, name:"ali"},
    {id:3, name:"sascha"},
    {id:4, name:"Omar"}
];
const ids = users.map(function(u){//u for item
    return u.id
});
console.table(ids)
*/
//06.11.2019 ***** for in loops
const user ={
    firstName: "kenan",
    lastName: "mawlood",
    age: 30
}
let cars = ["BMW", "VW", "Ford", "Mercedes", "Ferrari"]
for(let key in user){//key is the index and the typeof key is string
    console.log(typeof key)
    console.log(`${key} : ${user[key]}`)
}