function matched (arrChecked, arrVisited){
    let tmp=[];
    for(let i=0; i<arrChecked.length; i++){
        for(let j=0; j<arrVisited.length; j++){
            if(arrChecked[i] == arrVisited[j]){
                tmp.push(arrChecked[i]);
            }
        }
    }
    if(tmp.length == 0){
        return `There is no match`;
    }else{
        return tmp;
    }
}

let arr1 = ["Hamburg", "Bremen", "Lübek", "Rostock", "Wien", "Frankfurt"];
let arr2 = ["Rostock", "München", "Kiel", "Hamburg"];
let matchedCities = matched (arr1, arr2);
console.log(`Matched Cities = [${matchedCities}]`);
