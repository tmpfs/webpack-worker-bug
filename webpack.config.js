const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: "./index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devtool: false,
  mode: process.env.NODE_ENV || "development",
  plugins: [new CopyWebpackPlugin(["index.html"])],
  experiments: {
    //syncWebAssembly: true,
    //asyncWebAssembly: true,
    //topLevelAwait: true,
  },
};
