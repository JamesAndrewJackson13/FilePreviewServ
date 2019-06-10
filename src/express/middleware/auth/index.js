const passport = require("./passport.js");
const { addRoutes } = require("./auth-route.js");

const authMiddleware = async app => {
  app.use(passport.initialize());
  app.use(passport.session());
  addRoutes(app, passport);
  return app;
};

module.exports.authMiddleware = authMiddleware;
