const data = [
    {
        name : "John Doe",
        age : 32,
        gender : "male",
        lookingfor : "female",
        location : "Hallololo",
        image : "https://randomuser.me/api/portraits/men/71.jpg"
    },{
        name : "Jen Smith",
        age : 26,
        gender : "female",
        lookingfor : "male",
        location : "Hellololo",
        image : "https://randomuser.me/api/portraits/women/71.jpg"
    },{
        name : "William Johnson",
        age : 30,
        gender : "male",
        lookingfor : "female",
        location : "Hillololo",
        image : "https://randomuser.me/api/portraits/men/70.jpg"
    }
]
const profiles = ProfileIterator(data)
//Call the first profile
nextProfile()
//next event
document.getElementById("next").addEventListener("click", nextProfile)
//document.getElementById("next").addEventListener("click", nextProfile)

//event Handler : display the next profile
function nextProfile(){
    const currentProfile = profiles.next().value
    if(currentProfile !== undefined){
        document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name : ${currentProfile.name}</li>
            <li class="list-group-item">Age : ${currentProfile.age}</li>
            <li class="list-group-item">Location : ${currentProfile.location}</li>
            <li class="list-group-item">Preference : ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `
    document.getElementById("imageDisplay").innerHTML = `<img src="${currentProfile.image}">`
    }else{
        //No more profiles
        window.location.reload()
    }
    
}
//Profile Iterator
function ProfileIterator(profiles){
    let nextIndex = 0
    return{
        next : function(){
            return nextIndex < profiles.length ?
            {value : profiles[nextIndex++], done : false} :
            {done : true}
        }
    }
}