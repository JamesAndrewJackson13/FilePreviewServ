const { passport } = require("@/express/middleware/auth/passport.js");

module.exports.googleLoginCallback = {
  method: "get",
  path: "/google/callback",
  resolver: [
    passport.authenticate("google", {
      failureRedirect: "/",
      failureFlash: true,
      session: true
    }),
    function(req, res) {
      res.send(`<script>window.close()</script>`);
    }
  ]
};
