const path = require("path");
const express = require("express");
const router = express.Router();

// login page selection
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// building manager login
router.get("/admin/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/admin-login.html"));
});

// tenant login
router.get("/user/login", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/user-login.html"));
});

// tenant login
router.get("/admin/create-user", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/create-user.html"));
});

module.exports = router;
