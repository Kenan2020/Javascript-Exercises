const moment = require("moment")

//create a middleware function
const logger = (req, res, next) => {
    //console.log(`Time: ${moment().format()}`);
    console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}: ${moment()}`);
    next()
}