import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import { config } from "../../../config.js";

const handleSerialize = (user, done) => done(null, user);
const handlePassportUse = (token, rt, profile, done) =>
  done(null, { profile, token });

const strategyConfig = {
  clientID: config.oAuthClientID,
  clientSecret: config.oAuthClientSecret,
  callbackURL: config.oAuthCallbackUrl,
  userProfileURL: config.userProfileURL
};

const effectiveStratagy = new Strategy(strategyConfig);

passport.serializeUser(handleSerialize);
passport.deserializeUser(handleSerialize);
passport.use(effectiveStratagy, handlePassportUse);

export { passport };
