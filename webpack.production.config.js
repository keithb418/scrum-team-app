const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const compressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

const VENDORS = [
  'react', 'react-dom', 'redux', 'redux-thunk', 
  'react-redux', 'react-bootstrap', 'react-fontawesome', 'axios'
];
module.exports = {
  entry: {
    vendor: VENDORS,
    main: [
      'babel-polyfill', 
      path.join(__dirname, './front-end/src/index.js')
    ],
  },
  mode: "production",
  output: {
    filename: '[name]-bundle.js',
    chunkFilename: "[name].js",
    path: path.join(__dirname, '/dist/'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { 
        test: /\.svg$/, 
        loader: 'svg-loader' 
      },
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'front-end/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin('[name].css'),
    new optimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new UglifyJSPlugin(),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new BrotliPlugin()
  ],
};