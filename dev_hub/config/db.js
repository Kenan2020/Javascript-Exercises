const mongoose = require("mongoose")
const config = require("config")
const db = config.get("mongoURI")

//mongoose.connect() -- create a promise that mean we want to use async await
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected ...`);
    } catch (error) {
        console.error(error.message)
        //Exit process with failure
        process.exit(1) //(1) with failer
    }
}
module.exports = connectDB