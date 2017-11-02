'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: '#source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, './front-end/src/index.js')
  ],

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'front-end/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        "presets": ["react", ["es2015", { "modules": false }], "stage-0", "react-hmre"]
      }
    },
    { test: /\.svg$/, exclude: /node_modules/, loader: 'svg-loader' },
    {
      test: /\.(jpg|png|ico|svg)$/,
      loader: 'file-loader',
      options: {
        name: './img/[name].[ext]',
      },
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!sass-loader",
        publicPath: "/"
      })
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  }
};