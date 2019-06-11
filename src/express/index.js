require("../poly.js");

// import { createServer, runServer } from "./server-actions.js";
// import { addMiddleware } from "./middleware";
// import { addRoutes } from "./route";
const { createServer, runServer } = require("./server-actions.js");
const addMiddleware = require("./middleware");
const addRoutes = require("./route");

const init = async () => {
  let app = await createServer();
  await addMiddleware(app);
  await addRoutes(app);
  await runServer(app);
};

init().catch(console.error);
