var express = require(swot.VENDOR_DIR + 'express');
var controller = require('./controller');

module.exports.router = router;

function router() {
  var router = new express.Router();
  router.post('/text', controller.create);
  router.get('/text', controller.read);
  router.put('/text', controller.update);
  router.delete('/text', controller.delete);
  router.get('/text/list', controller.list);
  return router;
}
