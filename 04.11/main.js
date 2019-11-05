function findRoute(arr){//time, stops, km
    tmp=[];
    let minTime = arr[0].time, minStops = arr[0].stops, minKm = arr[0].km;
    for(let i=0; i<arr.length; i++){
        if(arr[i].time < minTime){

            minTime = arr[i].time;
        }
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i].time == minTime && arr[i].stops < minStops){

            minStops = arr[i].stops;
        }
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i].time == minTime && arr[i].stops == minStops && arr[i].km < minKm){

            minKm = arr[i].km;
        }
    }
   
    return [minTime, minStops, minKm]
}
let route = [{km: 16, time: 30, stops: 2},
            {km: 40, time: 20, stops: 3},
            {km: 11, time: 30, stops: 1},
            {km: 10, time: 20, stops: 2}]
x = findRoute(route);
console.log(x)