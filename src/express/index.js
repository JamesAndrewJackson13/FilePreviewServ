// import { createServer, runServer } from "./server-actions.js";
// import { addMiddleware } from "./middleware";
// import { addRoutes } from "./route";
const { createServer, runServer } = require("./server-actions.js");
const addMiddleware = require("./middleware");
const addRoutes = require("./route");

const server = () =>
  Promise.resolve(createServer())
    .then(addMiddleware)
    .then(addRoutes)
    .then(runServer);

module.exports = server;
