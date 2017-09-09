const path = require('path');
const express = require('express');
const webpack = require('webpack');
const MongoDataLayer = require('./back-end/src/dataLayer/MongoDataLayer');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

const app = express();

MongoDataLayer.connect(() => {
  if (isDeveloping) {
    const config = require('./webpack.config.js');
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: 'src',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
  }
  else {
    app.all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.use(express.static(path.join(__dirname, 'dist')));
  }

  app.listen(process.env.PORT || 3000);

  console.log("App is running on port " + (process.env.PORT || 3000));

  app.use('/api', require('./back-end/src/index'));

  app.use('/public', express.static(path.join(__dirname, 'front-end/public')));

  // app.get('*', function(req, res) {
  //   res.sendFile(path.join(__dirname, 'dist/index.html'));
  // });
});
