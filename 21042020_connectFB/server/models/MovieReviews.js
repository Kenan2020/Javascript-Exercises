const mongoose = require("mongoose")
//for each collection we need to create a schema
const MovieReviewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },

    movieTitle: {
        type: String,
        required: true
    },
    movieID: {
        type: String,
        required: true
    }

})

const MovieReviews = mongoose.model("MovieReviews", MovieReviewsSchema) //create a promise

module.exports = MovieReviews