const express = require("express");
const router = express.Router();

const userRoute = require("./userRoutes");
const zodiacRoute = require('./zodiacRoutes')


router.use("/user", userRoute);
router.use("/zodiac", zodiacRoute);


module.exports = router;