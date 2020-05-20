const person ={
    firstName: "stefan",
    "last Name": "smith",
    age: 28,
    email: "zerocode@aol.com",
    hobbies: ["sleeping", "eating", "shopping"],
    address: {
        city: "Winterhude",
        state: "Hamburg",
    },
    getBirthYear: function(){
        return 2019 - this.age
    }
}
let val;
val = person;

//Access 1 property
val = person.firstName;
val = person["last Name"];
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();




//output
console.log(val)