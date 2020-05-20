const express = require('express')
const User = require("../config/mysql/user")
const router = express.Router()

//Landing page
router.get("/", (req, res) => {
    //if there is session, then obtain the user
    let user = req.session.user

    if (user) {
        res.redirect("/home")
    }
    res.render("index", {
        title: "Mysql Login App"
    })
})

//home page
router.get("/home", (req, res) => {
    let user = req.session.user
    if (user) {
        res.render("home", {
            loged: req.session.loged,
            name: user.fullname
        })
    }
    res.redirect("/")
})

router.post("/login", async (req, res) => {
    //Call login function to get the approval from the database
    let result = await User.loginUser(req.body.username, req.body.password)

    if (result) {
        //save user info on the session
        req.session.user = result
        /*
        save a variable that tells me logged in, if 1 user has logged in,
        if 0 user has registered
        */
        req.session.loged = 1

        res.redirect("/home")

    } else {
        res.send("username/password incorrect")
    }
})

//Register route
router.post("/register", async (req, res) => {

    if (req.body.password !== req.body.confirmPassword) {
        res.send("password doesn't match")
    }
    //information coming from the form
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password
    }
    /*
        call createUser function to save data in the table
        lastId will be the id from the last user created
    */
    let lastId = await User.createUser(userInput)
    if (lastId) {
        let result = await User.findUser(lastId)
        req.session.user = result
        req.session.loded = 0
        res.redirect("/home")
    } else {
        res.send("Error creating new user")
    }
})

//loggout route
router.get("/loggedout", (req, res) => {
    if (req.session.user) {
        //Eliminate all info in the session after logged out
        req.session.destroy(() => {
            res.redirect("/")
        })
    }
})

module.exports = router