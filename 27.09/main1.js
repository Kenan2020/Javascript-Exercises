////////////Challenge1///////////////

function Tripadviser(cityFacts){
    let minPop = cityFacts[0].population, advice, name, continent;
    for(let i = 0; i < cityFacts.length; i++){
        if((cityFacts[i].population < minPop)&&(cityFacts[i].continent=="Europe")){
            minPop = cityFacts[i].population;
            cityFacts[i].advice = "positive";
            advice = cityFacts[i].advice;
            name = cityFacts[i].name;
            continent = cityFacts[i].continent;
        }
    }
    
    return {name, minPop, continent, advice};
}

let citys = [{name: "Paris", population: 12000000, continent: "Europe"},
             {name: "London", population: 8000000, continent: "Europe"},
             {name: "Rom", population: 7500000, continent: "Europe"},
             {name: "Amman", population: 6000000, continent: "Asia"}]

y = Tripadviser(citys)
console.log(y)

