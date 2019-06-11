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

const firebaseConfig = {
  apiKey: "AIzaSyDZkgQOsci95AU8ED555we6Jvmt97JuwSE",
  authDomain: "file-preview-creator.firebaseapp.com",
  databaseURL: "https://file-preview-creator.firebaseio.com",
  projectId: "file-preview-creator",
  storageBucket: "file-preview-creator.appspot.com",
  messagingSenderId: "512751646365",
  appId: "1:512751646365:web:ea38106612ceec93"
};

module.exports = { config, firebaseConfig };
