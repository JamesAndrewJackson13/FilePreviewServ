// import { config } from "/sandbox/src/config.js";
// import express from "express";
const config = require("../config.js");
const express = require("express");

const createServer = async () => console.log("MAKING SERVER") || new express();
const runServer = async app =>
  console.log("MAKING SERVER LISTEN") || app.listen(config.port);

module.exports = { createServer, runServer };
