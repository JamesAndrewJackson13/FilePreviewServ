const { Router } = require("express");
const { paths } = require("./methods");

const path = "/auth";
const base = Router().route(path);
paths.forEach(({ method, path, resolver }) => base[method](path, resolver));

module.exports = base;
