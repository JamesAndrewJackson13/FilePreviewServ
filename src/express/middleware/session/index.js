const initSessionMiddleware = require("./create-session-middleware.js");
const addSessionDataToLocal = require("./store-session-data.js");

const sessionMiddleware = async app => {
  initSessionMiddleware(app);
  addSessionDataToLocal(app);
  return app;
};

module.exports.sessionMiddleware = sessionMiddleware;
