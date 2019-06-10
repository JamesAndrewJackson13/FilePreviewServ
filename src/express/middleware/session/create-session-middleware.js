const session = require("express-session");
const sessionFileStore = require("session-file-store");

const fileStore = sessionFileStore(session);
const sessionInstance = session({
  resave: true,
  saveUninitialized: true,
  store: new fileStore({}),
  secret: "photo frame sample"
});

const initSessionMiddleware = app => app.use(sessionInstance);

module.exports = initSessionMiddleware;
