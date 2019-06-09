import { cacheMiddleware } from "./cache";
import { authMiddleware } from "./auth";
import { sessionMiddleware } from "./session";

const middlewareList = [
  {
    order: 200,
    function: cacheMiddleware
  },
  {
    order: 400,
    function: sessionMiddleware
  },
  {
    order: 600,
    function: authMiddleware
  }
];

const middlewareSort = (a, b) => a.order - b.order;
middlewareList.sort(middlewareSort);

const addMiddleware = async app => {
  for (const middleware of middlewareList) {
    await middleware(app);
  }
  return app;
};

export { addMiddleware };
