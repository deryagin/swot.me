require('./global');

var app = require(swot.VENDOR_DIR + 'express')();
var server = require('http').createServer(app);

var configureExpress = require(swot.SERVER_DIR + 'config/express.conf');
var configureRoutes = require(swot.SERVER_DIR + 'config/routes.conf');

configureExpress(app);
configureRoutes(app);
server.listen(3000, '0.0.0.0');

