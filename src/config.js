const config = {
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  oAuthClientID: process.env.CLIENT_ID,
  oAuthClientSecret: process.env.CLIENT_SECRET,
  oAuthCallbackUrl: process.env.REDIRECT_URI,
  port: 8080,
  photosToLoad: 150,
  searchPageSize: 100,
  albumPageSize: 50
};

export { config };
