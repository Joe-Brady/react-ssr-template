import express from "express";
import Loadable from "react-loadable";
import router from "./router";

const app = express();

const developmentMode = process.env.NODE_ENV === "development";

if (developmentMode) {
  const webpack = require("webpack");
  const config = require("../webpack.client.js");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const DashboardPlugin = require("webpack-dashboard/plugin");

  const compiler = webpack(config);
  compiler.apply(new DashboardPlugin());

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static("dist"));
app.use(router());

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log("Running on http://localhost:3000/");
  });
});
