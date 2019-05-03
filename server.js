require("dotenv").config();
const express = require("express");
require("express-async-errors");
const helmet = require("helmet");
const exphbs = require("express-handlebars");
// const payments = require("./routes/payments");
// const services = require("./routes/services");
// const apartments = require("./routes/apartments");
// const db = require("./db/connection");
// const users = require("./routes/users");
// const login = require("./routes/login");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
// app.use("/api/users", users);
// app.use("/api/login", login);
// app.use("/api/payments", payments);
// app.use("/api/services", services);
// app.use("/api/apartments", apartments);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});
