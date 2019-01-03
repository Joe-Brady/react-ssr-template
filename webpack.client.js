const path = require("path");
const webpack = require("webpack");
const { ReactLoadablePlugin } = require("react-loadable/webpack");

module.exports = {
  mode: "development",
  entry: {
    app: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client",
      "./client/index.js"
    ]
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  // output: {
  //   path: path.resolve(__dirname, "dist"),
  //   filename: "client.bundle.js"
  // },
  plugins: [
    new ReactLoadablePlugin({
      filename: "./dist/react-loadable.json"
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
