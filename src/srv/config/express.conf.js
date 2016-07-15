var express = require(swot.VENDOR_DIR + 'express');
var bodyParser = require(swot.VENDOR_DIR + 'body-parser');
var compression = require(swot.VENDOR_DIR + 'compression');

module.exports.configure = configure;

function configure(app) {
  app.use(compression());
  app.use(express.static('src/pub/'));
  app.use(bodyParser.json());
}
