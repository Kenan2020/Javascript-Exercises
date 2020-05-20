/*
06.11.2019
*/
function selectEvenPersons(arr){
    let res = arr.map(function(item){
        return ((item.id)%2 == 0) ? item : "!invited"
    })
return res
}
let persons = [{id:1, name:"kenan"},
                {id:2, name:"omar"},
                {id:3, name: "ahmad"},
                {id:4, name: "ali"}]
y = selectEvenPersons (persons)
console.log(y)
