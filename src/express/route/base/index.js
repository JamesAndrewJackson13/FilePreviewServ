import get from "./base.get.js";
import { Router } from "express";

const path = "/";
const base = Router();

base.route(path).get(get);

export default base;
