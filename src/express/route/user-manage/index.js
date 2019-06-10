const { Router } = require("express");

const path = "auth";
const base = Router();

base.route(path).get("/google/", function() {
  passport.authenticate('google', {
    scope: config.scopes,
    failureFlash: true,  // Display errors to the user.
    session: true,
  }));
});

module.exports = base;
