require("dotenv").config();
const express = require("express");
// require("express-async-errors");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const db = require("./models");
const path = require("path");
// const passport = require("passport");
// const flash = require("connect-flash");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// require("./config/passport")(passport);

const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "public"));

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.get("/tenant/login", async (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/user-login.html"));
});

app.get("/admin/login", async (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/admin-login.html"));
});

app.get("/tenant/home", async (req, res) => {
  res.render("tenantHome");
});

app.get("/tenant/services", async (req, res) => {
  res.render("tenantService");
});

app.get("/admin/home", async (req, res) => {
  res.render("adminHome");
});

app.post("/admin/home", async (req, res) => {
  console.log("post new building", req.body);
  res.json(req.body);
  // res.redirect("/admin/home");
});

app.get("/admin/building/:id", async (req, res) => {
  const apartment = await db.Apartment.findOne({
    where: {
      id: parseInt(req.params.id)
    },
    include: [db.User]
  });
  if (!apartment) {
    res.status(404).send("No apartment found");
  }
  console.log("apartment", apartment);
  res.render("buildingTenants", apartment.dataValues);
});

app.use("/api/users", require("./routes/users"));
app.use("/api/apartments", require("./routes/apartments"));

app.get("/admin/building", async (req, res) => {
  res.render("buildingTenants");
});

app.get("/tenant/home", async (req, res) => {
  res.render("tenantHome");
});

app.get("/admin/payments", async (req, res) => {
  res.render("adminPayments");
});

app.get("/tenant/services", async (req, res) => {
  res.render("tenantService");
});

app.get("/tenant/payments", async (req, res) => {
  res.render("tenantPayment");
});

const PORT = process.env.PORT || 3000;

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
