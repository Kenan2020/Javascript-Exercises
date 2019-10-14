function visited (city, arr){
    for(let i=0; i<arr.length; i++){
        if(city==arr[i]){
            return `I visited ${city}`;
        }
    }
        return `I didn't visit ${city} yet`;
    }
arr=["Hamburg", "Bremen", "Lübek", "Rostock"]
let city = visited ("München", arr);
console.log(city)
