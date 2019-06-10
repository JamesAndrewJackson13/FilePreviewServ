const { logger, transports } = require("./logger.js");
const expressWinston = require("express-winston");

module.exports.loggingMiddleware = app => {
  // Enable extensive logging if the DEBUG environment variable is set.
  if (process.env.DEBUG) {
    // Enable express.js debugging. This logs all received requests.
    app.use(
      expressWinston.logger({
        transports: [transports],
        winstonInstance: logger
      })
    );
    // Enable request debugging.
    require("request-promise").debug = true;
  }
};
