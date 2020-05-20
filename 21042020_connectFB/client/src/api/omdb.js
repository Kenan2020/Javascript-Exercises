import axios from 'axios'

const key = "cc3f5b19"

const api = axios.create({
    //baseURL: "http://localhost:5000/api"
    baseURL: "http://www.omdbapi.com/"
})
/*
const getReviews = () => api.get("/get-review")
const newReviews = (data) => api.post("/new-review", data)
const apis = {
    getReviews,
    newReviews
}
*/
const searchMovies = (query) => api.get(`?apikey=${key}&s=${query}`)

const getSingleMovie = (movieID) => api.get(`?apikey=${key}&i=${movieID}`)

const apis = {
    searchMovies,
    getSingleMovie
}

export default apis