require('./global');

var app = require(swot.VENDOR_DIR + 'express')();
var server = require('http').createServer(app);

var configureExpress = require(swot.SERVER_DIR + 'config/express');
var configureApp = require(swot.SERVER_DIR + 'config/app');

configureExpress(app);
configureApp(app);
server.listen(3000, '0.0.0.0');

