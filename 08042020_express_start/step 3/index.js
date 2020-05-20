const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const members = require("./members")
const logger = require("./middleware/logger")



//initialize a variable calledd app as an instance object of express
const app = express()


//use your middleware function
//app.use(logger)

//Get all members
app.get("/api/members", (req, res) => {
    res.json(members)
})
//get a single member
app.get("/api/members/:id", (req, res) => {
    //res.send(req.params.id)
    // res.json(members.filter(member => {
    //     return (member.id === parseInt(req.params.id))
    // }))
    //array.some (function(){condition}): boolean --returns true if one at least follow the condition otherwise false
    const found = members.some(member => (member.id === parseInt(req.params.id)))
    if (found) {
        res.json(members.filter(member => {
            return (member.id === parseInt(req.params.id))
        }))
    } else {
        res.status(400).json({
            msg: `Member with id ${req.params.id} not found!`
        })
    }
})

//set static folder : use method is for using a middleware
app.use(express.static("public"))

dotenv.config()
PORT = process.env.PORT
app.listen(PORT, () => console.log(`app is listening to port ${PORT}`))