const express = require("express");
const router = express.Router();

// import all the controllers
const {signUp, login} = require("../Controllers/Auth");

// Import all the middlewears
const {auth} = require("../Middlewares/auth");

// Create Routes
// Signup route
router.post("/signup", signUp);

// login route
router.post("/login", login);


// Export Router
module.exports = router;