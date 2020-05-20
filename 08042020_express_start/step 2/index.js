const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const members = require("./members")
const moment = require("moment")


//initialize a variable calledd app as an instance object of express
const app = express()

//create a middleware function
const logger = (req, res, next) => {
    //console.log(`Time: ${moment().format()}`);
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}: ${moment()}`);
    next()
}
//use your middleware function
app.use(logger)

//Get all members
app.get("/api/members", (req, res) => {
    res.json(members)
})

//set static folder : use method is for using a middleware
app.use(express.static("public"))

dotenv.config()
PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`))