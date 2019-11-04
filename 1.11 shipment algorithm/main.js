function shipment(kg){
    if(kg >= 7){
        if(kg%5==0){
            return `Number of 5kg Packets: /${kg/5}/`
        }else if((kg%5)%2==0){
            return `Number of 5kg Packets: /${(kg-(kg%5))/5}/ and number of 2kg Packets /${(kg-(kg-(kg%5)))/2}/`
        }else if((kg%5)%2!=0){
            return `Number of 5kg packets: /${(Math.floor(kg/5))-1}/ Number of 2kg packets: /${((kg%5)+5)/2}/`
        }
    }else{
        return `The Kilos must be greater or equal to 7`
    }
}
let x = shipment(8)
console.log(x)