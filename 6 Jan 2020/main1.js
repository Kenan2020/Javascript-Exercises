function greeting(gests){
    if(gests.age > 30){
        return `${gests.title} ${gests.name} you are Welcome!`
    }
}


gests = {
    title: "Mr",
    name: "Peter",
    age: 35,
    gender: "m"
}
console.log(greeting(gests))