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

  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static("dist"));
app.use(router());

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log("Running on http://localhost:3000/");
  });
});
