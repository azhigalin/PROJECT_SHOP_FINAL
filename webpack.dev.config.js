const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./public/index.js"],
  },
  output: {
    path: path.join(__dirname, "dist/public"),
    publicPath: "/",
    filename: "js/[name].js",
  },
  target: "web",
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, use: [{ loader: "html-loader" }] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpg|svg|gif)$/i, type: "asset/resource" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      filename: "index.html",
      excludeChunks: ["server"],
    }),
  ],
};
