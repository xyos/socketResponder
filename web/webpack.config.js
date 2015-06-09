var webpack = require('webpack');

module.exports = {
  devtool: "eval",
  entry: {
    app: [
      "./src/scripts/main.js"
    ]
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  plugins: [
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot!jsx",
        exclude: /node_modules/
      },

      {
        test: /\.less$/,
        loader: "style!css!less"
      },

      {
        test: /bootstrap\/js\//,
        loader: 'imports?jQuery=jquery'
      },

      {
        test: /\.(ttf|eot|svg)$/,
        loader: 'file-loader'
      },

      {
        test: /\.woff2?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },

      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.html$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      }
    ]
  }
};
