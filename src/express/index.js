import { createServer, runServer } from "./server-actions.js";
import { addMiddleware } from "./middleware";
import { addRoutes } from "./route";

const server = () =>
  Promise.resolve(createServer)
    .then(addMiddleware)
    .then(addRoutes)
    .then(runServer);

export { server };
