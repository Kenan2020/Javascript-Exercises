const express = require('express');
const router = express.Router();

/* GET users listing. */
// the url for this route is /users as it is mentioned in app.js
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;