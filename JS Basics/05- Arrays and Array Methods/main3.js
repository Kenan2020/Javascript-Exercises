function gift(arr){
    
        return arr.find(function(person){
            return person.age > 50;
        })
    }
    
    

x = [
    {name: "a", age: 49},
    {name: "b", age: 82},
    {name: "c", age: 45},
    {name: "d", age: 69},
    {name: "e", age: 23},
    {name: "f", age: 91},
    {name: "g", age: 55},
    {name: "h", age: 39},
    {name: "i", age: 66}
];
console.log(gift(x))
