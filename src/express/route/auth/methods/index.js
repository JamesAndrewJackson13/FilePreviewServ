const { logout } = require("./logout.js");
const { googleLogin } = require("./login.js");
const { googleLoginCallback } = require("./redirect.js");

module.exports.paths = [logout, googleLogin, googleLoginCallback];
