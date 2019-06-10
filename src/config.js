const googleSecretInfo = JSON.parse(process.env.GOOGLE_AUTH_JSON).web;

const config = {
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  oAuthClientID: googleSecretInfo.client_id,
  oAuthClientSecret: googleSecretInfo.client_secret,
  oAuthCallbackUrl: googleSecretInfo.redirect_uris[0],
  scopes: ["profile"],
  port: 8080,
  photosToLoad: 150,
  searchPageSize: 100,
  albumPageSize: 50
};

module.exports = config;
