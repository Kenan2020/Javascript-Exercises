function EasyHTTP(){
    this.http = new XMLHttpRequest()
}
//make an HTTP GET Request
EasyHTTP.prototype.get = function(url, callback1, callback2){
    this.http.open("GET", url, true)
    /*
        or
        let self = this
        this.http.onload = function(){
            if(self.http.status === 200){
                console.log(self.http.responseText)
            }
        }
    */
    this.http.onload = () =>{
        if(this.http.status === 200){
            callback1(this.http.responseText)
        }else{
            callback2("Page not found!!!!")
        }
    }
    this.http.send()
}
//make an HTTP POST Request
//make an HTTP PUT Request
//make an HTTP DELETE Request
