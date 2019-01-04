const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const developmentMode = process.env.NODE_ENV === "development";

const webpackConfigServer = {
  mode: developmentMode ? "development" : "production",
  target: "node",
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, "server/index.js"),
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.bundle.js"
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
};

module.exports = webpackConfigServer;
