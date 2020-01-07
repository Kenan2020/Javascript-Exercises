let x = document.querySelector("#parentheses")
let input = document.querySelector("#input")
input.onkeyup = validParentheses


function validParentheses(e){
  console.log(input.value.split(""))
        let arr = input.value.split("")
        let tmp =[]

        if(arr[0]==")"){
          x.innerHTML = false
        }else{
          for(i=0; i<arr.length; i++){
            if(arr[i]=="("){
              tmp.push(arr[i])

            }else if (arr[i]==")"){
              tmp.pop()
            }
          }
        }
        
        
    if(tmp.length == 0){
       x.innerHTML = true
    }else{
       x.innerHTML = false
    }
  

    
    /*
    let tmp = []
    let arr = str.split("")
      for (i=0; i<arr.length; i++){
        if(arr[i]=="("){
        tmp.push(arr[i])
      }else{
        if(tmp.length !=0){
          tmp.pop()
        }else{
          return false
          }
        }
      }
    if(tmp.length ==0){
      return true
    }else{
      return false
    }
    */
}



  