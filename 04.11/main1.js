function findWay(arr){//time, stops, km
    let temp = arr[0];
        for(i = 0; i < arr.length; i++){  
            if(arr[i].time < temp.time){
                temp = arr[i];
            }else if(arr[i].time == temp.time){
                if(arr[i].stops < temp.stops){
                    temp = arr[i];
                }else if(arr[i].stops == temp.stops){
                    if(arr[i].km < temp.km){
                        temp = arr[i];
                    }
                }
            }
        }
    return temp
}
let route = [{km: 16, time: 30, stops: 2},
            {km: 40, time: 20, stops: 3},
            {km: 11, time: 30, stops: 1},
            {km: 10, time: 20, stops: 2}]
x = findWay(route);
console.log(x)