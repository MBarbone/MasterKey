require("dotenv").config();
const express = require("express");
require("express-async-errors");
const helmet = require("helmet");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const adminHtml = require("./routes/admin-html-routes");
const payments = require("./routes/payments");
const services = require("./routes/services");
const apartments = require("./routes/apartments");
const users = require("./routes/users");
// const login = require("./routes/login2");

const PORT = process.env.PORT || 8080;
const app = express();

const db = require("./models");

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// html routes
// app.use("/", adminHtml);

// app.use("/api/users", users);
// // app.use("/api/login", login);
// app.use("/api/payments", payments);
// app.use("/api/services", services);
// app.use("/api/apartments", apartments);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/tenant/home", async (req, res) => {
  res.render("tenantHome");
});

app.get("/tenant/services", async (req, res) => {
  res.render("tenantService");
});

app.get("/admin/home", async (req, res) => {
  res.render("adminHome");
});

app.get("/admin/building", async (req, res) => {
  res.render("buildingTenants");
});

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
