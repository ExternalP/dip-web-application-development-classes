const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: "./public/web-components.html",
      template: "./public/index.html",

    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // headers: {
    //   "Content-Security-Policy":
    //     "default-src 'self'; style-src 'self' 'unsafe-inline' 'unsafe-eval'; script-src 'self' 'unsafe-eval'; connect-src 'self' http://localhost:3000 https://api.nasa.gov; img-src 'self' https://apod.nasa.gov;",
    // },
    compress: true,
    port: 3000,
  },
};
