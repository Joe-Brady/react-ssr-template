const express = require("express");
const webpack = require("webpack");
const config = require("../webpack.client.js");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.get("*", (req, res) => {
  res.send(
    `<html>
      <head>
        <title>React Hot Loader Minimal Boilerplate</title>
      </head>
      <body>
        <div id="root"></div>

        <script src="app.js"></script>
      </body>
    </html>`
  );
});

app.listen(3000, err => {
  if (err) {
    console.log(err);
  }
  console.log("Listening on http://localhost:3000");
});
