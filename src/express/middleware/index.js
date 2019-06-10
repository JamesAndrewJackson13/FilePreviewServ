// const cacheMiddleware = require("./cache");
// const authMiddleware = require("./auth");
// const sessionMiddleware = require("./session");
const { cacheMiddleware } = require("./cache");
const { authMiddleware } = require("./auth");
const { sessionMiddleware } = require("./session");
const { loggingMiddleware } = require("./logging");

const middlewareList = [
  {
    order: 0,
    name: "logging",
    middleware: loggingMiddleware
  },
  {
    order: 200,
    name: "cached",
    middleware: cacheMiddleware
  },
  {
    order: 400,
    name: "session",
    middleware: sessionMiddleware
  },
  {
    order: 600,
    name: "auth",
    middleware: authMiddleware
  }
];

const middlewareSort = (a, b) => a.order - b.order;
middlewareList.sort(middlewareSort);

const addMiddleware = async app => {
  console.log("ADDING MIDDLE");
  for (const { name, order, middleware } of middlewareList) {
    console.log(`       NAME: ${name}\n      ORDER: ${order}\n`);
    await middleware(app);
  }
  return app;
};

module.exports = addMiddleware;
