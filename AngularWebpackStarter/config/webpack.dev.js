var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  
  output: {
      "path": path.join(process.cwd(), "Scripts"),
      "filename": "[name].bundle.js",
      "chunkFilename": "[id].chunk.js"
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
