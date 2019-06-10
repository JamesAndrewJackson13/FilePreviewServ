const config = require("../../../config.js");
const { logger } = require("../logging/logger.js");

module.exports.addRoutes = (app, passport) => {
  // GET request to log out the user.
  // Destroy the current session and redirect back to the log in screen.
  app.get("/logout", (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect("/");
  });

  // Star the OAuth login process for Google.
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: config.scopes,
      failureFlash: true, // Display errors to the user.
      session: true
    })
  );

  // Callback receiver for the OAuth process after log in.
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/",
      failureFlash: true,
      session: true
    }),
    (req, res) => {
      // User has logged in.
      logger.info("User has logged in.");
      res.redirect("/getAlbums");
    }
  );
};
