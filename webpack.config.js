const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const VENDORS = [
  'react', 'react-dom', 'redux', 'redux-thunk', 
  'react-redux', 'react-bootstrap', 'react-fontawesome', 'axios'
];
module.exports = {
  entry: {
    vendor: VENDORS,
    main: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?reload=true",
      './front-end/src/index.js'
    ]
  }, 
  mode: "development",
  output: {
    filename: '[name]-bundle.js',
    path: path.join(__dirname, '/dist/'),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    { test: /\.svg$/, loader: 'svg-loader' },
    {
      test: /\.(jpg|png|ico|svg)$/,
      loader: 'file-loader',
      options: {
        name: './img/[name].[ext]',
      },
    },
    {
      test: /\.json?$/,
     
      loader: 'json-loader'
    },
    {
      test: /\.scss$/,
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'front-end/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new optimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("[name].css")
  ]
};