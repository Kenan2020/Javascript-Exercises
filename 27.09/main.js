function Tripadviser(cityFacts){
    for(let i = 0; i < cityFacts.length; i++){
        if(cityFacts[i].population < 8000000){
            cityFacts[i].advice = "positive";
        }
    }
    
    return cityFacts;
}

let citys = [{name: "Paris", population: 12000000, continant: "Europe"},
             {name: "London", population: 8000000, continant: "Europe"},
             {name: "Rom", population: 7500000, continant: "Europe"},
             {name: "Koppenhagen", population: 6000000, continant: "Europe"}]

y = Tripadviser(citys)
console.log(y)

/*console.log(city1)
city1.advice = "positive" // to add a property to an object
console.log(city1)*/