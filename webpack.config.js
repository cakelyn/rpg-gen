const path = require("path");

const APP_DIR = path.resolve(__dirname, "src");
const BUILD_DIR = path.resolve(__dirname, "client");

module.exports = {
  entry: APP_DIR + "/Index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react", "env"]
        }
      }
    ]
  }
};
