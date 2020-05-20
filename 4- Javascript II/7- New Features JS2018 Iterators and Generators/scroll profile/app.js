//const http = new EasyHTTP
//localStorage.clear()
//Get Users
async function sampleFunc(){

}
http.get("https://api.github.com")
.then(val => {console.log(val)
    
    if(localStorage.getItem("profiles") === null){
        profiles = []
    }else{
        profiles = JSON.parse(localStorage.getItem("profiles"))
    }
    localStorage.setItem("profiles", JSON.stringify(val))
    }
)

//.catch(err => console.log(err))

let profiles = JSON.parse(localStorage.getItem("profiles"))
console.log(profiles)

const files = ProfileIterator(profiles)
//Call the first profile
nextProfile()
//next event
document.getElementById("next").addEventListener("click", nextProfile)
//document.getElementById("next").addEventListener("click", nextProfile)

//event Handler : display the next profile
function nextProfile(){
    const currentProfile = files.next().value
    if(currentProfile !== undefined){
        document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name : ${currentProfile.login}</li>
            <li class="list-group-item">ID : ${currentProfile.id}</li>
        </ul>
        `
    //document.getElementById("imageDisplay").innerHTML = `<img src="${currentProfile.}">`
    }else{
        //No more profiles
        window.location.reload()
    }
    
}
//Profile Iterator
function ProfileIterator(files){
    let nextIndex = 0
    return{
        next : function(){
            return nextIndex < profiles.length ?
            {value : profiles[nextIndex++], done : false} :
            {done : true}
        }
    }
}
