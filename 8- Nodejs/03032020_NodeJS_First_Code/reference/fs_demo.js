const fs = require("fs")
const path = require("path")

//create folder

// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => { //err = callback function
//     if (err) throw err;
//     console.log("Folder created ...");
// })

//create a file and write to it.
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello FBW4 Heroes", err => {
//     if (err) throw err
//     console.log("File written ...");
// })

//create a file, write and append to it.
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hello FBW4 Heroes ... ", err => {
//     if (err) throw err
//     console.log("File written ...");
//     //file append
//     fs.appendFile(path.join(__dirname, "/test", "hello.txt"), "I love Node.js", err => {
//         if (err) throw err
//         console.log("Text appended!");
//     })

// })

//Read File
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data)=>{
//     if(err) throw err
//     console.log(data);
// })

//rename a file
// fs.rename(path.join(__dirname, "/test", "hello.txt"),
//     path.join(__dirname, "/test", "hello_world.txt"),
//     err => {
//         if (err) throw err
//         console.log("File Renamed!");
//     }
// )
/*------------------------------------------------------------------------- */
/*
write the following users name in a file and then display them
"Omer", "Sascha", "Stefan"
- create a folder called users
- create a file and write 
- readFile
*/
/*
const users = [{
    name: "Omer"
}, {
    name: "Sascha"
}, {
    name: "Stefan"
}]
fs.mkdir(path.join(__dirname, "/data"), {}, err => {
    if (err) throw err
    console.log("Folder Created ...!");

    fs.writeFile(path.join(__dirname, "/data", "users.json"), JSON.stringify(users), err => {
        if (err) throw err
        console.log("File created and data written ...");

        fs.readFile(path.join(__dirname, "/data", "users.json"), "utf8", (err, users) => {
            if (err) throw err
            //display users name
            JSON.parse(users).forEach(user => {
                console.log(user.name)
            })
            //alert the successfull message
            console.log("Users name displayed!")
        })
    })
})
*/
/*-------------------------------------------------------------------- */
//delete a folder
//note: Folder To be Deleted must be an empty folder
/*
fs.rmdir(path.join(__dirname, "myFolderToDelete"), err => {
    if (err) throw err
    console.log("Folder Deleted!")
})
*/
//read the content of a folder
/*
fs.readdir(__dirname, (err, files) => {
    if (err) throw err
    console.log(files)
})

fs.readdir(path.join(__dirname, "/data"), (err, files) => {
    if (err) throw err
    console.log(files)
})
*/
//copy a file
fs.copyFile(path.join(__dirname, "/data", "users.json"), path.join(__dirname, "/data", "copy.json"), err => {
    if (err) throw err
    console.log("File copied!")
})
// result if there is no destination file , it will be created and write a copy of it
// result if the destination file has some data, it will replace it with the copied data
//result if no source: it will throw an error