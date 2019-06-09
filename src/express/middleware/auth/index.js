import { passport } from "./passport.js";

const authMiddleware = async app => {
  app.use(passport.initialize());
  app.use(passport.session());
  return app;
};

export { authMiddleware };
