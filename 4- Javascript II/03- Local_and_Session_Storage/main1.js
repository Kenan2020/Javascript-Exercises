function setItem(key, value){
    localStorage.setItem(key, value) 
}
function removeItem(key){
    localStorage.removeItem(key)
}
function clear(){
    localStorage.clear()
}

for(i=1; i<=5; i++){
    setItem(i, i*i)
}
