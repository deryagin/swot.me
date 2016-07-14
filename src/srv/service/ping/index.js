var express = require(swot.VENDOR_DIR + 'express');
var controller = require('./controller');

module.exports.router = router;

function router() {
  var router = new express.Router();
  router.all('/ping', controller.pong);
  return router;
}
