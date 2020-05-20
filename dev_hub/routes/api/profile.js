const express = require("express")
const router = express.Router()
const normalize = require("normalize-url")
const auth = require("../../middleware/auth")
const {
    check,
    validationResult
} = require("express-validator")

//@route  GET  api/profile/me
//@desc   get current user profile
//@access Private //for people who loged in

router.get("/me", auth, async (req, res) => {
    //res.send("Profile Route"))
    try {
        const profile = await Profile.findOne({
            user: req.user.id
        }).populate("user", ["name", "avatar"])
        if (!profile) {
            return res.status(404).json({
                msg: "there is no profile for this user!"
            })
        }
        //if profile exist populate user [name, avatar]
        res.json(profile)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server Error")
    }
})

//@route  Post  api/profile
//@desc   Create or update user profile
//@access Private

router.post("/", [auth, [
    check("status", "Status is required").not().isEmpty(),
    check("skills", "Skills is required").not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }
    const {
        company,
        location,
        website,
        bio,
        skills,
        status,
        githubusername,
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook
    } = req.body
    //Create Profile fields and Profile object
    /*
    const profileFields = {}
    profileFields.user = req.user.id
    if (company) profileFields.company = company
    if (location) profileFields.location = location
    if (website) profileFields.website = website
    if (bio) profileFields.bio = bio
    if (status) profileFields.status = status
    if (githubusername) profileFields.githubusername = githubusername
    if (skills) {
        profileFields.skills = skills.split(",").map(skill => skill.trim())
    }
    */
    const profileFields = {
        user: req.user.id,
        company,
        location,
        website,
        bio,
        skills: Array.isArray(skills) ? skills : skills.split(",").map(skill => " " + skill.trim()),
        status,
        githubusername,

    }
    //console.log(profileFields.skills);
    //res.send("Hello")

    //Create social object
    const socialfields = {
        youtube,
        twitter,
        instagram,
        linkedin,
        facebook
    }
    for (const [key, value] of Object.entries(socialfields)) {
        if (value && value.length > 0) {
            socialfields[key] = normalize(value, {
                forceHttp: true
            })
        }
    }
    profileFields.social = socialfields

    /*
    profileFields.social = {}
    if (youtube) profileFields.social.youtube = youtube
    if (twitter) profileFields.social.twitter = twitter
    if (instagram) profileFields.social.instagram = instagram
    if (linkedin) profileFields.social.linkedin = linkedin
    if (facebook) profileFields.social.facebook = facebook
*/
    /*
        try {
            //try to find a profile
            let profile = await Profile.findOne({
                use: req.user.id
            })
            //update if it exists
            if (profile) {
                profile = await Profile.findOneAndUpdate({
                    user: req.user.id
                }, {
                    $set: profileFields
                }, {
                    new: true
                })
                return res.json(profile)
            }
            //Create new if not exists
            profile = new Profile(profileFields)
            await profile.save()
            return res.json(profile)

        } catch (error) {
            console.error(error.message)
            res.status(500).send("server Error")
        }
        */
    try {
        //Using upsert option (create new doc if no match is found)
        let profile = await Profile.findOneAndUpdate({
            user: req.user.id
        }, {
            $set: profileFields
        }, {
            new: true,
            upsert: true
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server Error")
    }
    res.json(profile)
})
//@route  Post  api/profile
//@desc   CGet all profiles
//@access Public

router.get("/", async (req, res) => {
    try {
        const profiles = await Profile.find().populate("user", ["name", "avatar"])
        res.json(profiles)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("server Error")
    }
})
//@route  GET  api/profile/user/:user:id
//@desc   Get profile by user id
//@access Public
router.get("/user/:user_id", async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id
        }).populate("user", ["name", "avatar"])
        if (!profile) {
            return res.status(404).json({
                msg: "profile not found!"
            })
        }
        res.json(profile)
    } catch (error) {
        console.error(error.message)
        if (error.name == "CastError") {
            return res.status(400).json({
                msg: "the user id is wrong formated!"
            })
        }
        res.status(500).send("server Error")
    }
})
module.exports = router