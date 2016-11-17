global.swot = require('./globals');
var app = require('express')();
var server = require('http').createServer(app);
var express = require('./config/express.conf');
var routes = require('./config/routes.conf');
var errors= require('./config/errors.conf');

express.configure(app);
routes.configure(app);
errors.configure(app);
server.listen(3000, '0.0.0.0');

