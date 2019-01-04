import express from "express";
import ReactDOMServer from "react-dom/server";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats from "../dist/react-loadable.json";
import createFullPageHtml from "../client/document";
import App from "../client/components/App";

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

app.get("*", (req, res) => {
  const modules = [];

  const appHtml = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules);

  const pageHtml = createFullPageHtml(appHtml, bundles);

  res.send(pageHtml);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log("Running on http://localhost:3000/");
  });
});
