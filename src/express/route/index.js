import baseRoute from "./base";

const addRoutes = app => {
  app.use("/", baseRoute);
};

export { addRoutes };
