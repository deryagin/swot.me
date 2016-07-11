var express = require(swot.VENDOR_DIR + 'express');

module.exports = function configureExpress(app) {
  app.use(express.static('src/pub/'));
};
