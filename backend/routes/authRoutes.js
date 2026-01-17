const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/authController");

// register route
router.post("/register", registerUser);

module.exports = router;
