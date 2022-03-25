const express = require("express");
const router = express.Router();

const { fetchUserData, submitUser } = require("../controller/userController")

router.post("/submit", submitUser);
router.post("/user", fetchUserData);

module.exports = router
