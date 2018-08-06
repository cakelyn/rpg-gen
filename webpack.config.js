const path = require("path");

const APP_DIR = path.resolve(__dirname, "client/src");
const BUILD_DIR = path.resolve(__dirname, "client/dist");

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
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
