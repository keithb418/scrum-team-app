const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');
const MongoDataLayer = require('./back-end/src/dataLayer/MongoDataLayer');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

const app = express();

MongoDataLayer.connect(() => {
  if (isDeveloping) {
    const webpack = require('webpack');
    const config = require('./webpack.config.js');
    const compiler = webpack(config);
    require('webpack-mild-compile')(compiler);
    const webpackMiddleware = require('webpack-dev-middleware')(
      compiler, 
      config.devServer
    );
    const webpackHotMiddleware = require('webpack-hot-middleware')(
      compiler, 
      config.devServer
    );

    app.use(webpackMiddleware);
    app.use(webpackHotMiddleware);
  }
  else {
    const expressStaticGzip = require("express-static-gzip");
    app.use(
      expressStaticGzip("dist", {
        enableBrotli: true
      })
    );
    app.all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    });

    app.use(express.static(path.join(__dirname, 'dist')));
  }

  app.listen(port);

  console.log("App is running on port " + (port));

  app.use(bodyParser.json());

  app.use('/api', require('./back-end/src/index'));

  app.use('/public', express.static(path.join(__dirname, 'front-end/public')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
});
