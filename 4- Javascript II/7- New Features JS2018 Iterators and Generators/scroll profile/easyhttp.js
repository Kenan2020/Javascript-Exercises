/**
    * EasyHTTP Library
    * Library for making HTTP requests
    * @version 2.0.0
    * @author FBW4
    The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology
    (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore,
    reasonable license compatibility
    * @license MIT
    *   
*/
class EasyHTTP{
    //Make a HTTP GET Request
    async get(url){
        const response = await fetch(url)
        const resData = await response.json()
        return resData
    }
    //make a HTTP POST Request
    async post(url, data){
        const response = await fetch(url, {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
    }
    //make a HTTP PUT Request
    async put(url, data){
        const response = await fetch(url, {
            method : "PUT",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        const resData = await response.json()
        return resData
    }
    //Make a HTTP DELETE Requests
    async delete(url){
        const response = await fetch(url, {
            method : "DELETE",
            headers : {
                "Content-type" : "application/json"
            }
        })
        const resData = await response.json()
        return resData
    }
}