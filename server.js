require("dotenv").config();
const express = require("express");
require("express-async-errors");
const helmet = require("helmet");
const exphbs = require("express-handlebars");
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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// html routes
app.use("/", adminHtml);

app.use("/api/users", users);
// app.use("/api/login", login);
app.use("/api/payments", payments);
app.use("/api/services", services);
app.use("/api/apartments", apartments);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
