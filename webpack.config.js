var webpack = require('webpack');

var webpackConfig = {
  entry: "./app/index.js",
  output: {
    filename: 'script.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    },
  ]},
};

module.exports = webpackConfig;