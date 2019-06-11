import { Home } from "@/marko";

const routeMarkoPages = app => {
  app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    Home.render({}, res);
  });
  return app;
};

export { routeMarkoPages };
