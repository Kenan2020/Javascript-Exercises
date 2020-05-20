const express = require("express")
const router = express.Router()
const MovieReviews = require("../models/MovieReviews")

router.get("/get-review", async (req, res, next) => {
    //We need await, to get data first from MongoDB and it as a response to the route
    let reviews = await MovieReviews.find()
    res.send(reviews)
})

router.post("/new-review", (req, res, next) => {
    let {
        title,
        rating,
        comment,
        MovieTitle,
        movieID
    } = req.body

    let newReview = new MovieReviews({
        title: title,
        rating: parseInt(rating),
        comment: comment,
        MovieTitle: MovieTitle,
        movieID: movieID
    })

    newReview.save() //save is a promise
        .then(response => {
            console.log(response);
            res.send({
                msg: "new review saved",
                mongo_response: response
            })
        })
        .catch(error => {
            console.log(error);
            res.send({
                msg: error
            })
        })
})

router.put("/update-review", (req, res, next) => {
    let {
        title,
        rating,
        comment,
        id,
        MovieTitle,
        movieID
    } = req.body

    let newData = {
        title: title,
        rating: parseInt(rating),
        comment: comment,
        MovieTitle: MovieTitle,
        movieID: movieID
    }

    MovieReviews.findByIdAndUpdate(id, newData)
        .then(response => {
            console.log(response);
            res.send({
                msg: "Review was updated",
                mongo_response: response
            })
        })
        .catch(error => {
            res.send({
                msg: error
            })
        })
})

router.delete("/delete-review", (req, res, next) => {
    let {
        id
    } = req.body

    MovieReviews.findByIdAndDelete(id)
        .then(response => {
            console.log(response);
            res.send({
                msg: "Review was delete",
                mongo_response: response
            })
        })
        .catch(error => {
            res.send({
                msg: error
            })
        })
})

//http://google.com/?search="javascript"&lan="english"
//everything after the (?) is taked as query variables
router.get("/get-reviews-movie", async (req, res) => {
    let movieID = req.query.movieid

    let reviews = await MovieReviews.find({
        movieID: movieID
    })
    res.send(reviews)
})

module.exports = router