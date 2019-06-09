import { initSessionMiddleware } from "./create-session-middleware.js";
import { addSessionDataToLocal } from "./store-session-data.js";

const sessionMiddleware = async app => {
  initSessionMiddleware(app);
  addSessionDataToLocal(app);
  return app;
};

export { sessionMiddleware };
