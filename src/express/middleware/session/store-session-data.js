// Middleware that adds the user of this session as a local variable,
// so it can be displayed on all pages when logged in.
const sessionDataAdder = (req, res, next) => {
  res.locals.name = "-";
  if (req.user && req.user.profile && req.user.profile.name) {
    res.locals.name =
      req.user.profile.name.givenName || req.user.profile.displayName;
  }

  res.locals.avatarUrl = "";
  if (req.user && req.user.profile && req.user.profile.photos) {
    res.locals.avatarUrl = req.user.profile.photos[0].value;
  }
  next();
};

const addSessionDataToLocal = app => app.use(sessionDataAdder);

module.exports = addSessionDataToLocal;
