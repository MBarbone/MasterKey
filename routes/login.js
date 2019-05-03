const bcrypt = require("bcryptjs");
const express = require("express");
const { check } = require("express-validator/check");
const mongoose = require("mongoose");
const User = require("../models/userModel");

const router = express.Router();

router.post(
  "/",
  [check("email").isLength({ min: 3 }), check("password").isLength({ min: 3 })],
  async (req, res) => {
    // Get user from database
    let user = await User.findOne({ email: req.body.email });
    // If he doesn't exist error.
    if (!user) return res.status(400).send("Invalid email or password.");

    // Compare the password given to the user's hashed password
    const isValid = await bcrypt.compare(req.body.password, user.password);
    // If not valid, error
    if (!isValid) return res.status(400).send("Invalid email or password.");
    // Okay lets generate token and send.

    res.send("loggedIn");
    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send(token);
  }
);

module.exports = router;
