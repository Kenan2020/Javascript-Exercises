function describer(arrOfNumbers){

    arrOfNumbers.forEach(function(item, i){

        if(item%2 ==0){
            document.write("This is Number: ", item , " and it is even.");
        }else if(item%5 ==0){
            document.write("This is Number: ", item , " and it accept to devide by 5.");
        }else if(item%7==0){
            document.write("This is Number: ", item , " and it accept to devide by 7.");
        }else{
            document.write("This is Number: ", item , " and it is odd.");
        }
        })
        return(arrOfString)

    }
let x=[1, 55, 100, 25]
let y=describer(x);
document.write(y)

