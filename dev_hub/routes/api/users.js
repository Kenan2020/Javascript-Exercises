const express = require("express")
const router = express.Router()
const gravatar = require("gravatar")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require('jsonwebtoken');
const {
    check,
    validationResult
} = require("express-validator")
const User = require("../../models/User")

//@route  Post  api/users
//@desc   Register user route
//@access Public

router.post("/", [check("name", "Name is required").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a password with 6 characters").isLength({
        min: 6
    })
], async (req, res) => {
    //console.log(req.body);
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {
        name,
        email,
        password
    } = req.body
    //(1) see if the user exist: try to get user by the email
    try {
        let user = await User.findOne({
            email
        }) //this is promise
        //if the user exist
        if (user) {
            return res.status(400).json({
                error: [{
                    msg: "User already exists!"
                }]
            })
        }
        //(2) get the user gravatar
        const avatar = gravatar.url(email, {
            s: "200", //decide default size
            r: "pg", //we can't have any naked people or anything
            d: "mm" //it gives you a default image which is like a user icon
        })

        user = new User({
            name,
            email,
            avatar,
            password
        })
        //(3) Encrypt the password
        const salt = await bcrypt.genSalt(10) //promise -- to do the hashing with
        user.password = await bcrypt.hash(password, salt) //promise

        await user.save()

        //(4) Return the jsonwebtoken
        const payload = { //payload = data
            user: {
                id: user.id //_id: mongoose uses an abstraction -- no need for the "_"
            }
        }
        jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 3600
        }, (error, token) => {
            if (error) throw error
            res.json({
                token
            })
        })

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Server Error!")
    }


    //res.send("User Route")
})

module.exports = router