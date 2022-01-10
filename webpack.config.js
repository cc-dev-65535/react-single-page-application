let path = require("path");

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
          {
            loader: 'style-loader'
          },
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
  }
};
