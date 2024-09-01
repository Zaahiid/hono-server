import { Hono } from "hono";

import home from "./routes/home.routes.js";
import testMiddleware from "./middlewares/test.middlewares.js";

const app = new Hono().basePath("/api/v1");

app.use("*/isAuth/", testMiddleware);

app.route("/home", home);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
