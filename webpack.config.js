const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  "plugins": [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ],
  "module": {
    "rules": [
      {
        "test": /\.js/,
        "use": "babel-loader",
        "exclude": /node_modules/
      },
      {
        "test": /\.css/,
        "use": ["style-loader", "css-loader"]
      }
    ]
  }
}
