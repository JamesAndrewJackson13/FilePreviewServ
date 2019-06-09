import { config } from "../../config.js";
import express from "express";

const createServer = async () => new express();
const runServer = async app => app.listen(config.port);

export { createServer, runServer };
