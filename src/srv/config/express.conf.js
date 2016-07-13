var express = require(swot.VENDOR_DIR + 'express');

module.exports.configure = configure;

function configure(app) {
  app.use(express.static('src/pub/'));
}
