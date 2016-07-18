require('./global');

var app = require(swot.VENDOR_DIR + 'express')();
var server = require('http').createServer(app);
var express = require('./config/express.conf');
var routes = require('./config/routes.conf');

express.configure(app);
routes.configure(app);
server.listen(3000, '0.0.0.0');

