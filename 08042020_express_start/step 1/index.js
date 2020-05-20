const express = require("express")
const path = require("path")
const dotenv = require("dotenv")

//initialize a variable calledd app as an instance object of express
const app = express()

//app.get("/", (req, res) => {
//    res.sendFile(path.join(__dirname, "public", "index.html"))
//})

//set static folder : use method is for using a middleware
//app.use(express.static(path.join(__dirname, "public")))
app.use(express.static("public"))

dotenv.config()
PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`))