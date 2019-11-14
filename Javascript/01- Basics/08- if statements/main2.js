function sellSmartPhone(arr){
    cashier = 0, smartphone = 300, headphone = 50, cover = 20;
    if(arr.includes("smartphone") && arr.includes("headphone") && (arr.find(color))){
        
            switch(arr.find(color)){
                case "green":
                    cashier = 350 - 350*7/100
                break;
                case "pink":
                    cashier = 350 - 350*12/100
                break;
                case "orange":
                    cashier = 350 - 350*15/100
                break;
                default:
                    cashier = 300 - 300*5/100
                break;
            
        }

        
    }
    


        return cashier
}
let cover = {color: "green"}
let x = ["headphone", "smartphone", {color: "green"}]
console.log(x)
console.log(sellSmartPhone(x))