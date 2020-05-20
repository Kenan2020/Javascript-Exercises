/**
    * EasyHTTP Library
    * Library for making HTTP requests
    * @version 1.0.0
    * @author FBW4
    * @license
    *   
*/
class EasyHTTP{
    //Make a HTTP GET Request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())//here we have the status if we want to check it
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    //make a HTTP POST Request
    post(url, data){
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method : "POST",
                headers : {//json
                    "Content-type" : "application/json"
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    //make a HTTP PUT Request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : "PUT",
                headers : {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    //Make a HTTP DELETE Requests
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : "DELETE",
                headers : {
                    "Content-type" : "application/json"
                }
            })
            .then(res => res.json())
            .then(() => resolve("Done!!"))
            .catch(err => reject(`Error ${err}`))
        })
    }
}
