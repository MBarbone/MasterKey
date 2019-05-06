const express = require("express");
const path = require("path");
const router = express.Router();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.get("/tenant/login", async (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/user-login.html"));
});

app.get("/admin/login", async (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/admin-login.html"));
});

// app.get("/tenant/home", async (req, res) => {
//   res.render("tenantHome");
// });

// app.get("/tenant/services", async (req, res) => {
//   res.render("tenantService");
// });

app.get("/admin/home", async (req, res) => {
  res.render("adminHome");
});

app.post("/admin/home", jsonParser, async (req, res) => {
  console.log("post new building", req.body);
  res.json(req.body);
  // res.redirect("/admin/home");
});

// app.get("/admin/building", async (req, res) => {
//   res.render("buildingTenants");
// });

// app.get("/tenant/home", async (req, res) => {
//   res.render("tenantHome");
// });

// app.get("/admin/payments", async (req, res) => {
//   res.render("adminPayments");
// });

// app.get("/tenant/services", async (req, res) => {
//   res.render("tenantService");
// });

// app.get("/tenant/payments", async (req, res) => {
//   res.render("tenantPayment");
// });
