function EasyHTTP(){
    this.http = new XMLHttpRequest()
}
//make an HTTP GET Request
EasyHTTP.prototype.get = function(url, action){
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
            /*
            callback1(this.http.status)
            callback1(this.http.responseText)
            */
           action(null, this.http.responseText)
           
        }else{
            //callback2(`Page not found!!!! ${this.http.status}`)
            action(`Page not found!!!! ${this.http.status}`)
        }
    }
    this.http.send()
}
//make an HTTP POST Request
EasyHTTP.prototype.post = function(url, data, action){
    this.http.open("POST", url, true)
    this.http.setRequestHeader("Content-type", "application/json")
    this.http.onload = ()=>{
        if(this.http.status === 201){
            action (null, this.http.responseText)
        }else{
            action(`Page not found! ${this.http.status}`)
        }
    }
    this.http.send(JSON.stringify(data))
}
//make an HTTP PUT Request
EasyHTTP.prototype.put = function(url, data, action){
    this.http.open("PUT", url, true)
    this.http.setRequestHeader("Content-type", "application/json")
    this.http.onload = ()=>{
        if(this.http.status === 200){
            action (null, this.http.responseText)
        }else{
            action(`Page not found! ${this.http.status}`)
        }
    }
    this.http.send(JSON.stringify(data))
}
//make an HTTP DELETE Request
EasyHTTP.prototype.delete = function(url, action){
    this.http.open("DELETE", url, true)
    this.http.onload = ()=>{
        if(this.http.status === 200){
            action (null, "Post deleted")
        }else{
            action(`failed to delete ${this.http.status}`)
        }
    }
    this.http.send(JSON.stringify(data))
}
