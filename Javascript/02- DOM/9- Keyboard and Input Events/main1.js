const select = document.querySelector("select")
const lis = document.querySelectorAll("li")

 
select.addEventListener("change", runEvent)

function runEvent(e){
    for(i=0; i<lis.length; i++){
        if(e.target.value == lis[i].innerText){
            
            lis[i].style.backgroundColor = "#080"
        }else{
            lis[i].style.backgroundColor = ""
        }
    }

    //e.preventDefault();
}
