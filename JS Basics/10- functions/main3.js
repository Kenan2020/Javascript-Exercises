/*05.11.2019
-----------------------------------
L-4 The container problem
-----------------------------------
Suppose you own a ship.
This ship can carry up to 10.000 Kg in terms of weight.
A merchant wants you to carry his goods with your ship.
He has 500 containers and he wants you to carry as many as possible.
All containers have an identifying number from 1 to 500.
The first 100 containers weight 10Kg each.
The containers with number from 101 up to 200 (included) weight 20kg each.
The containers with number from 201 up to 250 (included) weight 50kg each.
The containers with number from 251 up to 300 (included) weight 100kg each.
The containers with number from 301 up to 400 (included) weight 200kg each.
The rest weight 500 Kg each.
Put as many containers as possible without sinking your ship.
Find a way to stop adding weight if you surpass the limit your ship can afford.
Print to the console exact how many containers you have included to your
ship and how much is the difference between the total weight of the containers and the
weight your ship can afford (free available weight).

function containerCalculate(maxWeight, weightIncluded, id, weightNextContainer, ignoredContainers)

*/
function containerCalculate(){
    maxWeight = 10000;
    container = 0;
    weight = 0;
    i = 1;
    while(i<= 100 && weight< maxWeight){
        weight += 10;
        container ++;
        i++
    }
    console.log(`it takes ${container} containers from 10kg each and the remain weight = ${maxWeight - weight}kg`)
    while(i<=200 && weight < maxWeight){
        weight += 20;
        container ++;
        i++
    }
    while(i<=250 && weight < maxWeight){
        weight += 50;
        container ++;
        i++
    }
    while(i<=300 && weight < maxWeight){
        weight += 100;
        container ++;
        i++
    }

return `/${container}/ containers and there weight are /${weight}/kg`
}
let x= containerCalculate();
console.log(x)
