import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/components/App";
import Loadable from "react-loadable";
import { getBundles } from "react-loadable/webpack";
import stats from "../dist/react-loadable.json";

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
  let modules = [];

  let html = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  );

  let bundles = getBundles(stats, modules);

  res.send(
    `<html>
      <head>
        <title>React Hot Loader Minimal Boilerplate</title>
      </head>
      <body>
        <div id="root">${html}</div>
        ${bundles
          .map(bundle => {
            return `<script src="${bundle.file}"></script>`;
          })
          .join("\n")}
        <script src="client.bundle.js"></script>
      </body>
    </html>`
  );
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log("Running on http://localhost:3000/");
  });
});
