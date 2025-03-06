const express = require("express");
const { getGreeting } = require("../controllers/greetController");

const router = express.Router();

router.get("/greet", getGreeting);

module.exports = router;
