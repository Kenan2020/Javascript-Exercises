const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const auth = require("../../middleware/auth")
const {
    check,
    validationResult
} = require("express-validator")

const User = require("../../models/User")

//@route  GET  api/auth
//@desc   Get user by token
//@access Private

router.get("/", auth, async (req, res) => {
    //try to find one user by id
    //catch the error, set status to 500, send Server error

    try {
        const user = await User.findById(req.user.id).select("-password")
        res.json(user)
    } catch (error) {
        res.status(500).send("Server Error!")
    }
})
//@route  POST  api/auth
//@desc   Login: Authenticate user & get token
//@access Public
router.post("/", [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter your password").exists()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {
        email,
        password
    } = req.body
    //try to check if there is a user: email and password
    try {
        //get user by email
        let user = await User.findOne({
            email
        })
        if (!user) {
            return res.status(400).json({
                errors: [{
                    msg: "Invalid Credentials!"
                }]
            })
        }
        //compare the password
        const isMath = await bcrypt.compare(password, user.password)
        if (!isMath) {
            return res.status(400).json({
                errors: [{
                    msg: "Invalid Credentials!"
                }]
            })
        }
        // Return the jsonwebtoken
        const payload = {
            user: {
                id: user.id
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
        console.error(error.message);
        res.status(500).send("Server Error!")
    }
})


module.exports = router