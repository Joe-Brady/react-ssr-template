const express = require("express");
const webpack = require("webpack");
const config = require("../webpack.config.js");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(3000, err => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on http://localhost:3000");
});
