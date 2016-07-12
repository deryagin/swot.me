var router = require(swot.VENDOR_DIR + 'express').Router();
var pong = require('./pong');

router.all('/ping', pong);

module.exports.router = router;
