function myN (arr, n){
    for(let i=0; i<arr.length; i++){
        if(arr[i].name == n){
            return arr[i].email
        }
    }
}
persons =[{name: "stefan",
    age: 28,
    email: "zerocode@aol.com",
    hobbies: ["sleeping", "eating", "shopping"],
    address: {
        city: "Winterhude",
        state: "Hamburg",
    },
    getBirthYear: function(){
        return 2019 - this.age
    }},
{name: "kenan",
    age: 45,
    email: "zerocode12@aol.com",
    hobbies: ["sleeping", "eating", "shopping"],
    address: {
        city: "Bergedorf",
        state: "Hamburg",
    },
    getBirthYear: function(){
        return 2019 - this.age
    }
}
]
console.log(myN(persons, "kenan"))
