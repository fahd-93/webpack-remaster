var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
      rules: [
          { // css / sass / scss loader for webpack
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'sass-loader' ],
              })
          }
      ]
  },
  plugins: [
      new ExtractTextPlugin({ // define where to save the file
          filename: '../css/style.css',
          allChunks: true,
      }),
  ],
};