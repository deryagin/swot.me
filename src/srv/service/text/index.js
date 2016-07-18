var express = require(swot.VENDOR_DIR + 'express');
var item = require('./item.controller');
var list = require('./list.controller');

module.exports.router = router;

function router() {
  var router = new express.Router();
  router.post('/text/create', item.create);
  router.post('/text/read', item.read);
  router.post('/text/update', item.update);
  router.post('/text/delete', item.delete);
  router.post('/text/list/read', list.read);
  router.post('/text/list/delete', list.delete);
  return router;
}
