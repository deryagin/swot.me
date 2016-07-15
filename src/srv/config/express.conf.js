var express = require(swot.VENDOR_DIR + 'express');
var bodyParser = require(swot.VENDOR_DIR + 'body-parser');

module.exports.configure = configure;

function configure(app) {
  app.use(express.static('src/pub/'));
  app.use(bodyParser.json());
}
