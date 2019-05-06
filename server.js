require("dotenv").config();
const express = require("express");
// require("express-async-errors");
// const helmet = require("helmet");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models");
const path = require("path");
const passport = require("passport");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("./config/passport")(passport);

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/html/index.html"));
// });

// app.get("/tenant/login", async (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/html/user-login.html"));
// });

// app.get("/admin/login", async (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/html/admin-login.html"));
// });

// // app.get("/tenant/home", async (req, res) => {
// //   res.render("tenantHome");
// // });

// // app.get("/tenant/services", async (req, res) => {
// //   res.render("tenantService");
// // });

// app.get("/admin/home", async (req, res) => {
//   res.render("adminHome");
// });

// app.post("/admin/home", jsonParser, async (req, res) => {
//   console.log("post new building", req.body);
//   res.json(req.body);
//   // res.redirect("/admin/home");
// });

// // app.get("/admin/building", async (req, res) => {
// //   res.render("buildingTenants");
// // });

// // app.get("/tenant/home", async (req, res) => {
// //   res.render("tenantHome");
// // });

// // app.get("/admin/payments", async (req, res) => {
// //   res.render("adminPayments");
// // });

// // app.get("/tenant/services", async (req, res) => {
// //   res.render("tenantService");
// // });

// // app.get("/tenant/payments", async (req, res) => {
// //   res.render("tenantPayment");
// // });

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
