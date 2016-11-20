var express = require(swot.VENDOR_DIR + 'express');
var ping = require('./controller');

module.exports.router = router;

function router() {
  var router = new express.Router();
  router.all('/ping', ping.pong);
  return router;
}
