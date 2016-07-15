var express = require(swot.VENDOR_DIR + 'express');
var controller = require('./controller');

module.exports.router = router;

function router() {
  var router = new express.Router();
  router.post('/text/create', controller.create);
  router.post('/text/read', controller.read);
  router.post('/text/update', controller.update);
  router.post('/text/delete', controller.delete);
  router.post('/text/list', controller.list);
  return router;
}
