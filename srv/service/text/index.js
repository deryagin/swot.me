var express = require(swot.VENDOR_DIR + 'express');
var text = require('./text.controller');
var list = require('./list.controller');

module.exports.router = router;

function router() {
  var router = new express.Router();
  router.post('/text/create', text.create);
  router.post('/text/read', text.read);
  router.post('/text/update', text.update);
  router.post('/text/delete', text.delete);
  router.post('/text/list/read', list.read);
  router.post('/text/list/delete', list.delete);
  return router;
}
