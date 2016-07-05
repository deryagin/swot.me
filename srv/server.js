var gns = require('./global');
var app = require(gns.ROOTDIR + 'srv/vendor/node_modules/express')();
var server = require('http').createServer(app);

var configureExpress = require(gns.ROOTDIR + 'srv/config/express');
var configureApp = require(gns.ROOTDIR + 'srv/config/app');

configureExpress(app);
configureApp(app);
server.listen(3000, '0.0.0.0');

