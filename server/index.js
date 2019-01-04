import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheet } from "styled-components";
import { getBundles } from "react-loadable/webpack";
import Loadable from "react-loadable";
import stats from "../dist/react-loadable.json";
import createFullPageHtml from "../client/document";
import App from "../client/App";

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
  const sheet = new ServerStyleSheet();
  const context = {};
  const modules = [];

  const appHtml = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Loadable.Capture>
    )
  );

  const styles = sheet.getStyleTags();

  const bundles = getBundles(stats, modules);

  const pageHtml = createFullPageHtml(appHtml, bundles, styles);

  res.send(pageHtml);
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log("Running on http://localhost:3000/");
  });
});
