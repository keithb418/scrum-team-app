const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const VENDORS = [
  'react', 'react-dom', 'redux', 'redux-thunk', 
  'react-redux', 'react-bootstrap', 'react-fontawesome', 'axios'
];
module.exports = {
  entry: {
    vendor: VENDORS,
    main: [
      "babel-runtime/regenerator",
      "webpack-hot-middleware/client?reload=true",
      "./front-end/src/index.js"
    ]
  }, 
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    chunkFilename: '[name].js',
    filename: '[name]-bundle.js', 
    publicPath: '/'
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader"
        }
      ]
    },
    { 
      test: /\.svg$/, 
      use: [
        {   
          loader: 'svg-loader' 
        }
      ]
    },
    {
      test: /\.(jpg|png|ico|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './img/[name].[ext]',
          },
        }
      ]  
    },
    {
      test: /\.json?$/,
      use: [
        {
          loader: 'json-loader'
        }
      ]  
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader',
        publicPath: '/'
      })
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'css-loader'
        },
        { 
          loader: 'style-loader'
        }
      ]     
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'front-end/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        WEBPACK: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
};