const winston = require("winston");

// Console transport for winton.
const consoleTransport = new winston.transports.Console();

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [consoleTransport]
});

// Enable extensive logging if the DEBUG environment variable is set.
if (process.env.DEBUG) {
  // Print all winston log levels.
  logger.level = "silly";
} else {
  // By default, only print all 'verbose' log level messages or below.
  logger.level = "verbose";
}

module.exports.logger = logger;
module.exports.transports = [consoleTransport];
