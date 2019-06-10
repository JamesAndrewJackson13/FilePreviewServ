const passport = require("passport");
const Strategy = require("passport-google-oauth20").Strategy;
const config = require("../../../config.js");

const handleSerialize = (user, done) => done(null, user);
const handlePassportUse = (token, rt, profile, done) =>
  done(null, { profile, token });

const strategyConfig = {
  clientID: config.oAuthClientID,
  clientSecret: config.oAuthClientSecret,
  callbackURL: config.oAuthCallbackUrl,
  userProfileURL: config.userProfileURL
};

const effectiveStratagy = new Strategy(strategyConfig, handlePassportUse);

passport.serializeUser(handleSerialize);
passport.deserializeUser(handleSerialize);
passport.use(effectiveStratagy);

module.exports = passport;
