const path = require("path");
const webpack = require("webpack");
const { ReactLoadablePlugin } = require("react-loadable/webpack");

const developmentMode = process.env.NODE_ENV === "development";

const webpackConfigClient = {
  mode: developmentMode ? "development" : "production",
  entry: {
    app: ["./client/index.js"]
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "client.bundle.js"
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: "./dist/react-loadable.json"
    })
  ]
};

if (developmentMode) {
  webpackConfigClient.entry.app.unshift(
    "react-hot-loader/patch",
    "webpack-hot-middleware/client"
  );
  webpackConfigClient.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfigClient;
