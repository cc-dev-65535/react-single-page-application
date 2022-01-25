const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./public/jsx/mainscript.jsx",
  mode: 'production',
  output: {
    path: path.resolve(__dirname,'public/javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin()
  ]
};
