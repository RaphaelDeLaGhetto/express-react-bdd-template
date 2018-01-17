let path = require('path');
let webpack = require('webpack');
 
module.exports = {
  entry: './views/main.js',
  output: { path: __dirname, filename: './public/javascripts/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  }
};
