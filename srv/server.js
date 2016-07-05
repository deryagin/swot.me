require('./global');

var app = require(swot.ROOTDIR + 'srv/vendor/node_modules/express')();
var server = require('http').createServer(app);

var configureExpress = require(swot.ROOTDIR + 'srv/config/express');
var configureApp = require(swot.ROOTDIR + 'srv/config/app');

configureExpress(app);
configureApp(app);
server.listen(3000, '0.0.0.0');

