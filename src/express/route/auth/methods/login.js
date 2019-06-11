const config = require("@/config.js");
const { passport } = require("@/express/middleware/auth/passport.js");

module.exports.googleLogin = {
  method: "get",
  path: "/google",
  resolver: passport.authenticate("google", {
    scope: config.scopes,
    failureFlash: true, // Display errors to the user.
    session: true
  })
};
