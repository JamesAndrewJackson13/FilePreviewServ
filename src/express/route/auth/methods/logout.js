module.exports.logout = {
  method: "get",
  path: "/logout",
  resolver: (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect("/");
  }
};
