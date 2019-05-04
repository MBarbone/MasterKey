const path = require("path");

module.exports = app => {
  // login page selection
  app.get("/", (res, req) => {
    res.sendfile(path.join(__dirname, "../public/index.html"));
  });

  // building manager login
  app.get("/admin/login", (res, req) => {
    res.sendfile(path.join(__dirname, "../public/admin-login.html"));
  });

  // tenant login
  app.get("/user/login", (res, req) => {
    res.sendfile(path.join(__dirname, "../public/user-login.html"));
  });
};
