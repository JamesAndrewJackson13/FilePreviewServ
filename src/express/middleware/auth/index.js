const passport = require("./passport.js");

const authMiddleware = async app => {
  app.use(passport.initialize());
  app.use(passport.session());
  return app;
};

module.exports.authMiddleware = authMiddleware;
