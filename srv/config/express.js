var express = require(swot.VENDORDIR + 'express');

module.exports = function configureExpress(app) {
  app.use(express.static('pub/'));
};
