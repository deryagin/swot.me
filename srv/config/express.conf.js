var express = require(swot.VENDOR_DIR + 'express');
var bodyParser = require(swot.VENDOR_DIR + 'body-parser');
var compression = require(swot.VENDOR_DIR + 'compression');
var morgan = require(swot.VENDOR_DIR + 'morgan');

module.exports.configure = configure;

function configure(app) {
  app.use(compression());
  app.use(express.static('src/web/'));
  app.use(bodyParser.json());
  app.use(morgan('[:date[iso]] :remote-addr :method :url :status :res[content-length] :response-time ms'));
}
