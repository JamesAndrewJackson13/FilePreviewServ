require("./poly.js");

process.env.DEBUG = true;

// import { server } from "./express";
const server = require("./express");

const start = async () => {
  const app = await server();
  // console.log(app);
  // console.log(app._router.stack);
};

start().catch(console.error);
