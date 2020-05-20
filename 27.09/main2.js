////////////Challenge2///////////////

function Tripadviser(cities, prefernces){
    let tmp=[];
    for(let i = 0; i < cities.length; i++){
        for(let j = 0; j < prefernces.length; j++){
            if((cities[i].name == prefernces[j])||(cities[i].population == prefernces[j])||(cities[i].continant == prefernces[j])){
                tmp.push(cities[i].name);

            }
        }

    }
    return tmp;
}

let myCities = [{name: "Hamburg", population: 2000000, continant: "Europe", advice: "positive"},
             {name: "London", population: 8000000, continant: "Europe", advice: "negative"},
             {name: "Rom", population: 7500000, continant: "Europe", advice: "negative"},
             {name: "Amman", population: 6000000, continant: "Asia", advice: "positive"}]

let prefernces = ["2000000", "Asia"]

y = Tripadviser(myCities, prefernces)
console.log(y)

