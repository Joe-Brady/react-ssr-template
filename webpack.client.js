const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client",
      path.resolve(__dirname, "client/index.js")
    ]
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "[name].js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
