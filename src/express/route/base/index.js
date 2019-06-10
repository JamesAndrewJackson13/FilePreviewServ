const get = require("./base.get.js");
const { Router } = require("express");

const path = "/";
const base = Router();

base.route(path).get(get);

module.exports = base;
